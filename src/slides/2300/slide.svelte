<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Thank You / Contact Slide -->
<!-- Use for: Final slide, contact information, Q&A prompt -->
<!-- Animation: Thank you message scales in, then contact info staggers -->
<!-- Replace with your actual social media handles and links -->

<Transition visible entry="scale-in" duration={0.8}>
	<h1 class="text-9xl font-bold">Thank You!</h1>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.3}>
	<p class="mt-12 text-5xl opacity-80">Questions?</p>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.5}>
	<div class="mt-16 flex flex-col gap-6 text-4xl">
		<p>🌐 yourwebsite.com</p>
		<p>𝕏 @yourhandle</p>
		<p>📧 your@email.com</p>
		<p>💻 github.com/yourusername</p>
	</div>
</Transition>
