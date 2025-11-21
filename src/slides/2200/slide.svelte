<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Key Takeaways Slide -->
<!-- Use for: Summary points, conclusions, main learnings -->
<!-- Animation: Title scales in, then takeaways stagger with checkmarks -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="text-8xl font-bold">Key Takeaways</h2>
</Transition>

<div class="mt-16 flex flex-col gap-8 text-4xl">
	<Transition visible entry="scale-in" duration={0.6} delay={0.2} order={1}>
		<div class="flex items-start gap-6">
			<span class="text-5xl text-green-400">✓</span>
			<p>AI handles tedious work so you focus on solving interesting problems</p>
		</div>
	</Transition>

	<Transition visible entry="scale-in" duration={0.6} delay={0.3} order={2}>
		<div class="flex items-start gap-6">
			<span class="text-5xl text-green-400">✓</span>
			<p>Large-scale refactors become manageable with the right tools</p>
		</div>
	</Transition>

	<Transition visible entry="scale-in" duration={0.6} delay={0.4} order={3}>
		<div class="flex items-start gap-6">
			<span class="text-5xl text-green-400">✓</span>
			<p>Building reliable workflows is more important than one-off solutions</p>
		</div>
	</Transition>
</div>
