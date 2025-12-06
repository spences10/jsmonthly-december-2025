<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	interface Props {
		title?: string
		events?: string[] // Format: "date|text" or "date|text|highlight"
	}

	let {
		title = '',
		events = [
			'Nov 12|Started',
			'Nov 16|Blog published|highlight',
			'Nov 21|Done',
		],
	}: Props = $props()

	// Parse pipe-separated events
	const parsed_events = $derived(
		events.map((e) => {
			const parts = e.split('|')
			return {
				date: parts[0],
				text: parts[1],
				highlight: parts[2] === 'highlight',
			}
		}),
	)

	let step = $state(0)
</script>

<Transition visible entry="fade-in" duration={0.6}>
	{#if title}
		<h2 class="mb-16 text-5xl font-bold">{title}</h2>
	{/if}

	<div class="flex items-center justify-center">
		{#each parsed_events as event, i}
			<div class="flex items-center">
				<!-- Event -->
				<div
					class="flex flex-col items-center transition-opacity duration-500"
					class:opacity-100={step > i}
					class:opacity-30={step <= i}
				>
					<div
						class="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold transition-all duration-300"
						class:bg-yellow-500={event.highlight && step > i}
						class:bg-white={!event.highlight && step > i}
						class:bg-gray-700={step <= i}
						class:text-black={step > i}
						class:text-gray-500={step <= i}
					>
						{i + 1}
					</div>
					<p class="mt-4 text-3xl font-bold">{event.date}</p>
					<p
						class="mt-2 text-2xl"
						class:text-yellow-400={event.highlight}
						class:text-gray-400={!event.highlight}
					>
						{event.text}
					</p>
				</div>

				<!-- Connector line -->
				{#if i < parsed_events.length - 1}
					<div
						class="mx-8 h-1 w-32 transition-all duration-500"
						class:bg-white={step > i + 1}
						class:bg-gray-700={step <= i + 1}
					></div>
				{/if}
			</div>
		{/each}
	</div>
</Transition>

<Action
	actions={[
		() => (step = 0),
		...parsed_events.map((_, i) => () => (step = i + 1)),
	]}
/>
