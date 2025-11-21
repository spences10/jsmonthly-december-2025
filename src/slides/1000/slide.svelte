<script lang="ts">
	import { Transition } from '@animotion/core'
</script>

<!-- Section Divider Slide -->
<!-- Use for: Topic transitions, breaking up content sections -->
<!-- Animation: Title scales in with custom animation -->

<Transition visible entry="scale-in" duration={0.8}>
	<h1 class="text-center text-8xl font-bold">Section Title</h1>
</Transition>
