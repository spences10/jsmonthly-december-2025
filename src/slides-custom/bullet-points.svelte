<script lang="ts">
	import { Transition } from '@animotion/core'

	let { title = '', points = [], list_style = '-' } = $props()

	function parse_inline_code(text: string): string {
		return text.replace(
			/`([^`]+)`/g,
			'<code class="bg-gray-400 px-3 py-1 rounded-2xl font-mono text-[0.9em]">$1</code>',
		)
	}
</script>

<div class="flex flex-col items-start text-left">
	{#if title}
		<Transition visible entry="scale-in" duration={0.6}>
			<h2 class="text-8xl font-bold">{title}</h2>
		</Transition>
	{/if}

	{#if points.length > 0}
		<ul class="mt-12 flex list-none flex-col gap-6 text-4xl">
			{#each points as point, i}
				<Transition
					visible
					entry="scale-in"
					duration={0.5}
					delay={0.2 + i * 0.1}
				>
					<li>
						{list_style
							? `${list_style} `
							: ''}{@html parse_inline_code(point)}
					</li>
				</Transition>
			{/each}
		</ul>
	{/if}
</div>
