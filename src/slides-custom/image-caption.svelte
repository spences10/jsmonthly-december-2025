<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		src = '',
		alt = 'Slide image',
		title = '',
		caption = '',
		scale = 1,
	} = $props()
</script>

<div style="transform: scale({scale});">
	{#if title}
		<Transition visible entry="scale-in" duration={0.6}>
			<h2 class="mb-12 text-6xl font-bold">{title}</h2>
		</Transition>
	{/if}

	<Transition
		visible
		entry="scale-in"
		duration={0.8}
		delay={title ? 0.2 : 0}
	>
		{#if src}
			<img
				{src}
				{alt}
				class="mx-auto max-h-[800px] rounded-lg shadow-2xl"
			/>
		{:else}
			<div
				class="mx-auto flex h-[500px] w-[900px] items-center justify-center rounded-lg bg-gray-800"
			>
				<p class="text-4xl opacity-50">Image Placeholder</p>
			</div>
		{/if}
	</Transition>

	{#if caption}
		<Transition visible entry="scale-in" duration={0.6} delay={0.4}>
			<p class="mt-8 text-3xl opacity-70">{caption}</p>
		</Transition>
	{/if}
</div>
