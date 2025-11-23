<script lang="ts">
	import { Transition } from '@animotion/core'
	import { scaleLinear, scaleTime } from 'd3-scale'
	import { format as format_date } from 'date-fns'
	import {
		Area,
		Axis,
		Chart,
		Highlight,
		Svg,
		Tooltip,
	} from 'layerchart'
	import { onMount, tick } from 'svelte'

	let mounted = $state(false)

	onMount(async () => {
		// Wait for DOM to fully settle before rendering chart
		await tick()
		// Additional delay to ensure reveal.js has finished setup
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
		date: Date | string
		[key: string]: unknown
	}

	interface Series {
		key: string
		color: string
		label?: string
	}

	interface Props {
		title?: string
		data?: DataPoint[]
		x?: string
		// Single series mode
		y?: string
		line_color?: string
		fill_color?: string
		highlight_color?: string
		// Multiple series mode
		series?: Series[]
		fill_opacity?: number
		// Common
		x_label?: string
		y_label?: string
		y_domain?: [number | null, number | null]
		show_grid?: boolean
		show_tooltip?: boolean
		show_highlight?: boolean
		show_labels?: boolean
		subtitle?: string
		stats?: { label: string; value: string }[]
		date_format?: string
		axis_font_size?: string
	}

	let {
		title = '',
		data = [],
		x = 'date',
		// Single series
		y = 'value',
		line_color = 'stroke-blue-500',
		fill_color = 'fill-blue-500/30',
		highlight_color = '#3b82f6',
		// Multiple series
		series = [],
		fill_opacity = 0.3,
		// Common
		x_label = '',
		y_label = '',
		y_domain = [0, null],
		show_grid = true,
		show_tooltip = false,
		show_highlight = false,
		show_labels = false,
		subtitle = '',
		stats = [],
		date_format = 'MMM d',
		axis_font_size = '18px',
	}: Props = $props()

	// Format date for x-axis
	const format_x_axis = (d: Date | unknown) => {
		if (d instanceof Date) {
			return format_date(d, date_format)
		}
		return String(d)
	}

	// Convert string dates to Date objects if needed
	const processed_data = $derived(
		data.map((d) => ({
			...d,
			[x]: typeof d[x] === 'string' ? new Date(d[x] as string) : d[x],
		})),
	)

	// Determine if we're using time scale
	const use_time_scale = $derived(
		processed_data.length > 0 && processed_data[0][x] instanceof Date,
	)

	// Check if using multiple series mode
	const is_multi_series = $derived(series.length > 0)

	// Get all y keys for the Chart component
	const y_keys = $derived(
		is_multi_series ? series.map((s) => s.key) : y,
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

<div class="relative mx-auto h-[650px] w-[1500px] rounded-lg p-6">
	{#if mounted && processed_data.length > 0}
		<Chart
			data={processed_data}
			{x}
			xScale={use_time_scale ? scaleTime() : scaleLinear()}
			y={y_keys}
			yDomain={y_domain}
			yNice
			padding={{ left: 60, bottom: 40, top: 20, right: 20 }}
			tooltip={{ mode: 'bisect-x' }}
		>
			<Svg>
				<Axis
					placement="left"
					grid={show_grid}
					rule
					tickLabelProps={{ style: `font-size: ${axis_font_size}` }}
				/>
				<Axis
					placement="bottom"
					rule
					format={format_x_axis}
					ticks={processed_data.length}
					tickLabelProps={{ style: `font-size: ${axis_font_size}` }}
				/>

				{#if is_multi_series}
					{#each series as s}
						<Area
							y1={(d) => d[s.key]}
							fill={s.color}
							fillOpacity={fill_opacity}
							line={{ stroke: s.color, class: 'stroke-2' }}
						/>
					{/each}
				{:else}
					<Area
						line={{ class: `stroke-2 ${line_color}` }}
						class={fill_color}
					/>
				{/if}

				{#if show_highlight}
					<Highlight
						points={{
							fill: 'white',
							stroke: highlight_color,
							strokeWidth: 2,
							r: 5,
						}}
						lines
					/>
				{/if}
			</Svg>

			{#if show_tooltip}
				<Tooltip.Root class="p-3 text-lg">
					{#snippet children(tooltipData)}
						{#if tooltipData?.data}
							{@const d = tooltipData.data}
							<Tooltip.Header>
								{format_date(d[x], date_format)}
							</Tooltip.Header>
							<Tooltip.List>
								{#if is_multi_series}
									{#each series as s}
										<Tooltip.Item
											label={s.label || s.key}
											value={d[s.key]}
										/>
									{/each}
								{:else}
									<Tooltip.Item label={y} value={d[y]} />
								{/if}
							</Tooltip.List>
						{/if}
					{/snippet}
				</Tooltip.Root>
			{/if}
		</Chart>
	{:else}
		<div
			class="flex h-full items-center justify-center text-gray-500"
		>
			No data provided
		</div>
	{/if}
</div>

{#if is_multi_series}
	<Transition visible entry="scale-in" duration={0.6} delay={0.4}>
		<div class="mt-6 flex justify-center gap-8 text-2xl">
			{#each series as s}
				<div class="flex items-center gap-2">
					<div
						class="h-4 w-4 rounded"
						style="background: {s.color}"
					></div>
					<span class="text-gray-400">{s.label || s.key}</span>
				</div>
			{/each}
		</div>
	</Transition>
{/if}

{#if stats.length > 0}
	<Transition
		visible
		entry="scale-in"
		duration={0.6}
		delay={is_multi_series ? 0.6 : 0.4}
	>
		<div class="mt-4 flex justify-center gap-8 text-xl">
			{#each stats as stat}
				<span class="text-gray-400">
					{stat.label}:
					<span class="font-bold text-gray-800">{stat.value}</span>
				</span>
			{/each}
		</div>
	</Transition>
{/if}
