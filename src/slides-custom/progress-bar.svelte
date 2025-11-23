<script lang="ts">
	import { Action, Transition } from '@animotion/core'
	import { tween } from '@animotion/motion'

	let progress = tween({ width: 0, color: 'var(--color-danger)' })
	let count = tween({ value: 0 })
</script>

<!-- Animated Diagram with Transitions and Actions -->
<!-- Use for: Progress visualization, animated data -->
<!-- Shows how to combine Transitions with Action stepping -->

<Transition visible>
	<h2 class="mb-12 text-6xl font-bold">Refactoring Progress</h2>
</Transition>

<Transition visible class="space-y-8">
	<!-- Animated progress bar -->
	<div class="h-16 w-full overflow-hidden rounded-full bg-gray-800">
		<div
			class="h-full rounded-full transition-all"
			style="width: {progress.width}%; background-color: {progress.color};"
		></div>
	</div>

	<!-- Animated counter -->
	<p class="text-center text-5xl">
		<span class="font-bold">{Math.floor(count.value)}</span> files completed
	</p>

	<Action
		actions={[
			async () => {
				await progress.to({ width: 33, color: 'var(--color-danger)' })
				await count.to({ value: 125 })
			},
			async () => {
				await progress.to({
					width: 66,
					color: 'var(--color-warning)',
				})
				await count.to({ value: 250 })
			},
			async () => {
				await progress.to({
					width: 100,
					color: 'var(--color-success)',
				})
				await count.to({ value: 377 })
			},
		]}
	/>
</Transition>
