<script>
	import ClaudeTerminal from '../../slides-custom/claude-terminal.svelte'
	import { Notes } from '@animotion/core'
</script>

<ClaudeTerminal folder_location="/repos/xo-monorepo" user_input={["I'm super pissed off with this slow loading"]} show_thinking={true} thinking_file="hooks.server.ts" user_reply="" status_text="accept-edits" output_first={true} />

<Notes>
	<ul>
		<li>"I'm super pissed off with this slow loading"</li>
		<li>Repeated across 5 sessions</li>
		<li>SvelteKit is super fast</li>
		<li>But 3 years of accumulated rot</li>
		<li>Time to strip everything</li>
	</ul>
</Notes>

