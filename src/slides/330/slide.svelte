<script>
	import DualBars from '../../slides-custom/dual-bars.svelte'
	import { Notes } from '@animotion/core'
</script>

<DualBars title="PR #5361: Work vs Commits" subtitle="Coding hours vs shipped commits" data={[{"date":"2025-11-12","commits":8,"hours":11.53},{"date":"2025-11-13","commits":11,"hours":12.53}]} y_primary="hours" y_secondary="commits" y_label="Hours" primary_label="Coding Hours" secondary_label="Commits" primary_opacity={0.3} secondary_opacity={0.6} />

<Notes>
	<ul>
		<li>Nov 12: 8 commits, 11.5h</li>
		<li>Nov 13: 11 commits, 12.5h</li>
		<li>Total: 24h across 2 days</li>
	</ul>
</Notes>

