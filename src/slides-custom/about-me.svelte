<script lang="ts">
	import { Transition } from '@animotion/core'

	let { name = '', title = '', points = [], image = '' } = $props()
</script>

<div class="flex items-center gap-20">
	<div class="flex flex-col text-left">
		{#if name}
			<Transition visible entry="slide-in-from-left" duration={0.6}>
				<p class="text-9xl font-black">{name}</p>
			</Transition>
		{/if}

		{#if points.length > 0}
			<div class="mt-4 flex flex-col gap-2 text-4xl font-semibold">
				{#each points as point, i}
					<Transition
						visible
						entry="slide-in-from-left"
						duration={0.5}
						delay={0.2 + i * 0.1}
					>
						<p>- {point}</p>
					</Transition>
				{/each}
			</div>
		{/if}
	</div>

	{#if image}
		<Transition visible entry="scale-in" duration={0.7} delay={0.1}>
			<img
				src={image}
				alt={name}
				class="h-80 w-80 rounded-full object-cover ring-4 ring-gray-200"
			/>
		</Transition>
	{/if}
</div>
