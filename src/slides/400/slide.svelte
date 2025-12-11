<script>
	import TitleWithList from '../../slides-custom/title-with-list.svelte'
	import { Notes } from '@animotion/core'
</script>

<TitleWithList title="The Workflow: Route-by-Route Validation" items={[{"text":"Different from #5361's batch processing"},{"text":"Visit each route in browser"},{"text":"Check against official shadcn-svelte docs"},{"text":"Verify tokens, contrast, dark mode"},{"text":"15 routes validated"}]} />

<Notes>
	<ul>
		<li>After the disaster, trust but verify EVERYTHING</li>
		<li>15 routes: /quality, /evals, /reporting, /agent-view,</li>
		<li>/smart-agents, /login, etc.</li>
		<li>Constant questions: "is that vanilla schadcn-svelte?"</li>
		<li>"doesn't feel very schadcn-svelte" > research and fix</li>
		<li>Visual validation, not just compile errors</li>
	</ul>
</Notes>

