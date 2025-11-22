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

// Check if slide is a component reference
function parse_component_reference(md) {
	const match = md.match(/<!--\s*component:\s*([a-zA-Z0-9-]+)\s*-->/)
	return match ? match[1] : null
}

// Convert component name to PascalCase for import
function to_pascal_case(str) {
	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('')
}

// Generate a component wrapper slide
function generate_component_slide(component_name) {
	const pascal_name = to_pascal_case(component_name)
	return `<script>
	import ${pascal_name} from '../../slides-custom/${component_name}.svelte'
</script>

<${pascal_name} />
`
}

// Convert markdown to basic Svelte slide
function markdown_to_svelte(md, index) {
	// Check for component reference first
	const component_name = parse_component_reference(md)
	if (component_name) {
		return generate_component_slide(component_name)
	}

	const lines = md.split('\n')
	let html = ''
	let inList = false
	let listType = null

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
			if (!inList || listType !== 'ul') {
				if (inList) html += listType === 'ol' ? '</ol>\n' : '</ul>\n'
				html += '<ul class="mt-8 flex flex-col gap-4 text-4xl">\n'
				inList = true
				listType = 'ul'
			}
			html += `\t<li>${trimmed.slice(2)}</li>\n`
		}
		// Numbered lists
		else if (/^\d+\.\s/.test(trimmed)) {
			if (!inList || listType !== 'ol') {
				if (inList) html += listType === 'ol' ? '</ol>\n' : '</ul>\n'
				html +=
					'<ol class="mt-8 flex flex-col gap-4 text-4xl list-decimal list-inside">\n'
				inList = true
				listType = 'ol'
			}
			html += `\t<li>${trimmed.replace(/^\d+\.\s/, '')}</li>\n`
		}
		// Paragraphs (non-empty lines that aren't headers or lists)
		else if (trimmed.length > 0) {
			if (inList) {
				html += listType === 'ol' ? '</ol>\n' : '</ul>\n'
				inList = false
				listType = null
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
	if (inList) {
		html += listType === 'ol' ? '</ol>\n' : '</ul>\n'
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
