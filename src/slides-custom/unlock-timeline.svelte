<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	let step = $state(0)
</script>

<!-- The Unlock Chain - shows how each PR enabled the next -->
<!-- Copy this to src/slides/1000/slide.svelte (or appropriate number) -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-12 text-6xl font-bold">The Unlock</h2>
</Transition>

<Transition visible duration={0.8} delay={0.2}>
	<div class="flex flex-col gap-6">
		<!-- PR 5361 -->
		<div class="flex items-center gap-6">
			<div
				class="flex h-32 w-80 flex-col items-center justify-center rounded-lg transition-all duration-500"
				class:bg-green-600={step >= 1}
				class:bg-gray-700={step < 1}
				class:scale-105={step === 1}
			>
				<p class="text-2xl font-bold">#5361</p>
				<p class="text-lg">Remove UI Package</p>
				<p class="text-sm opacity-70">377 files · 60h</p>
			</div>
			<div
				class="text-4xl transition-all duration-300"
				class:opacity-100={step >= 2}
				class:opacity-20={step < 2}
			>
				→
			</div>
			<p
				class="text-2xl italic transition-all duration-300"
				class:opacity-100={step >= 2}
				class:opacity-0={step < 2}
			>
				enabled
			</p>
		</div>

		<!-- PR 5375 -->
		<div class="flex items-center gap-6 pl-24">
			<div
				class="flex h-32 w-80 flex-col items-center justify-center rounded-lg transition-all duration-500"
				class:bg-blue-600={step >= 2}
				class:bg-gray-700={step < 2}
				class:scale-105={step === 2}
			>
				<p class="text-2xl font-bold">#5375</p>
				<p class="text-lg">Vanilla shadcn-svelte</p>
				<p class="text-sm opacity-70">364 files · 24h</p>
			</div>
			<div
				class="text-4xl transition-all duration-300"
				class:opacity-100={step >= 3}
				class:opacity-20={step < 3}
			>
				→
			</div>
			<p
				class="text-2xl italic transition-all duration-300"
				class:opacity-100={step >= 3}
				class:opacity-0={step < 3}
			>
				enabled
			</p>
		</div>

		<!-- PR 5381 -->
		<div class="flex items-center gap-6 pl-48">
			<div
				class="flex h-32 w-80 flex-col items-center justify-center rounded-lg transition-all duration-500"
				class:bg-purple-600={step >= 3}
				class:bg-gray-700={step < 3}
				class:scale-105={step === 3}
			>
				<p class="text-2xl font-bold">#5381</p>
				<p class="text-lg">Auth Optimization</p>
				<p class="text-sm opacity-70">122 files · 43h</p>
				<p class="mt-1 text-xs text-yellow-400">18 months waiting</p>
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
	]}
/>
