<script lang="ts">
	import { Code, Action, Transition } from '@animotion/core'

	let code: ReturnType<typeof Code>

	const before = `
function getUserData(id) {
	const user = database.get(id)
	const posts = database.query('SELECT * FROM posts WHERE user_id = ' + id)
	return { user, posts }
}
	`.trim()

	const after = `
async function getUserData(id: string) {
	const user = await database.get(id)
	const posts = await database.query('SELECT * FROM posts WHERE user_id = ?', [id])
	return { user, posts }
}
	`.trim()
</script>

<!-- Code Diff Slide -->
<!-- Use for: Before/after code comparisons, refactoring examples -->
<!-- Uses Code.update() with Shiki Magic Move for animated transitions -->
<!-- Arrow keys step through: before → after states -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-12 text-6xl font-bold">Before → After</h2>
</Transition>

<Transition visible class="mt-16" duration={0.8} delay={0.2}>
	<Code
		bind:this={code}
		lang="ts"
		theme="night-owl"
		code={before}
		options={{ duration: 600, stagger: 0.3, containerStyle: false }}
	/>
</Transition>

<Action
	actions={[
		async () => await code.update`${after}`, // Animate to "after" code
		async () => await code.update`${before}`, // Animate back to "before" code
	]}
/>
