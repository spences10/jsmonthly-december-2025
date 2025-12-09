<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Numbered Grid',
		items = [
			{ number: '1', heading: 'Item 1', content: 'Content 1' },
			{ number: '2', heading: 'Item 2', content: 'Content 2' },
			{ number: '3', heading: 'Item 3', content: 'Content 3' },
			{ number: '4', heading: 'Item 4', content: 'Content 4' },
		],
	} = $props()
</script>

<!-- Numbered Grid Layout -->
<!-- Use for: Displaying 2x2 grid of numbered items with headings and content -->
<!-- Animation: Title appears first, then grid items stagger in -->

<div class="flex flex-col items-center">
	<Transition visible entry="scale-in" duration={0.6}>
		<h2 class="mb-12 text-center text-7xl font-bold">
			{title}
		</h2>
	</Transition>

	<div class="grid w-full max-w-[1400px] grid-cols-2 gap-8">
		{#each items as item, i}
			<Transition
				visible
				entry="scale-in"
				duration={0.6}
				delay={0.2 + i * 0.15}
			>
				<div
					class="gradient-primary relative rounded-2xl p-8 text-left"
				>
					<h3 class="mb-4 flex items-baseline gap-4 text-5xl font-bold">
						<span class="text-4xl opacity-40">{item.number}.</span>
						<span>{item.heading}</span>
					</h3>
					<p class="text-3xl leading-relaxed opacity-90">
						{item.content}
					</p>
				</div>
			</Transition>
		{/each}
	</div>
</div>
