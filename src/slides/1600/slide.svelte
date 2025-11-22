<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	let step = $state(0)
</script>

<!-- The Numbers - animated stats reveal -->
<!-- Copy this to src/slides/1500/slide.svelte (or appropriate number) -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-16 text-6xl font-bold">The Numbers</h2>
</Transition>

<Transition visible duration={0.8} delay={0.2}>
	<div class="grid grid-cols-2 gap-12 text-center">
		<!-- Files -->
		<div
			class="rounded-xl p-8 transition-all duration-500"
			class:bg-gray-800={step >= 1}
			class:opacity-100={step >= 1}
			class:opacity-30={step < 1}
		>
			<p class="text-8xl font-bold text-green-400">875</p>
			<p class="mt-4 text-3xl">files changed</p>
		</div>

		<!-- Commits -->
		<div
			class="rounded-xl p-8 transition-all duration-500"
			class:bg-gray-800={step >= 2}
			class:opacity-100={step >= 2}
			class:opacity-30={step < 2}
		>
			<p class="text-8xl font-bold text-blue-400">128</p>
			<p class="mt-4 text-3xl">commits</p>
		</div>

		<!-- Hours -->
		<div
			class="rounded-xl p-8 transition-all duration-500"
			class:bg-gray-800={step >= 3}
			class:opacity-100={step >= 3}
			class:opacity-30={step < 3}
		>
			<p class="text-8xl font-bold text-purple-400">137</p>
			<p class="mt-4 text-3xl">hours total</p>
		</div>

		<!-- Throughput -->
		<div
			class="rounded-xl p-8 transition-all duration-500"
			class:bg-gray-800={step >= 4}
			class:opacity-100={step >= 4}
			class:opacity-30={step < 4}
		>
			<p class="text-8xl font-bold text-yellow-400">329</p>
			<p class="mt-4 text-3xl">lines/hour</p>
		</div>
	</div>
</Transition>

<!-- PRs shipped -->
<Transition visible duration={0.6} delay={0.4}>
	<div
		class="mt-12 text-center transition-all duration-500"
		class:opacity-100={step >= 5}
		class:opacity-0={step < 5}
	>
		<p class="text-6xl font-bold">4 PRs shipped in 10 days</p>
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
