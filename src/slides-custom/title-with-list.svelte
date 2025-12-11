<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Title',
		items = [
			{ text: 'Item 1' },
			{ text: 'Item 2' },
			{ text: 'Item 3' },
		],
	} = $props()
</script>

<!-- Title with List Layout -->
<!-- Use for: Large title on left with vertical list of items on right (with X icons) -->
<!-- Animation: Title appears first, then list items stagger in from top to bottom -->

<div class="mx-auto flex w-full max-w-[1600px] items-center">
	<div class="w-1/3 shrink-0">
		<Transition visible entry="scale-in" duration={0.6} class="block">
			<h2 class="text-left text-7xl font-bold">
				{title}
			</h2>
		</Transition>
	</div>

	<div class="flex w-2/3 flex-col gap-6">
		{#each items as item, i}
			<Transition
				visible
				entry="scale-in"
				duration={0.6}
				delay={0.2 + i * 0.15}
			>
				<div
					class="gradient-primary relative flex items-start gap-6 rounded-2xl p-8"
				>
					<p class="flex-1 text-left text-3xl leading-relaxed">
						{item.text}
					</p>
				</div>
			</Transition>
		{/each}
	</div>
</div>
