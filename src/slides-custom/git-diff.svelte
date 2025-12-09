<script lang="ts">
	import { Transition } from '@animotion/core'

	interface DiffLine {
		content: string
		type: 'normal' | 'removed' | 'added' | 'ellipsis'
	}

	interface Props {
		title?: string
		lines?: DiffLine[]
		scale?: number
	}

	let {
		title = 'Code Changes',
		lines = [],
		scale = 1,
	}: Props = $props()

	function get_line_style(type: string) {
		switch (type) {
			case 'removed':
				return 'background-color: rgba(239, 83, 80, 0.15); color: #EF5350;'
			case 'added':
				return 'background-color: rgba(197, 228, 120, 0.15); color: #C5E478;'
			case 'ellipsis':
				return 'color: #637777;'
			default:
				return 'color: #d6deeb;'
		}
	}

	function get_prefix(type: string) {
		switch (type) {
			case 'removed':
				return '-'
			case 'added':
				return '+'
			default:
				return ' '
		}
	}
</script>

<Transition visible entry="scale-in" duration={0.6} delay={0.2}>
	<div class="flex justify-center">
		<div
			class="overflow-hidden rounded-sm p-6 text-left font-mono text-2xl"
			style="background-color: #011627; transform: scale({scale});"
		>
			<pre class="leading-relaxed">{#each lines as line}<span
						class="block px-2"
						style={get_line_style(line.type)}
						><span class="mr-3 opacity-50"
							>{get_prefix(line.type)}</span
						>{line.content}</span
					>{/each}</pre>
		</div>
	</div>
</Transition>
