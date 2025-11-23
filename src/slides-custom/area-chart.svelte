<script lang="ts">
	import { Transition } from '@animotion/core'
	import { Area, Axis, Chart, Highlight, Svg, Tooltip } from 'layerchart'
	import { scaleTime, scaleLinear } from 'd3-scale'

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
		lineColor?: string
		fillColor?: string
		// Multiple series mode
		series?: Series[]
		fillOpacity?: number
		// Common
		xLabel?: string
		yLabel?: string
		yDomain?: [number | null, number | null]
		showGrid?: boolean
		showTooltip?: boolean
		showHighlight?: boolean
		subtitle?: string
		stats?: { label: string; value: string }[]
	}

	let {
		title = '',
		data = [],
		x = 'date',
		// Single series
		y = 'value',
		lineColor = 'stroke-primary',
		fillColor = 'fill-primary/30',
		// Multiple series
		series = [],
		fillOpacity = 0.3,
		// Common
		xLabel = '',
		yLabel = '',
		yDomain = [0, null],
		showGrid = true,
		showTooltip = true,
		showHighlight = true,
		subtitle = '',
		stats = [],
	}: Props = $props()

	// Convert string dates to Date objects if needed
	const processedData = $derived(
		data.map((d) => ({
			...d,
			[x]: typeof d[x] === 'string' ? new Date(d[x] as string) : d[x],
		}))
	)

	// Determine if we're using time scale
	const useTimeScale = $derived(
		processedData.length > 0 && processedData[0][x] instanceof Date
	)

	// Check if using multiple series mode
	const isMultiSeries = $derived(series.length > 0)

	// Get all y keys for the Chart component
	const yKeys = $derived(isMultiSeries ? series.map((s) => s.key) : y)
</script>


<Transition visible entry="scale-in" duration={0.6}>
	{#if title}
		<h2 class="mb-4 text-5xl font-bold">{title}</h2>
	{/if}
	{#if subtitle}
		<p class="mb-8 text-2xl text-gray-400">{subtitle}</p>
	{/if}
</Transition>

<Transition visible entry="scale-in" duration={0.8} delay={0.2}>
	<div class="mx-auto h-[450px] w-[1000px] rounded-lg bg-gray-900/50 p-6">
		{#if processedData.length > 0}
			<Chart
				data={processedData}
				{x}
				xScale={useTimeScale ? scaleTime() : scaleLinear()}
				y={yKeys}
				{yDomain}
				yNice
				padding={{ left: 60, bottom: 40, top: 20, right: 20 }}
				tooltip={{ mode: 'bisect-x' }}
			>
				<Svg>
					<Axis placement="left" grid={showGrid} rule />
					<Axis placement="bottom" rule />

					{#if isMultiSeries}
						{#each series as s}
							<Area
								y1={(d) => d[s.key]}
								fill={s.color}
								{fillOpacity}
								line={{ stroke: s.color, class: 'stroke-2' }}
							/>
						{/each}

						{#if showHighlight}
							{#each series as s}
								<Highlight y={(d) => d[s.key]} points={{ fill: s.color }} />
							{/each}
							<Highlight lines />
						{/if}
					{:else}
						<Area line={{ class: `stroke-2 ${lineColor}` }} class={fillColor} />
						{#if showHighlight}
							<Highlight points />
							<Highlight lines />
						{/if}
					{/if}
				</Svg>

				{#if showTooltip}
					<Tooltip.Root let:data>
						<Tooltip.Header>
							{#if data[x] instanceof Date}
								{data[x].toLocaleDateString()}
							{:else}
								{data[x]}
							{/if}
						</Tooltip.Header>
						{#if isMultiSeries}
							<Tooltip.List>
								{#each series as s}
									<Tooltip.Item label={s.label || s.key} value={data[s.key]} />
								{/each}
							</Tooltip.List>
						{:else}
							<Tooltip.Item label={yLabel || y} value={data[y]} />
						{/if}
					</Tooltip.Root>
				{/if}
			</Chart>
		{:else}
			<div class="flex h-full items-center justify-center text-gray-500">
				No data provided
			</div>
		{/if}
	</div>
</Transition>

{#if isMultiSeries}
	<Transition visible entry="scale-in" duration={0.6} delay={0.4}>
		<div class="mt-6 flex justify-center gap-8 text-2xl">
			{#each series as s}
				<div class="flex items-center gap-2">
					<div class="h-4 w-4 rounded" style="background: {s.color}"></div>
					<span class="text-gray-400">{s.label || s.key}</span>
				</div>
			{/each}
		</div>
	</Transition>
{/if}

{#if stats.length > 0}
	<Transition visible entry="scale-in" duration={0.6} delay={isMultiSeries ? 0.6 : 0.4}>
		<div class="mt-4 flex justify-center gap-8 text-xl">
			{#each stats as stat}
				<span class="text-gray-400">
					{stat.label}: <span class="font-bold text-white">{stat.value}</span>
				</span>
			{/each}
		</div>
	</Transition>
{/if}
