<script lang="ts">
	import { Transition } from '@animotion/core'
	import { bin } from 'd3-array'
	import { BarChart, Tooltip } from 'layerchart'
	import { onMount, tick } from 'svelte'

	let mounted = $state(false)

	onMount(async () => {
		await tick()
		const wait_for_dom = () => {
			if (document.head) {
				mounted = true
			} else {
				requestAnimationFrame(wait_for_dom)
			}
		}
		setTimeout(wait_for_dom, 300)
	})

	interface Props {
		title?: string
		subtitle?: string
		data?: number[]
		thresholds?: number
		color?: string
		show_tooltip?: boolean
		format_x?: (d: number) => string
	}

	let {
		title = '',
		subtitle = '',
		data = [],
		thresholds = 10,
		color = 'var(--color-primary)',
		show_tooltip = true,
		format_x = (d: number) => d.toString(),
	}: Props = $props()

	// Create bins from the data
	const binned_data = $derived.by(() => {
		if (data.length === 0) return []
		const binner = bin().thresholds(thresholds)
		return binner(data)
	})
</script>

<Transition visible entry="scale-in" duration={0.6}>
	{#if title}
		<h2 class="mb-4 text-5xl font-bold">{title}</h2>
	{/if}
	{#if subtitle}
		<p class="mb-8 text-2xl text-gray-400">{subtitle}</p>
	{/if}
</Transition>

<div class="relative mx-auto h-[500px] w-[1400px] rounded-lg p-6">
	{#if mounted && binned_data.length > 0}
		<BarChart
			data={binned_data}
			x="x0"
			y="length"
			bandPadding={0.2}
			padding={{ left: 60, bottom: 48, top: 20, right: 20 }}
			props={{
				xAxis: {
					format: format_x,
					tickLabelProps: { style: 'font-size: 16px' },
				},
				yAxis: {
					format: 'integer',
					tickLabelProps: { style: 'font-size: 16px' },
				},
				bars: {
					fill: color,
					fillOpacity: 0.8,
					strokeWidth: 0,
				},
			}}
		>
			{#snippet tooltip()}
				<Tooltip.Root class="text-lg">
					{#snippet children(tooltipData)}
						{#if tooltipData?.data}
							{@const d = tooltipData.data}
							<Tooltip.Header class="text-center">
								{format_x(d.x0)} - {format_x(d.x1)}
							</Tooltip.Header>
							<Tooltip.List>
								<Tooltip.Item
									label="Count"
									value={d.length}
									format="integer"
								/>
							</Tooltip.List>
						{/if}
					{/snippet}
				</Tooltip.Root>
			{/snippet}
		</BarChart>
	{:else}
		<div
			class="flex h-full items-center justify-center text-gray-500"
		>
			No data provided
		</div>
	{/if}
</div>
