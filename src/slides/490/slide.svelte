<script>
	import TitleWithList from '../../slides-custom/title-with-list.svelte'
	import { Notes } from '@animotion/core'
</script>

<TitleWithList title="The Workflow: Performance Investigation" items={[{"text":"Different from batch processing and validation"},{"text":"Performance.now() timing around all hooks"},{"text":"Wrote performance-logs.jsonl for analysis"},{"text":"Read logs, identify bottlenecks, implement solutions"}]} />

<Notes>
	<ul>
		<li>Not fixing errors or validating UI</li>
		<li>Scientific method: measure, identify, optimize</li>
		<li>"let's add performance.now logging throughout"</li>
		<li>Log rotation to avoid clogging devices</li>
		<li>Made problems visible before solving them</li>
	</ul>
</Notes>

