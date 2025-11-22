<script lang="ts">
	import { Code, Action, Transition } from '@animotion/core'

	let code: ReturnType<typeof Code>
</script>

<!-- Code Example with Actions - Step through line highlights -->
<!-- Use for: Code walkthroughs, progressive disclosure -->
<!-- Use arrow keys to step through actions -->
<!-- Demonstrates: selectLines for line ranges, selectToken for specific tokens -->

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-12 text-6xl font-bold">Code Walkthrough</h2>
</Transition>

<Transition visible class="mt-16" duration={0.8} delay={0.2}>
	<Code
		bind:this={code}
		lang="ts"
		theme="night-owl"
		code={`
			async function refactorFiles(files: string[]) {
				for (const file of files) {
					await processFile(file)
					await runTests()
				}
			}
		`}
		options={{ duration: 600, stagger: 0.3, containerStyle: false }}
	/>
</Transition>

<Action
	actions={[
		() => code.selectLines`2`, // Highlight the loop
		() => code.selectLines`3`, // Highlight processFile call
		() => code.selectToken`processFile`, // Highlight specific function name
		() => code.selectLines`4`, // Highlight runTests call
		() => code.selectLines`*`, // Show all lines
	]}
/>
