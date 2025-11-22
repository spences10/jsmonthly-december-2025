<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Title Slide -->
<!-- Use for: Opening slide, talk introduction -->
<!-- Animation: Title scales in first, then subtitle and details stagger in -->
<!-- Replace content with your talk title, name, event, date -->

<Transition visible entry="scale-in" duration={0.8}>
	<h1 class="mx-auto max-w-6xl text-center text-8xl font-bold">Your Talk Title Here</h1>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.3} order={1}>
	<p class="mt-12 text-4xl opacity-80">Your Subtitle or Tagline</p>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.5} order={2}>
	<div class="mt-16 flex flex-col gap-4 text-3xl opacity-70">
		<p>Your Name</p>
		<p>Event Name • Date</p>
	</div>
</Transition>
