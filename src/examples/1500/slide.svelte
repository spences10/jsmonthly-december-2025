<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Image + Caption Slide -->
<!-- Use for: Screenshots, diagrams, visual examples -->
<!-- Place images in static/ or import from $lib/images/ -->
<!-- Animation: Title fades in, then image, then caption -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-12 text-6xl font-bold">Visual Example</h2>
</Transition>

<!-- Option 1: From static folder -->
<!-- <Transition visible entry="scale-in" duration={0.8} delay={0.2}>
	<img src="/images/screenshot.png" alt="Description" class="max-h-[600px] mx-auto rounded-lg shadow-2xl" />
</Transition> -->

<!-- Option 2: Import from $lib -->
<!--
<script>
	import screenshot from '$lib/images/screenshot.png'
</script>
<Transition visible entry="scale-in" duration={0.8} delay={0.2}>
	<img src={screenshot} alt="Description" class="max-h-[600px] mx-auto rounded-lg shadow-2xl" />
</Transition>
-->

<!-- Placeholder -->
<Transition visible entry="scale-in" duration={0.8} delay={0.2}>
	<div class="mx-auto flex h-[500px] w-[900px] items-center justify-center rounded-lg bg-gray-800">
		<p class="text-4xl opacity-50">Image Placeholder</p>
	</div>
</Transition>

<Transition visible entry="scale-in" duration={0.6} delay={0.4}>
	<p class="mt-8 text-3xl opacity-70">Caption explaining the image</p>
</Transition>
