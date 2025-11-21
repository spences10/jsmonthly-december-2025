<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Two-Column Comparison Slide -->
<!-- Use for: Before/After, Problem/Solution, comparisons -->
<!-- Animation: Title appears first, then columns stagger in using order prop -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="text-8xl font-bold">Comparison</h2>
</Transition>

<div class="mt-16 grid grid-cols-2 gap-16 text-4xl">
	<Transition visible entry="scale-in" duration={0.6} delay={0.2} order={1}>
		<div>
			<h3 class="mb-8 text-5xl font-semibold text-red-400">Before</h3>
			<ul class="space-y-4" style="text-align: left;">
				<li>❌ Manual refactoring</li>
				<li>❌ Error-prone</li>
				<li>❌ Takes weeks</li>
			</ul>
		</div>
	</Transition>

	<Transition visible entry="scale-in" duration={0.6} delay={0.4} order={2}>
		<div>
			<h3 class="mb-8 text-5xl font-semibold text-green-400">After</h3>
			<ul class="space-y-4" style="text-align: left;">
				<li>✅ Automated with Claude</li>
				<li>✅ Consistent</li>
				<li>✅ Takes hours</li>
			</ul>
		</div>
	</Transition>
</div>
