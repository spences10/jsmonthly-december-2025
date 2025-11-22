<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Thank You!',
		subtitle = 'Questions?',
		links = [],
	} = $props()
</script>

<div class="flex flex-col items-center">
	{#if title}
		<Transition visible entry="scale-in" duration={0.8}>
			<h1 class="text-9xl font-bold">{title}</h1>
		</Transition>
	{/if}

	{#if subtitle}
		<Transition visible entry="scale-in" duration={0.6} delay={0.3}>
			<p class="mt-12 text-5xl opacity-80">{subtitle}</p>
		</Transition>
	{/if}

	{#if links.length > 0}
		<Transition visible entry="scale-in" duration={0.6} delay={0.5}>
			<div class="mt-16 flex flex-col gap-6 text-left text-4xl">
				{#each links as link}
					<p>{link}</p>
				{/each}
			</div>
		</Transition>
	{/if}
</div>
