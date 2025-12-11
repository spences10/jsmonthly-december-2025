<script>
	import ClaudeTerminal from '../../slides-custom/claude-terminal.svelte'
	import { Notes } from '@animotion/core'
</script>

<ClaudeTerminal folder_location="/repos/xo-monorepo" user_input="doing perf! use performance.now around each of the hooks" show_thinking={true} thinking_file="hooks.server.ts" claude_output={["Analyzing route performance...","Writing to performance-logs.jsonl","Ready for bottleneck analysis"]} status_text="accept-edits" />

<Notes>
	<ul>
		<li>Scientific method: measure first</li>
		<li>Log rotation added to avoid clogging devices</li>
		<li>Made problems visible before solving</li>
	</ul>
</Notes>

