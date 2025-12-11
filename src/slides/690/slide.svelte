<script>
	import DualBars from '../../slides-custom/dual-bars.svelte'
	import { Notes } from '@animotion/core'
</script>

<DualBars title={`But Here's What Was Really Happening`} subtitle="Commits vs Coding Hours" data={[{"date":"2025-11-12","commits":17,"hours":11.53},{"date":"2025-11-13","commits":16,"hours":12.53},{"date":"2025-11-14","commits":14,"hours":12.86},{"date":"2025-11-15","commits":7,"hours":6.09},{"date":"2025-11-16","commits":5,"hours":7.27},{"date":"2025-11-17","commits":30,"hours":10.53},{"date":"2025-11-18","commits":30,"hours":13.58},{"date":"2025-11-19","commits":14,"hours":11.41},{"date":"2025-11-20","commits":27,"hours":8.89},{"date":"2025-11-21","commits":10,"hours":9.33}]} y_primary="hours" y_secondary="commits" y_label="Hours" primary_label="Coding Hours" secondary_label="Commits" primary_opacity={0.3} secondary_opacity={0.6} />

<Notes>
	<ul>
		<li>Coding ALL DAY, not just evenings</li>
		<li>Peak: Nov 18 = 13.6 hours</li>
		<li>Average: 10.4h per day</li>
		<li>The commits show WHEN I shipped, not when I worked</li>
		<li>Full 10-day picture of work + personal combined</li>
	</ul>
</Notes>

