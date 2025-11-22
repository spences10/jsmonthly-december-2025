<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Key Takeaways',
		points = [],
		icons = [],
		icon = '✓',
	} = $props()
</script>

<div class="flex flex-col items-start text-left">
	{#if title}
		<Transition visible entry="scale-in" duration={0.6}>
			<h2 class="text-8xl font-bold">{title}</h2>
		</Transition>
	{/if}

	{#if points.length > 0}
		<div class="mt-16 flex flex-col gap-8 text-4xl">
			{#each points as point, i}
				<Transition
					visible
					entry="scale-in"
					duration={0.6}
					delay={0.2 + i * 0.1}
				>
					<div class="flex items-start gap-6">
						<span class="text-5xl text-green-400"
							>{icons[i] || icon}</span
						>
						<p>{point}</p>
					</div>
				</Transition>
			{/each}
		</div>
	{/if}
</div>
