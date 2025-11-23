<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	interface Props {
		title?: string
	}

	let { title = 'Parallel Tracks: Same 10 Days' }: Props = $props()

	let step = $state(0)

	const days = [
		{
			date: 'Nov 12',
			work: 'Started PR #5361',
			workDetail: 'Remove UI package begins',
			personal: 'Set up skills repo',
			personalDetail: 'svelte-claude-skills init',
		},
		{
			date: 'Nov 13',
			work: '12.5 hours coding',
			workDetail: 'Deep in UI removal',
			personal: 'Built eval framework',
			personalDetail: 'Cost calculator + metrics',
		},
		{
			date: 'Nov 15',
			work: 'Finishing #5361',
			workDetail: 'Final fixes + tests',
			personal: 'Created hook system',
			personalDetail: 'Skill activation hooks',
		},
		{
			date: 'Nov 16',
			work: 'Started #5375',
			workDetail: 'shadcn migration',
			personal: 'Published blog post',
			personalDetail: 'Skills activation guide',
			highlight: true,
		},
		{
			date: 'Nov 17-21',
			work: '3 more PRs merged',
			workDetail: '875 files total',
			personal: '4.5k readers',
			personalDetail: '11.1k views in 6 days',
			highlight: true,
		},
	]
</script>

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-8 text-5xl font-bold">{title}</h2>
</Transition>

<Transition visible duration={0.8} delay={0.2}>
	<div class="mt-4 flex gap-8">
		<!-- Work column -->
		<div class="flex-1">
			<h3 class="mb-4 text-3xl font-semibold text-blue-400">Work Refactor</h3>
			<div class="flex flex-col gap-3">
				{#each days as day, i}
					<div
						class="rounded-lg p-4 transition-all duration-500"
						class:bg-blue-600={step > i}
						class:bg-gray-700={step <= i}
						class:opacity-40={step < i}
						class:scale-105={step === i + 1}
					>
						<p class="text-lg font-bold">{day.date}</p>
						<p class="text-xl">{day.work}</p>
						<p class="text-sm opacity-70">{day.workDetail}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Center timeline -->
		<div class="flex flex-col items-center pt-12">
			{#each days as _, i}
				<div class="flex flex-col items-center">
					<div
						class="h-6 w-6 rounded-full transition-all duration-300"
						class:bg-yellow-400={step > i}
						class:bg-gray-500={step <= i}
						class:scale-125={step === i + 1}
					></div>
					{#if i < days.length - 1}
						<div
							class="h-16 w-1 transition-all duration-300"
							class:bg-yellow-400={step > i + 1}
							class:bg-gray-600={step <= i + 1}
						></div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Personal column -->
		<div class="flex-1">
			<h3 class="mb-4 text-3xl font-semibold text-green-400">Personal Projects</h3>
			<div class="flex flex-col gap-3">
				{#each days as day, i}
					<div
						class="rounded-lg p-4 transition-all duration-500"
						class:bg-green-600={step > i && day.highlight}
						class:bg-green-700={step > i && !day.highlight}
						class:bg-gray-700={step <= i}
						class:opacity-40={step < i}
						class:scale-105={step === i + 1}
					>
						<p class="text-lg font-bold">{day.date}</p>
						<p class="text-xl">{day.personal}</p>
						<p class="text-sm opacity-70">{day.personalDetail}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Transition>

<Action
	actions={[
		() => (step = 0),
		() => (step = 1),
		() => (step = 2),
		() => (step = 3),
		() => (step = 4),
		() => (step = 5),
	]}
/>
