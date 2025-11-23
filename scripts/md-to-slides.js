#!/usr/bin/env node

import {
	existsSync,
	mkdirSync,
	readFileSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SLIDES_DIR = join(__dirname, '..', 'src', 'slides')

// Parse markdown file and split into slides
function parse_markdown(content) {
	return content
		.split(/^---$/m)
		.map((s) => s.trim())
		.filter((s) => s.length > 0)
}

// Check if slide is a component reference and extract props
// Code fence: ```component:name
//             prop: "value"
//             ```
// Single-line: ::component-name prop="value"
function parse_component_reference(md) {
	// Try code fence syntax: ```component:name ... ```
	const fence_match = md.match(
		/^```component:([a-zA-Z0-9-]+)\s*\n([\s\S]*?)^```$/m,
	)
	if (fence_match) {
		const component_name = fence_match[1]
		const block_content = fence_match[2]

		// Parse simple key: value props (supports strings, JSON, numbers, booleans)
		const props = {}

		// Unescape backslashes from quoted strings
		const unescape = (str) => str.replace(/\\\\/g, '\\')

		// Parse a value - handles JSON, numbers, booleans, and strings
		const parse_value = (str) => {
			const trimmed = str.trim()
			// Try JSON first (arrays and objects)
			if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
				try {
					return JSON.parse(trimmed)
				} catch (e) {
					// Fall through to string
				}
			}
			if (trimmed === 'true') return true
			if (trimmed === 'false') return false
			if (/^-?\d+\.?\d*$/.test(trimmed)) return parseFloat(trimmed)
			return trimmed
		}

		for (const line of block_content.split('\n')) {
			// Key with quoted value: key: "value"
			const prop_quoted = line.match(/^(\w+):\s*["'](.*)["']\s*$/)
			if (prop_quoted) {
				props[prop_quoted[1]] = unescape(prop_quoted[2])
				continue
			}

			// Key with unquoted value: key: value (handles JSON, numbers, booleans)
			const prop_unquoted = line.match(/^(\w+):\s*(.+?)\s*$/)
			if (prop_unquoted) {
				props[prop_unquoted[1]] = parse_value(prop_unquoted[2])
				continue
			}
		}

		return { name: component_name, props }
	}

	// Try single-line syntax: ::name prop="value"
	const inline_match = md.match(/^::([a-zA-Z0-9-]+)(.*)$/m)
	if (!inline_match) return null

	const component_name = inline_match[1]
	const attrs_string = inline_match[2].trim()

	// Parse attributes: prop="value" or prop='value'
	const props = {}
	const attr_regex = /(\w+)=["']([^"']*)["']/g
	let attr_match
	while ((attr_match = attr_regex.exec(attrs_string)) !== null) {
		props[attr_match[1]] = attr_match[2]
	}

	return { name: component_name, props }
}

// Extract speaker notes from markdown
// Syntax: > notes:
//         >   - bullet point
//         >   - another point
function extract_notes(md) {
	const lines = md.split('\n')
	const notes_lines = []
	const content_lines = []
	let in_notes = false

	for (const line of lines) {
		const trimmed = line.trim()

		// Start of notes block
		if (trimmed === '> notes:' || trimmed === '>notes:') {
			in_notes = true
			continue
		}

		// Continue notes block (lines starting with >)
		if (in_notes && trimmed.startsWith('>')) {
			// Remove the > prefix and any leading whitespace after it
			const note_content = trimmed.slice(1).trim()
			if (note_content.length > 0) {
				notes_lines.push(note_content)
			}
			continue
		}

		// End of notes block (non-blockquote line)
		if (in_notes && !trimmed.startsWith('>')) {
			in_notes = false
		}

		content_lines.push(line)
	}

	return {
		content: content_lines.join('\n').trim(),
		notes: notes_lines,
	}
}

// Convert notes array to HTML
function notes_to_html(notes) {
	if (notes.length === 0) return ''

	let html = '<Notes>\n'

	// Check if notes are bullet points
	const has_bullets = notes.some((n) => n.startsWith('- '))

	if (has_bullets) {
		html += '\t<ul>\n'
		for (const note of notes) {
			if (note.startsWith('- ')) {
				html += `\t\t<li>${note.slice(2)}</li>\n`
			} else {
				html += `\t\t<li>${note}</li>\n`
			}
		}
		html += '\t</ul>\n'
	} else {
		// Plain text notes
		html += `\t<p>${notes.join(' ')}</p>\n`
	}

	html += '</Notes>'
	return html
}

// Convert component name to PascalCase for import
function to_pascal_case(str) {
	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('')
}

// Generate a component wrapper slide
function generate_component_slide(
	component_name,
	props = {},
	notes = [],
) {
	const pascal_name = to_pascal_case(component_name)
	const has_notes = notes.length > 0

	// Check for image imports (src props starting with $lib/)
	const imports = [
		`import ${pascal_name} from '../../slides-custom/${component_name}.svelte'`,
	]

	if (has_notes) {
		imports.push(`import { Notes } from '@animotion/core'`)
	}

	const processed_props = {}

	for (const [key, value] of Object.entries(props)) {
		if (
			(key === 'src' || key === 'image') &&
			typeof value === 'string' &&
			value.startsWith('$lib/')
		) {
			// Generate an import for the image
			const img_var = key === 'src' ? 'slideImage' : 'slideImageProp'
			imports.push(`import ${img_var} from '${value}'`)
			processed_props[key] = { type: 'variable', value: img_var }
		} else if (
			Array.isArray(value) ||
			(typeof value === 'object' && value !== null)
		) {
			// Array or object prop - serialize as JSON
			processed_props[key] = { type: 'json', value }
		} else if (
			typeof value === 'number' ||
			typeof value === 'boolean'
		) {
			// Number or boolean - use JS expression
			processed_props[key] = { type: 'expression', value }
		} else {
			processed_props[key] = { type: 'string', value }
		}
	}

	// Build props string for the component
	const props_entries = Object.entries(processed_props)
	let props_string = ''

	if (props_entries.length > 0) {
		props_string =
			' ' +
			props_entries
				.map(([key, prop]) => {
					if (prop.type === 'variable') {
						return `${key}={${prop.value}}`
					}
					if (prop.type === 'json') {
						return `${key}={${JSON.stringify(prop.value)}}`
					}
					if (prop.type === 'expression') {
						return `${key}={${prop.value}}`
					}
					return `${key}="${prop.value}"`
				})
				.join(' ')
	}

	let output = `<script>
	${imports.join('\n\t')}
</script>

<${pascal_name}${props_string} />`

	if (has_notes) {
		output += '\n\n' + notes_to_html(notes)
	}

	return output + '\n'
}

// Convert markdown to basic Svelte slide
function markdown_to_svelte(md, index) {
	// Extract notes first (works for both component and regular slides)
	const { content, notes } = extract_notes(md)
	const has_notes = notes.length > 0

	// Check for component reference
	const component_ref = parse_component_reference(content)
	if (component_ref) {
		return generate_component_slide(
			component_ref.name,
			component_ref.props,
			notes,
		)
	}

	const lines = content.split('\n')
	let html = ''

	for (const line of lines) {
		const trimmed = line.trim()

		// Headers
		if (trimmed.startsWith('## ')) {
			html += `<h2 class="text-8xl font-bold">${trimmed.slice(3)}</h2>\n`
		} else if (trimmed.startsWith('# ')) {
			html += `<h1 class="text-9xl font-bold text-center">${trimmed.slice(2)}</h1>\n`
		}
		// Paragraphs (non-empty lines that aren't headers)
		else if (trimmed.length > 0 && !trimmed.startsWith('<!--')) {
			// Check if it looks like a subtitle (in parentheses)
			if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
				html += `<p class="text-5xl opacity-80">${trimmed}</p>\n`
			} else {
				html += `<p class="mt-8 text-4xl">${trimmed}</p>\n`
			}
		}
	}

	// Add notes if present
	if (has_notes) {
		const notes_html = notes_to_html(notes)
		const script = `<script>\n\timport { Notes } from '@animotion/core'\n</script>\n\n`
		return script + html.trim() + '\n\n' + notes_html
	}

	return html.trim()
}

// Clear all existing slide directories (numbered folders only)
function clear_slides_directory() {
	if (!existsSync(SLIDES_DIR)) return

	const entries = readdirSync(SLIDES_DIR, { withFileTypes: true })
	let removed = 0

	for (const entry of entries) {
		// Only remove numbered directories (10, 20, etc.)
		if (entry.isDirectory() && /^\d+$/.test(entry.name)) {
			const dir_path = join(SLIDES_DIR, entry.name)
			rmSync(dir_path, { recursive: true, force: true })
			removed++
		}
	}

	if (removed > 0) {
		console.log(`Cleared ${removed} existing slide directories`)
	}
}

// Main
const input_file = process.argv[2]
if (!input_file) {
	console.log('Usage: node scripts/md-to-slides.js <markdown-file>')
	console.log('Example: node scripts/md-to-slides.js talk.md')
	process.exit(1)
}

const content = readFileSync(input_file, 'utf-8')
const slides = parse_markdown(content)

// Clear existing slides before generating new ones
clear_slides_directory()

console.log(`Found ${slides.length} slides`)

// Generate slides starting at 10, incrementing by 10
slides.forEach((md, i) => {
	const num = (i + 1) * 10
	const dir = join(SLIDES_DIR, String(num))
	const file = join(dir, 'slide.svelte')

	if (!existsSync(dir)) {
		mkdirSync(dir, { recursive: true })
	}

	const svelte = markdown_to_svelte(md, i)
	writeFileSync(file, svelte + '\n')
	console.log(`Created: src/slides/${num}/slide.svelte`)
})

console.log('\nDone! Slides created.')
