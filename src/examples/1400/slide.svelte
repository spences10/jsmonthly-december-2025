<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Terminal/Command Slide -->
<!-- Use for: CLI commands, terminal output -->
<!-- Animation: Lines appear sequentially using order prop for typing effect -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-12 text-6xl font-bold">Running the Refactor</h2>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.2}>
	<div class="rounded-lg bg-gray-900 p-8 font-mono text-3xl text-left">
		<Transition visible order={1} delay={0.4}>
			<p class="text-green-400">$ claude refactor --files 377</p>
		</Transition>
		<Transition visible order={2} delay={0.6}>
			<p class="mt-4 text-gray-400">→ Analyzing codebase...</p>
		</Transition>
		<Transition visible order={3} delay={0.8}>
			<p class="text-gray-400">→ Refactoring files...</p>
		</Transition>
		<Transition visible order={4} delay={1.0}>
			<p class="text-gray-400">→ Running tests...</p>
		</Transition>
		<Transition visible order={5} delay={1.2}>
			<p class="mt-4 text-green-400">✓ Complete in 11 hours</p>
		</Transition>
	</div>
</Transition>
