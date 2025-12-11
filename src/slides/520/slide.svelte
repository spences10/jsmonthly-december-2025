<script>
	import DualBars from '../../slides-custom/dual-bars.svelte'
	import { Notes } from '@animotion/core'
</script>

<DualBars title="PR #5381: Work vs Commits" subtitle="Performance investigation and optimization" data={[{"date":"2025-11-18","commits":8,"hours":13.58},{"date":"2025-11-19","commits":14,"hours":11.41},{"date":"2025-11-20","commits":27,"hours":8.89},{"date":"2025-11-21","commits":9,"hours":9.33}]} y_primary="hours" y_secondary="commits" y_label="Hours" primary_label="Coding Hours" secondary_label="Commits" primary_opacity={0.3} secondary_opacity={0.6} />

<Notes>
	<ul>
		<li>Nov 18: overlapped with end of #5375 (13.58h total)</li>
		<li>Nov 19: Investigation day (11.41h, steady commits)</li>
		<li>Nov 20: Implementation day (27 commits, shipping solutions)</li>
		<li>Nov 21: Wrapping up (9.33h)</li>
		<li>Total: 43.21 hours across this PR</li>
	</ul>
</Notes>

