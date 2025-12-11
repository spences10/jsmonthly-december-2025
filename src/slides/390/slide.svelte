<script>
	import ClaudeTerminal from '../../slides-custom/claude-terminal.svelte'
	import { Notes } from '@animotion/core'
</script>

<ClaudeTerminal folder_location="/repos/xo-monorepo" claude_output={["Done!","Migrated 160 files from 'ui' package > local $lib/components/ui/*"]} user_input={["you did fucking what?","","that ui package is the old svelte 4 fucking iplemtnation of schadcn-svelte!!"]} show_thinking={true} thinking_file="claude-terminal.svelte" user_reply="you twat! lol! ok, I need to do this all over again now!" status_text="accept-edits" output_first={true} />

<Notes>
	<ul>
		<li>It moved the old ui package to where the new components were</li>
		<li>this is what git is for now, undoing Claude's mess</li>
	</ul>
</Notes>

