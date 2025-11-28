<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Three Column Features',
		gradient_title = false,
		items = [
			{
				icon: '🔍',
				heading: 'Feature 1',
				description: 'Description 1',
			},
			{
				icon: '🏷️',
				heading: 'Feature 2',
				description: 'Description 2',
			},
			{
				icon: '🪶',
				heading: 'Feature 3',
				description: 'Description 3',
			},
		],
	} = $props()
</script>

<!-- Three Column Features Layout -->
<!-- Use for: Displaying icon-based features in three equal columns -->
<!-- Animation: Title appears first, then feature cards stagger in left to right -->

<div class="relative flex flex-col items-center">
	<!-- Title -->
	<Transition visible entry="scale-in" duration={0.6}>
		<h2 class="mb-16 text-center text-7xl font-bold">
			{#if gradient_title}
				<span
					class="bg-clip-text text-transparent"
					style="background-image: linear-gradient(to right, var(--color-primary), var(--color-success));"
				>
					{title}
				</span>
			{:else}
				{title}
			{/if}
		</h2>
	</Transition>

	<!-- Three Column Grid -->
	<div class="grid w-full max-w-[1600px] grid-cols-3 gap-8">
		{#each items as item, i}
			<Transition
				visible
				entry="scale-in"
				duration={0.6}
				delay={0.2 + i * 0.15}
			>
				<div
					class="gradient-primary relative flex h-full flex-col items-center justify-start rounded-3xl p-10 text-center"
				>
					<!-- Icon -->
					<div class="mb-6 text-8xl">
						{item.icon}
					</div>

					<!-- Heading -->
					<h3 class="mb-6 text-5xl font-bold">
						{item.heading}
					</h3>

					<!-- Description -->
					<p class="text-2xl leading-relaxed opacity-90">
						{item.description}
					</p>
				</div>
			</Transition>
		{/each}
	</div>
</div>
