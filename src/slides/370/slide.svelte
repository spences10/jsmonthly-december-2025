<script>
	import DualBars from '../../slides-custom/dual-bars.svelte'
	import { Notes } from '@animotion/core'
</script>

<DualBars title="PR #5361: Work vs Commits" subtitle="Coding hours vs shipped commits" data={[{"date":"2025-11-12","commits":8,"hours":11.53},{"date":"2025-11-13","commits":7,"hours":12.53},{"date":"2025-11-14","commits":6,"hours":12.86},{"date":"2025-11-15","commits":3,"hours":6.09},{"date":"2025-11-16","commits":0,"hours":7.27},{"date":"2025-11-17","commits":6,"hours":10.53}]} y_primary="hours" y_secondary="commits" y_label="Hours" primary_label="Coding Hours" secondary_label="Commits" primary_opacity={0.3} secondary_opacity={0.6} />

<Notes>
	<ul>
		<li>Nov 12-13: Marathon coding, 8+7 commits</li>
		<li>Nov 14: Still high hours (12.86h), fewer commits as work got</li>
		<li>harder</li>
		<li>Nov 16: 7.27h coding but 0 commits (working on personal projects)</li>
		<li>Total: 60.81 hours across this PR</li>
	</ul>
</Notes>

