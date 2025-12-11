<script>
	import AreaChart from '../../slides-custom/area-chart.svelte'
	import { Notes } from '@animotion/core'
</script>

<AreaChart title="The 10-Day Grind" subtitle="Work refactor vs Personal projects" data={[{"date":"2025-11-12","work":9.3,"personal":2.23},{"date":"2025-11-13","work":7.46,"personal":5.08},{"date":"2025-11-14","work":10.22,"personal":2.63},{"date":"2025-11-15","work":0.09,"personal":5.96},{"date":"2025-11-16","work":0,"personal":7.27},{"date":"2025-11-17","work":9.24,"personal":1.29},{"date":"2025-11-18","work":13.45,"personal":0.13},{"date":"2025-11-19","work":10.88,"personal":0.52},{"date":"2025-11-20","work":8.57,"personal":0.32},{"date":"2025-11-21","work":5.39,"personal":3.95}]} series={[{"key":"work","color":"var(--color-primary)","label":"xo-monorepo"},{"key":"personal","color":"var(--color-secondary)","label":"Personal projects"}]} fill_opacity={0.4} show_tooltip={true} show_highlight={true} stats={[{"label":"Total","value":"104h"},{"label":"Average","value":"10.4h/day"},{"label":"Peak","value":"13.6h"}]} />

<Notes>
	<ul>
		<li>Same data as bar chart, different visualization</li>
		<li>Shows the parallel nature of work and personal projects</li>
	</ul>
</Notes>

