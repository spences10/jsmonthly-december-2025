<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Three Column Cards',
		items = [
			{
				number: '1',
				heading: 'Card 1',
				points: ['Point 1'],
				conclusion: 'Conclusion 1',
			},
			{
				number: '2',
				heading: 'Card 2',
				points: ['Point 1', 'Point 2'],
				conclusion: 'Conclusion 2',
			},
			{
				number: '3',
				heading: 'Card 3',
				points: ['Point 1'],
				conclusion: 'Conclusion 3',
			},
		],
	} = $props()
</script>

<!-- Three Column Cards Layout -->
<!-- Use for: Displaying three equal-width cards with numbered sections, bullet points, and conclusions -->
<!-- Animation: Title appears first, then cards stagger in left to right -->

<div class="flex flex-col items-center">
	<Transition visible entry="scale-in" duration={0.6}>
		<h2 class="mb-12 text-center text-7xl font-bold">
			{title}
		</h2>
	</Transition>

	<div class="grid w-full max-w-[1600px] grid-cols-3 gap-6">
		{#each items as item, i}
			<Transition
				visible
				entry="scale-in"
				duration={0.6}
				delay={0.2 + i * 0.15}
			>
				<div
					class="gradient-primary relative flex h-full flex-col rounded-2xl p-6 text-left"
				>
					<div class="text-5xl font-bold opacity-20">
						{item.number}
					</div>

					<h3 class="mt-4 mb-6 text-5xl font-bold">
						{item.heading}
					</h3>

					<div class="flex-1 space-y-3">
						{#each item.points as point}
							<p class="text-3xl leading-relaxed opacity-90">
								{point}
							</p>
						{/each}
					</div>

					<p
						class="mt-6 border-t border-white/20 pt-4 text-3xl font-semibold"
					>
						{item.conclusion}
					</p>
				</div>
			</Transition>
		{/each}
	</div>
</div>
