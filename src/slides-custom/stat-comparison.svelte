<script lang="ts">
	import { Transition } from '@animotion/core'

	interface Props {
		title?: string
		stats?: string[] // Format: "value|label|color"
	}

	let {
		title = '',
		stats = ['75h|Work|text-blue-400', '21h|Personal|text-green-400'],
	}: Props = $props()

	// Parse pipe-separated stats
	const parsed_stats = $derived(
		stats.map((s) => {
			const [value, label, color] = s.split('|')
			return { value, label, color: color || 'text-white' }
		}),
	)
</script>

<Transition visible entry="fade-in" duration={0.6}>
	{#if title}
		<h2 class="mb-16 text-5xl font-bold">{title}</h2>
	{/if}

	<div class="flex items-center justify-center gap-24">
		{#each parsed_stats as stat}
			<div class="text-center">
				<p
					class="text-[10rem] leading-none font-black {stat.color ||
						'text-white'}"
				>
					{stat.value}
				</p>
				<p class="mt-4 text-4xl text-gray-400">{stat.label}</p>
			</div>
		{/each}
	</div>
</Transition>
