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

<div
	class="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-16"
>
	<Transition visible entry="scale-in" duration={0.6}>
		<h2 class="text-7xl font-bold">
			{title}
		</h2>
	</Transition>

	<div class="flex flex-1 flex-col gap-6">
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
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center"
					>
						<svg
							class="h-10 w-10 text-red-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>

					<p class="flex-1 text-3xl leading-relaxed text-left">
						{item.text}
					</p>
				</div>
			</Transition>
		{/each}
	</div>
</div>
