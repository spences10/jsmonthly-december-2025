<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Bullet Points Slide -->
<!-- Use for: Lists, key points, agenda items -->
<!-- Animation: Title appears first, then bullets stagger in using order prop -->
<!-- Add or remove bullet points as needed -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="text-8xl font-bold">Key Points</h2>
</Transition>

<div class="mt-16 flex flex-col gap-6 text-4xl">
	<Transition visible entry="scale-in" duration={0.6} delay={0.2} order={1}>
		<p>✓ First key point or benefit</p>
	</Transition>

	<Transition visible entry="scale-in" duration={0.6} delay={0.3} order={2}>
		<p>✓ Second important item</p>
	</Transition>

	<Transition visible entry="scale-in" duration={0.6} delay={0.4} order={3}>
		<p>✓ Third critical detail</p>
	</Transition>

	<Transition visible entry="scale-in" duration={0.6} delay={0.5} order={4}>
		<p>✓ Fourth essential point</p>
	</Transition>
</div>
