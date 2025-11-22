<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Quote Slide -->
<!-- Use for: Memorable quotes, testimonials, key insights -->
<!-- Animation: Quote text scales in, then attribution appears -->

<div class="mx-auto max-w-5xl text-center">
	<Transition visible entry="scale-in" duration={0.8}>
		<p class="text-6xl italic leading-tight">
			"AI isn't replacing developers—it's handling the tedious parts so we can focus on the
			interesting problems."
		</p>
	</Transition>

	<Transition visible entry="scale-in" duration={0.6} delay={0.4}>
		<p class="mt-16 text-4xl opacity-70">— Scott Spence</p>
	</Transition>
</div>
