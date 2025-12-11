<script>
	import ClaudeTerminal from '../../slides-custom/claude-terminal.svelte'
	import { Notes } from '@animotion/core'
</script>

<ClaudeTerminal folder_location="/repos/xo-monorepo" display_header={true} claude_output={["🔍 Found the Bottlenecks!","","parallelQueries:  221ms ✅","fetchAgents:      803ms ❌ (TOO SLOW)","Total server:    1031ms","Total request:   2838ms","","Solution: MongoDB database indexes needed"]} status_text="accept-edits" output_first={true} />

<Notes>
	<ul>
		<li>237 agents fetched, only 10 shown</li>
		<li>No database indexes = 803ms query</li>
		<li>With indexes: under 100ms expected</li>
	</ul>
</Notes>

