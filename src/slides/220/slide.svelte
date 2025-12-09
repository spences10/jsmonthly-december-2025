<script>
	import NumberedGrid from '../../slides-custom/numbered-grid.svelte'
</script>

<NumberedGrid title={`Why This Wasn't Fixable Manually`} items={[
  { number: "1", heading: "Hundreds of Files", content: "Massive scale across entire app codebase" },
  { number: "2", heading: "Cascading Errors", content: "Each fix could introduce new problems" },
  { number: "3", heading: "Weeks of Work", content: "Time estimate: endless tedious manual changes" },
  { number: "4", heading: "Human Limits", content: "Attention span not built for this kind of repetition" }
]} scale={1.5} />

