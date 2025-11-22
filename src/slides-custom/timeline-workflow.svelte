<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	let step = $state(0)
</script>

<!-- Timeline/Workflow Slide -->
<!-- Use for: Process steps, sequential workflows, timelines -->
<!-- Use arrow keys to step through the workflow stages -->
<!-- Each step highlights the current stage and shows cumulative progress -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-16 text-6xl font-bold">The Refactoring Process</h2>
</Transition>

<Transition visible duration={0.8} delay={0.2}>
	<div class="flex flex-col gap-8 text-4xl">
		<!-- Step 1 -->
		<div class="flex items-center gap-8">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300"
				class:bg-green-500={step >= 1}
				class:bg-gray-700={step < 1}
			>
				<span class="text-2xl font-bold">1</span>
			</div>
			<p class:text-green-400={step >= 1} class:opacity-50={step < 1}>Analyze codebase structure</p>
		</div>

		<!-- Step 2 -->
		<div class="flex items-center gap-8">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300"
				class:bg-green-500={step >= 2}
				class:bg-gray-700={step < 2}
			>
				<span class="text-2xl font-bold">2</span>
			</div>
			<p class:text-green-400={step >= 2} class:opacity-50={step < 2}>
				Create refactoring strategy
			</p>
		</div>

		<!-- Step 3 -->
		<div class="flex items-center gap-8">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300"
				class:bg-green-500={step >= 3}
				class:bg-gray-700={step < 3}
			>
				<span class="text-2xl font-bold">3</span>
			</div>
			<p class:text-green-400={step >= 3} class:opacity-50={step < 3}>Execute changes with AI</p>
		</div>

		<!-- Step 4 -->
		<div class="flex items-center gap-8">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300"
				class:bg-green-500={step >= 4}
				class:bg-gray-700={step < 4}
			>
				<span class="text-2xl font-bold">4</span>
			</div>
			<p class:text-green-400={step >= 4} class:opacity-50={step < 4}>Test and validate results</p>
		</div>
	</div>
</Transition>

<Action
	actions={[
		() => (step = 0), // Initial state - all grey
		() => (step = 1), // Step 1 active
		() => (step = 2), // Step 2 active
		() => (step = 3), // Step 3 active
		() => (step = 4), // Step 4 active - all complete
	]}
/>
