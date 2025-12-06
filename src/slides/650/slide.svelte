<script>
	import ThreeColumnCards from '../../slides-custom/three-column-cards.svelte'
	import { Notes } from '@animotion/core'
</script>

<ThreeColumnCards title="Building Better Workflows" items={[
  {
    number: "1",
    heading: "Evaluation",
    points: ["Skill evaluation framework", "Cost calculator", "Metrics tracker"],
    conclusion: "Nov 13: Measuring quality"
  },
  {
    number: "2",
    heading: "Automation",
    points: ["Hook system for reliable activation", "Testing consistency"],
    conclusion: "Nov 15: Making it reliable"
  },
  {
    number: "3",
    heading: "Results",
    points: ["Patterns that work vs don't", "Repeatable workflows"],
    conclusion: "Finding what makes Claude work"
  }
]} />

<Notes>
	<ul>
		<li>svelte-claude-skills repo</li>
		<li>Measuring activation rates, quality of outputs</li>
		<li>Finding patterns that work vs don't</li>
	</ul>
</Notes>

