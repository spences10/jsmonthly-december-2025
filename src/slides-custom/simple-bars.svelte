<script lang="ts">
	import { Transition } from '@animotion/core'

	interface Bar {
		label: string
		value: number
		color?: string
	}

	interface Props {
		title?: string
		bars?: Bar[]
		unit?: string
	}

	let {
		title = '',
		bars = [
			{ label: 'Work refactor', value: 75, color: 'bg-blue-500' },
			{ label: 'Personal projects', value: 21, color: 'bg-green-500' },
		],
		unit = 'h',
	}: Props = $props()

	const max = Math.max(...bars.map((b) => b.value || 0), 1)
</script>

<Transition visible entry="fade-in" duration={0.6}>
	{#if title}
		<h2 class="mb-16 text-5xl font-bold">{title}</h2>
	{/if}

	<div class="mx-auto flex max-w-4xl flex-col gap-8">
		{#each bars as bar}
			<div class="flex items-center gap-6">
				<!-- Value (left) -->
				<p class="w-32 text-right text-5xl font-bold">
					{bar.value}{unit}
				</p>

				<!-- Bar -->
				<div class="h-16 flex-1 overflow-hidden rounded-lg bg-gray-800">
					<div
						class="h-full rounded-lg {bar.color || 'bg-blue-500'}"
						style="width: {((bar.value || 0) / max) * 100}%;"
					></div>
				</div>

				<!-- Label (right) -->
				<p class="w-64 text-3xl text-gray-300">{bar.label}</p>
			</div>
		{/each}
	</div>
</Transition>
