<script>
	import PunchCard from '../../slides-custom/punch-card.svelte'
	import { Notes } from '@animotion/core'
</script>

<PunchCard title="PR #5361: When It Happened" subtitle="Nov 12-13: 19 commits over 2 days" data={[{"date":"2025-11-12","hour":21,"count":5},{"date":"2025-11-12","hour":22,"count":3},{"date":"2025-11-13","hour":7,"count":2},{"date":"2025-11-13","hour":10,"count":1},{"date":"2025-11-13","hour":12,"count":3},{"date":"2025-11-13","hour":13,"count":3},{"date":"2025-11-13","hour":14,"count":2}]} hour_range={[6,24]} />

<Notes>
	<ul>
		<li>Nov 12 evening through Nov 13 afternoon</li>
		<li>Late night commits = fixing batches of 50 errors</li>
	</ul>
</Notes>

