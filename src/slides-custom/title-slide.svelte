<script lang="ts">
	import { Transition } from '@animotion/core'

	let {
		title = 'Your Talk Title Here',
		subtitle = '',
		name = '',
		event = '',
		date = '',
	} = $props()
</script>

<Transition visible entry="scale-in" duration={0.8}>
	<h1 class="mx-auto max-w-7xl text-center text-9xl font-bold">
		{title}
	</h1>
</Transition>

{#if subtitle}
	<Transition
		visible
		entry="scale-in"
		duration={0.6}
		delay={0.3}
		order={1}
	>
		<p class="mt-12 text-5xl opacity-80">{subtitle}</p>
	</Transition>
{/if}

{#if name || event || date}
	<Transition
		visible
		entry="scale-in"
		duration={0.6}
		delay={0.5}
		order={2}
	>
		<div class="mt-16 flex flex-col gap-4 text-3xl opacity-70">
			{#if name}<p>{name}</p>{/if}
			{#if event || date}
				<p>{event}{#if event && date}{' '}-{' '}{/if}{date}</p>
			{/if}
		</div>
	</Transition>
{/if}
