#!/usr/bin/env node

import {
	existsSync,
	mkdirSync,
	readFileSync,
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

		// Parse YAML-like props
		const props = {}
		const lines = block_content.split('\n')
		let current_array_key = null

		for (const line of lines) {
			// Array item: - "value" or - value (unquoted)
			const array_item_quoted = line.match(/^\s*-\s*["'](.*)["']\s*$/)
			const array_item_unquoted = line.match(/^\s*-\s+(.+?)\s*$/)
			const array_item_match =
				array_item_quoted || array_item_unquoted
			if (array_item_match && current_array_key) {
				props[current_array_key].push(array_item_match[1])
				continue
			}

			// Key with value: key: "value"
			const prop_match = line.match(/^\s*(\w+):\s*["'](.*)["']\s*$/)
			if (prop_match) {
				props[prop_match[1]] = prop_match[2]
				current_array_key = null
				continue
			}

			// Key without value (starts array): key:
			const array_start_match = line.match(/^\s*(\w+):\s*$/)
			if (array_start_match) {
				current_array_key = array_start_match[1]
				props[current_array_key] = []
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
		} else if (Array.isArray(value)) {
			// Array prop - serialize as JSON
			processed_props[key] = { type: 'array', value }
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
					if (prop.type === 'array') {
						return `${key}={${JSON.stringify(prop.value)}}`
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
	let in_list = false
	let list_type = null

	for (const line of lines) {
		const trimmed = line.trim()

		// Headers
		if (trimmed.startsWith('## ')) {
			html += `<h2 class="text-8xl font-bold">${trimmed.slice(3)}</h2>\n`
		} else if (trimmed.startsWith('# ')) {
			html += `<h1 class="text-9xl font-bold text-center">${trimmed.slice(2)}</h1>\n`
		}
		// Bullet lists
		else if (trimmed.startsWith('- ')) {
			if (!in_list || list_type !== 'ul') {
				if (in_list)
					html += list_type === 'ol' ? '</ol>\n' : '</ul>\n'
				html += '<ul class="mt-8 flex flex-col gap-4 text-4xl">\n'
				in_list = true
				list_type = 'ul'
			}
			html += `\t<li>${trimmed.slice(2)}</li>\n`
		}
		// Numbered lists
		else if (/^\d+\.\s/.test(trimmed)) {
			if (!in_list || list_type !== 'ol') {
				if (in_list)
					html += list_type === 'ol' ? '</ol>\n' : '</ul>\n'
				html +=
					'<ol class="mt-8 flex flex-col gap-4 text-4xl list-decimal list-inside">\n'
				in_list = true
				list_type = 'ol'
			}
			html += `\t<li>${trimmed.replace(/^\d+\.\s/, '')}</li>\n`
		}
		// Paragraphs (non-empty lines that aren't headers or lists)
		else if (trimmed.length > 0) {
			if (in_list) {
				html += list_type === 'ol' ? '</ol>\n' : '</ul>\n'
				in_list = false
				list_type = null
			}
			// Check if it looks like a subtitle (in parentheses)
			if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
				html += `<p class="text-5xl opacity-80">${trimmed}</p>\n`
			} else {
				html += `<p class="mt-8 text-4xl">${trimmed}</p>\n`
			}
		}
	}

	// Close any open list
	if (in_list) {
		html += list_type === 'ol' ? '</ol>\n' : '</ul>\n'
	}

	// Add notes if present
	if (has_notes) {
		const notes_html = notes_to_html(notes)
		const script = `<script>\n\timport { Notes } from '@animotion/core'\n</script>\n\n`
		return script + html.trim() + '\n\n' + notes_html
	}

	return html.trim()
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

console.log(`Found ${slides.length} slides`)

// Generate slides starting at 100, incrementing by 100
slides.forEach((md, i) => {
	const num = (i + 1) * 100
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
