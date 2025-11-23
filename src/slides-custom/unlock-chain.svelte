<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	interface Props {
		title?: string
		items?: string[] // Format: "label|sublabel"
	}

	let {
		title = 'The Unlock Chain',
		items = ['#5361|Remove UI', '#5375|shadcn-svelte', '#5381|Auth optimization'],
	}: Props = $props()

	// Parse pipe-separated items
	const parsed_items = items.map((item) => {
		const [label, sublabel] = item.split('|')
		return { label, sublabel }
	})

	let step = $state(0)
</script>

<Transition visible entry="fade-in" duration={0.6}>
	{#if title}
		<h2 class="mb-20 text-5xl font-bold">{title}</h2>
	{/if}

	<div class="flex items-center justify-center">
		{#each parsed_items as item, i}
			<div class="flex items-center">
				<!-- Item -->
				<div
					class="flex flex-col items-center transition-all duration-500"
					class:opacity-100={step > i}
					class:opacity-30={step <= i}
					class:scale-110={step === i + 1}
				>
					<p class="text-7xl font-black">{item.label}</p>
					{#if item.sublabel}
						<p class="mt-2 text-2xl text-gray-400">{item.sublabel}</p>
					{/if}
				</div>

				<!-- Arrow -->
				{#if i < items.length - 1}
					<div
						class="mx-12 text-6xl transition-opacity duration-500"
						class:opacity-100={step > i + 1}
						class:opacity-20={step <= i + 1}
					>
						→
					</div>
				{/if}
			</div>
		{/each}
	</div>
</Transition>

<Action
	actions={[
		() => (step = 0),
		...parsed_items.map((_, i) => () => (step = i + 1)),
	]}
/>
