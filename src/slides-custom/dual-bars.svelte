<script lang="ts">
	import { Transition } from '@animotion/core'
	import { scaleBand } from 'd3-scale'
	import { format as format_date } from 'date-fns'
	import {
		Axis,
		Bars,
		Chart,
		Highlight,
		Svg,
		Tooltip,
	} from 'layerchart'
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
		[key: string]: any
	}

	interface Props {
		title?: string
		subtitle?: string
		data?: DataPoint[]
		y_primary?: string
		y_secondary?: string
		y_label?: string
		primary_label?: string
		secondary_label?: string
		primary_opacity?: number
		secondary_opacity?: number
	}

	let {
		title = '',
		subtitle = '',
		data = [],
		y_primary = 'hours',
		y_secondary = 'commits',
		y_label = 'Hours',
		primary_label = 'Coding Hours',
		secondary_label = 'Commits',
		primary_opacity = 0.3,
		secondary_opacity = 0.6,
	}: Props = $props()

	// Parse dates - keep raw values, scale visually with different bar heights
	const parsed_data = $derived(
		data.map((d) => ({
			...d,
			date: new Date(d.date),
		})),
	)

	// Calculate separate domains for visual scaling
	const max_secondary = $derived(
		Math.max(...data.map((x) => x[y_secondary])),
	)
	const max_primary = $derived(
		Math.max(...data.map((x) => x[y_primary])),
	)
</script>

{#if mounted}
	<Transition visible entry="fade-in" duration={0.6}>
		{#if title}
			<h2 class="mb-4 text-5xl font-bold">{title}</h2>
		{/if}
		{#if subtitle}
			<p class="mb-8 text-3xl text-gray-400">{subtitle}</p>
		{/if}

		<div class="mx-auto h-[500px] w-full max-w-5xl">
			<Chart
				data={parsed_data}
				x="date"
				xScale={scaleBand().padding(0.3)}
				y={y_primary}
				yDomain={[0, max_primary * 1.1]}
				padding={{ left: 60, right: 60, bottom: 60, top: 20 }}
			>
				<Svg>
					<Axis placement="left" grid rule label={y_label} />
					<Axis
						placement="bottom"
						rule
						format={(d) => format_date(d, 'MMM dd')}
					/>
					<!-- Primary (background/baseline) - using primary scale -->
					<Bars
						y={y_primary}
						radius={4}
						strokeWidth={1}
						fill="var(--color-primary)"
						fillOpacity={primary_opacity}
						stroke="var(--color-primary)"
						strokeOpacity={0.5}
					/>
					<!-- Secondary (foreground) - scaled proportionally to primary for visual comparison -->
					<Bars
						y={(d) => (d[y_secondary] / max_secondary) * max_primary}
						radius={4}
						strokeWidth={2}
						inset={4}
						fill="var(--color-warning)"
						fillOpacity={secondary_opacity}
						stroke="var(--color-warning)"
					/>
					<Highlight area />
				</Svg>
				<Tooltip.Root>
					{#snippet children({ data })}
						<Tooltip.Header
							value={format_date(data.date, 'MMMM dd')}
						/>
						<Tooltip.List>
							<Tooltip.Item
								label={primary_label}
								value={typeof data[y_primary] === 'number' &&
								y_primary.includes('hour')
									? `${data[y_primary].toFixed(1)}h`
									: data[y_primary]}
							/>
							<Tooltip.Item
								label={secondary_label}
								value={data[y_secondary]}
							/>
						</Tooltip.List>
					{/snippet}
				</Tooltip.Root>
			</Chart>
		</div>

		<div class="mt-8 flex justify-center gap-8 text-2xl">
			<div class="flex items-center gap-2">
				<div
					class="h-6 w-6 rounded"
					style="background-color: var(--color-primary); opacity: {primary_opacity}"
				></div>
				<span class="text-gray-400">{primary_label}</span>
			</div>
			<div class="flex items-center gap-2">
				<div
					class="h-6 w-6 rounded"
					style="background-color: var(--color-warning); opacity: {secondary_opacity}"
				></div>
				<span class="text-gray-400">
					{secondary_label}
				</span>
			</div>
		</div>
	</Transition>
{/if}
