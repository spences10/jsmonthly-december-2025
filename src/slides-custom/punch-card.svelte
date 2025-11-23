<script lang="ts">
	import { Transition } from '@animotion/core'
	import { range } from 'd3-array'
	import { scaleBand } from 'd3-scale'
	import { format as format_date } from 'date-fns'
	import { Highlight, ScatterChart, Tooltip } from 'layerchart'
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

	interface DataPoint {
		date: string
		hour: number
		count: number
	}

	interface Props {
		title?: string
		subtitle?: string
		data?: DataPoint[]
		hour_range?: [number, number]
		r_range?: [number, number]
		color?: string
	}

	let {
		title = '',
		subtitle = '',
		data = [],
		hour_range = [6, 24],
		r_range = [0, 20],
		color = 'var(--color-primary)',
	}: Props = $props()

	// Get unique dates sorted
	const dates = $derived([...new Set(data.map((d) => d.date))].sort())

	// Format date for y-axis
	const format_y_axis = (d: number) => {
		if (dates[d]) {
			return format_date(new Date(dates[d]), 'MMM d')
		}
		return ''
	}

	// Format hour for x-axis
	const format_x_axis = (d: number) => {
		const hour = d + hour_range[0]
		return hour.toString().padStart(2, '0') + ':00'
	}

	// Process data to use indices for scaleBand
	const processed_data = $derived(
		data.map((d) => ({
			...d,
			date_index: dates.indexOf(d.date),
			hour_index: d.hour - hour_range[0],
		})),
	)
</script>

<Transition visible entry="scale-in" duration={0.6}>
	{#if title}
		<h2 class="mb-4 text-5xl font-bold">{title}</h2>
	{/if}
	{#if subtitle}
		<p class="mb-8 text-2xl text-gray-400">{subtitle}</p>
	{/if}
</Transition>

<div class="relative mx-auto h-[600px] w-[1400px] rounded-lg p-6">
	{#if mounted && processed_data.length > 0}
		<ScatterChart
			data={processed_data}
			x="hour_index"
			xScale={scaleBand()}
			xDomain={range(hour_range[1] - hour_range[0])}
			xNice={false}
			y="date_index"
			yScale={scaleBand()}
			yDomain={range(dates.length)}
			yNice={false}
			r="count"
			rRange={r_range}
			padding={{ left: 80, bottom: 48, top: 20, right: 20 }}
			props={{
				xAxis: {
					format: format_x_axis,
					tickLabelProps: { style: 'font-size: 14px' },
				},
				yAxis: {
					format: format_y_axis,
					tickLabelProps: { style: 'font-size: 16px' },
				},
				rule: { x: true, y: false },
				grid: { x: false, y: true },
				points: { fill: color, fillOpacity: 0.7 },
				tooltip: { context: { mode: 'band' } },
			}}
		>
			{#snippet highlight()}
				<Highlight area axis="x" />
				<Highlight area axis="y" />
			{/snippet}

			{#snippet tooltip()}
				<Tooltip.Root class="text-lg">
					{#snippet children({ data: d })}
						<Tooltip.Header>
							{format_date(
								new Date(dates[d.date_index]),
								'EEE, MMM d',
							)} at {format_x_axis(d.hour_index)}
						</Tooltip.Header>
						<Tooltip.List>
							<Tooltip.Item
								label="Commits"
								value={d.count}
								valueAlign="right"
							/>
						</Tooltip.List>
					{/snippet}
				</Tooltip.Root>
			{/snippet}
		</ScatterChart>
	{:else}
		<div
			class="flex h-full items-center justify-center text-gray-500"
		>
			No data provided
		</div>
	{/if}
</div>
