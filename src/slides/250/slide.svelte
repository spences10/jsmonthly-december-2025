<script>
	import BulletPoints from '../../slides-custom/bullet-points.svelte'
	import { Notes } from '@animotion/core'
</script>

<BulletPoints title="The Workflow: Batch Processing" points={["Created svelte-check.md tracking file","Take top 50 errors","Paste to Claude > apply fixes","Delete those lines, repeat","33 iterations in one session"]} />

<Notes>
	<ul>
		<li>Not random fixes - systematic elimination</li>
		<li>Tracking file kept state between sessions</li>
		<li>'do NOT run svelte-check!' - manual tracking only</li>
		<li>Pattern emerged: batch size matters</li>
	</ul>
</Notes>

