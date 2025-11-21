<script lang="ts">
	import { Transition } from '@animotion/core'
	import { tween } from '@animotion/motion'

	let count = tween(0)

	// Animate to target value when slide becomes visible
	count.to(377, { duration: 2000 })
</script>

<!-- Big Number/Stat Slide -->
<!-- Use for: Key metrics, impactful statistics -->
<!-- Animation: Number counts up from 0 to target, text fades in -->
<!-- To change the number: update the count.to() value and the display text -->

<Transition visible entry="scale-in" duration={0.6}>
	<p class="text-9xl font-bold text-yellow-400">{Math.floor(count.current)}</p>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.3}>
	<p class="mt-8 text-5xl">Files Refactored</p>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.6}>
	<p class="mt-12 text-4xl opacity-70">In just 11 hours</p>
</Transition>
