<script lang="ts">
	import { Transition } from '@animotion/core'

	interface Props {
		number?: string | number
		label?: string
		sublabel?: string
		color?: string
	}

	let {
		number = '875',
		label = 'files changed',
		sublabel = '',
		color = 'text-green-400',
	}: Props = $props()
</script>

<Transition visible entry="scale-in" duration={0.6}>
	<div class="flex h-full flex-col items-center justify-center">
		<p class="text-[12rem] font-black leading-none {color}">
			{number}
		</p>
		<p class="mt-4 text-6xl font-light text-gray-300">{label}</p>
		{#if sublabel}
			<p class="mt-4 text-3xl text-gray-500">{sublabel}</p>
		{/if}
	</div>
</Transition>
