<script>
	import ClaudeTerminal from '../../slides-custom/claude-terminal.svelte'
	import { Notes } from '@animotion/core'
</script>

<ClaudeTerminal folder_location="/repos/xo-monorepo" user_input={`can you check the aws logs for me, there's a IAM issue with bedrock`} claude_output={[
  { text: "Skill Evaluation:", color: "#d6deeb" },
  { text: "- docker-ecs-troubleshooting: YES - checking ECS/AWS logs", color: "#637777" },
  { text: "- operations: YES - investigating error/logs", color: "#637777" },
  { text: "Skill(operations)", color: "#afafff" },
  { text: "Skill(docker-ecs-troubleshooting)", color: "#afafff" },
  { text: "Let me check the AWS logs for the claude-sdk-runtime service:", color: "#d6deeb" },
  { text: "Bash(aws logs tail /ecs/warby-claude-sdk-runtime --since 1h)", color: "#FF6B9D" },
  { text: "(No content)", color: "#637777", indent: true }
]} show_thinking={true} thinking_file="hooks.server.ts" status_text="accept-edits" />

<Notes>
	<ul>
		<li>This is Claude Code evaluating which skills to use</li>
		<li>The colored dots show different types of output</li>
		<li>Blue/purple for skill activations</li>
		<li>Pink for tool calls</li>
	</ul>
</Notes>

