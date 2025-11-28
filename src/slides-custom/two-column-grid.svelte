<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Two Column Grid',
		gradient_title = false,
		left_title = 'Left Column',
		left_items = [
			{ main: 'Item 1', sub: 'Description 1' },
			{ main: 'Item 2', sub: 'Description 2' },
		],
		right_title = 'Right Column',
		right_items = [
			{ main: 'Item 1', sub: 'Description 1' },
			{ main: 'Item 2', sub: 'Description 2' },
		],
	} = $props()

	const columns = [
		{
			title: left_title,
			items: left_items,
			gradient: 'gradient-primary',
			delay: 0.2,
		},
		{
			title: right_title,
			items: right_items,
			gradient: 'gradient-danger',
			delay: 0.4,
		},
	]
</script>

<!-- AI Excels vs Struggles Comparison Slide -->
<!-- Use for: Showing AI capabilities and limitations side by side -->
<!-- Animation: Title appears first, then columns stagger in -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-12 text-7xl font-bold">
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

<div class="mt-8 grid grid-cols-2 gap-12">
	{#each columns as column}
		<Transition
			visible
			entry="scale-in"
			duration={0.6}
			delay={column.delay}
		>
			<div class="{column.gradient} rounded-3xl p-10 px-20">
				<h3 class="mb-8 text-5xl font-semibold">
					{column.title}
				</h3>
				<ul class="space-y-6 text-left">
					{#each column.items as item, i}
						<Transition
							visible
							entry="scale-in"
							duration={0.4}
							delay={column.delay + 0.2 + i * 0.1}
						>
							<li class="mb-5">
								<div class="text-3xl font-medium">
									{item.main}
								</div>
								<div class="mt-1 text-2xl">
									{item.sub}
								</div>
							</li>
						</Transition>
					{/each}
				</ul>
			</div>
		</Transition>
	{/each}
</div>
