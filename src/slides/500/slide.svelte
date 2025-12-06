<script>
	import BulletPoints from '../../slides-custom/bullet-points.svelte'
	import { Notes } from '@animotion/core'
</script>

<BulletPoints title="The Bottleneck Discovery" points={["Systematic route investigation","fetchAgents: 803ms ❌ (TOO SLOW)","Total request: 2,838ms including render","Solution: MongoDB database indexes"]} />

<Notes>
	<ul>
		<li>parallelQueries: 221ms ✅ (acceptable)</li>
		<li>fetchAgents: 803ms ❌ (THE PROBLEM)</li>
		<li>Created database-indexes.md documentation</li>
		<li>Multiple indexes needed for optimization</li>
	</ul>
</Notes>

