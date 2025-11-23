<script>
	import Histogram from '../../slides-custom/histogram.svelte'
	import { Notes } from '@animotion/core'
</script>

<Histogram title="Peak Productivity Hours" subtitle="Distribution of 128 commits by hour" data={[21,21,21,21,21,22,22,22,10,12,12,12,13,13,13,14,14,21,21,21,22,22,22,8,8,9,10,10,11,11,17,17,18,18,18,18,19,19,19,19,20,20,20,20,20,20,21,22,22,22,22,23,7,8,8,9,9,11,11,11,12,12,12,15,15,16,16,17,18,18,18,18,18,19,19,19,19,20,20,20,20,7,8,9,10,14,14,14,14,16,16,17,19,20,21,21,19,19,19,19,19,19,20,20,20,20,21,21,22,22,23,23,6,7,7,7,12,16,16,17,17,18]} thresholds={18} color="var(--color-warning)" />

<Notes>
	<ul>
		<li>Clear peaks in evening hours (19:00-22:00)</li>
		<li>Some early morning sessions (6-8am)</li>
		<li>Lunch breaks visible (fewer commits at 13:00)</li>
	</ul>
</Notes>

