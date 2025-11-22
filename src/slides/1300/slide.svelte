<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	let step = $state(0)
</script>

<!-- Before vs After - the 18 months comparison -->
<!-- Copy to appropriate slide number -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-16 text-6xl font-bold">Before vs After</h2>
</Transition>

<Transition visible duration={0.8} delay={0.2}>
	<div class="flex items-center justify-center gap-16">
		<!-- Before -->
		<div
			class="flex h-64 w-96 flex-col items-center justify-center rounded-xl transition-all duration-500 {step >= 1 ? 'bg-red-900/50 border-2 border-red-500' : 'bg-gray-800'}"
		>
			<p class="text-2xl font-bold uppercase tracking-wider opacity-60">Without AI</p>
			<p class="mt-4 text-5xl font-bold text-red-400">"Maybe someday..."</p>
			<p class="mt-4 text-2xl opacity-70">18 months waiting</p>
		</div>

		<!-- Arrow -->
		<div
			class="text-6xl transition-all duration-500"
			class:opacity-100={step >= 2}
			class:opacity-20={step < 2}
		>
			→
		</div>

		<!-- After -->
		<div
			class="flex h-64 w-96 flex-col items-center justify-center rounded-xl transition-all duration-500 {step >= 2 ? 'bg-green-900/50 border-2 border-green-500' : 'bg-gray-800'}"
		>
			<p class="text-2xl font-bold uppercase tracking-wider opacity-60">With Claude</p>
			<p class="mt-4 text-5xl font-bold text-green-400">10 days, done</p>
			<p class="mt-4 text-2xl opacity-70">43 hours of work</p>
		</div>
	</div>
</Transition>

<Action
	actions={[
		() => (step = 0),
		() => (step = 1),
		() => (step = 2),
	]}
/>
