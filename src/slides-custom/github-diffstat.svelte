<script lang="ts">
	import { Transition } from '@animotion/core'
	import { onMount } from 'svelte'

	interface Props {
		title?: string
		added?: number
		deleted?: number
		files?: number
		commits?: number
		delay?: number
	}

	let {
		title = 'PR Stats',
		added = 12225,
		deleted = 9020,
		files = 377,
		commits = 30,
		delay = 600,
	}: Props = $props()

	let step = $state(0)

	onMount(() => {
		// Auto-play through steps
		const steps = [1, 2, 3, 4, 5]
		steps.forEach((s, i) => {
			setTimeout(
				() => {
					step = s
				},
				delay * (i + 1),
			)
		})
	})

	// Calculate the 5-block ratio (like GitHub does)
	const total = added + deleted
	const added_ratio = added / total
	const deleted_ratio = deleted / total

	// 5 blocks total
	const added_blocks = Math.round(added_ratio * 5)
	const deleted_blocks = Math.round(deleted_ratio * 5)
	// Neutral fills any rounding gaps
	const neutral_blocks = 5 - added_blocks - deleted_blocks

	function format_number(n: number): string {
		return n.toLocaleString()
	}
</script>

<Transition visible entry="scale-in" duration={0.6}>
	<h2 class="mb-12 text-8xl font-bold">{title}</h2>
</Transition>

<Transition visible duration={0.8} delay={0.2}>
	<div
		class="mx-auto flex max-w-6xl flex-col items-center gap-12 rounded-xl bg-gray-800 p-16"
	>
		<!-- Files and commits -->
		<div
			class="flex gap-16 text-4xl text-gray-400 transition-all duration-500"
			class:opacity-100={step >= 1}
			class:opacity-0={step < 1}
		>
			{#if files}
				<div class="flex items-center gap-4">
					<svg
						class="h-10 w-10 text-gray-400"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
						/>
					</svg>
					<span><strong>{files}</strong> files changed</span>
				</div>
			{/if}
			{#if commits}
				<div class="flex items-center gap-4">
					<svg
						class="h-10 w-10 text-gray-400"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
						/>
					</svg>
					<span><strong>{commits}</strong> commits</span>
				</div>
			{/if}
		</div>

		<!-- Main diffstat display (GitHub style - inline) -->
		<div
			class="flex items-center gap-6 font-mono text-7xl transition-all duration-500"
			class:opacity-100={step >= 2}
			class:opacity-0={step < 2}
		>
			<span
				class="text-green-400 transition-all duration-700"
				class:scale-110={step === 2}
			>
				+{format_number(added)}
			</span>
			<span
				class="text-red-400 transition-all duration-700"
				class:scale-110={step === 3}
			>
				−{format_number(deleted)}
			</span>

			<!-- Diff blocks (GitHub style squares) -->
			<div
				class="flex gap-1 transition-all duration-500"
				class:opacity-100={step >= 4}
				class:opacity-0={step < 4}
			>
				{#each Array(added_blocks) as _, i}
					<div
						class="h-10 w-10 rounded-sm bg-green-500 transition-all duration-300"
						style="transition-delay: {i * 80}ms"
						class:scale-100={step >= 4}
						class:scale-0={step < 4}
					></div>
				{/each}
				{#each Array(deleted_blocks) as _, i}
					<div
						class="h-10 w-10 rounded-sm bg-red-500 transition-all duration-300"
						style="transition-delay: {(added_blocks + i) * 80}ms"
						class:scale-100={step >= 4}
						class:scale-0={step < 4}
					></div>
				{/each}
				{#each Array(neutral_blocks) as _, i}
					<div
						class="h-10 w-10 rounded-sm bg-gray-500 transition-all duration-300"
						style="transition-delay: {(added_blocks +
							deleted_blocks +
							i) *
							80}ms"
						class:scale-100={step >= 4}
						class:scale-0={step < 4}
					></div>
				{/each}
			</div>
		</div>

		<!-- Net change -->
		<div
			class="text-5xl text-gray-400 transition-all duration-500"
			class:opacity-100={step >= 5}
			class:opacity-0={step < 5}
		>
			Net: <span class="text-green-400"
				>+{format_number(added - deleted)}</span
			> lines
		</div>
	</div>
</Transition>
