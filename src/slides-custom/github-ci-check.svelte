<script lang="ts">
	import { Transition } from '@animotion/core'

	interface Props {
		file?: string
		diffRange?: string
		scale?: number
		lines?: Array<{
			num: number
			content: string
			type?: 'normal' | 'added' | 'removed'
		}>
		annotation?: {
			line: number
			repo?: string
			step?: string
			message: string
		}
	}

	let {
		file = 'src/routes/+page.svelte',
		diffRange = '@@ -1,8 +1,8 @@',
		scale = 2,
		lines = [
			{ num: 1, content: '<button on:click={() => count++}>', type: 'normal' },
			{ num: 2, content: '  Click me', type: 'normal' },
			{ num: 3, content: '</button>', type: 'normal' }
		],
		annotation = {
			line: 1,
			repo: 'my-app',
			step: 'svelte-check',
			message: "Using `on:click` is no longer valid in Svelte 5. Use `onclick` instead."
		}
	}: Props = $props()
</script>

<Transition visible class="w-full max-w-2xl mx-auto" duration={0.6}>
	<div
		class="rounded-sm overflow-hidden border border-[#30363d] bg-[#0d1117] font-mono text-sm origin-center"
		style="transform: scale({scale})"
	>
		<!-- File header -->
		<div class="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-[#30363d] text-left">
			<span class="text-[#7d8590]">▿</span>
			<span class="text-[#8b949e]">2</span>
			<span class="inline-block w-3 h-3 bg-green-500 rounded-sm"></span>
			<span class="inline-block w-3 h-3 bg-red-500 rounded-sm"></span>
			<span class="text-[#e6edf3]">{file}</span>
			<span class="text-[#7d8590]">📋</span>
		</div>

		<!-- Diff range -->
		<div class="px-4 py-1 text-[#7d8590] bg-[#161b22] border-b border-[#30363d] text-left">
			<span class="text-blue-400">{diffRange}</span>
		</div>

		<!-- Code lines -->
		<div class="text-[#e6edf3] text-left">
			{#each lines as line}
				<div
					class="flex"
					class:bg-[#1a2e1a]={line.type === 'added'}
					class:bg-[#3d1f1f]={line.type === 'removed'}
				>
					<span class="w-10 text-right pr-2 text-[#7d8590] select-none border-r border-[#30363d]">
						{line.type === 'added' ? '' : line.num}
					</span>
					<span class="w-10 text-right pr-2 text-[#7d8590] select-none border-r border-[#30363d]">
						{line.num}
					</span>
					<span class="px-4 flex-1">
						{#if line.type === 'added'}
							<span class="text-green-400">+</span>
						{:else if line.type === 'removed'}
							<span class="text-red-400">-</span>
						{:else}
							<span class="text-[#7d8590]">&nbsp;</span>
						{/if}
						{line.content}
					</span>
				</div>

				<!-- Annotation after the specified line -->
				{#if annotation && line.num === annotation.line}
					<Transition visible delay={0.4} duration={0.5}>
						<div class="border-l-4 border-red-500 bg-[#1c1c1c] mx-2 my-2 rounded text-left">
							<div class="flex items-center gap-2 px-3 py-2 text-red-400">
								<span class="text-lg">✕</span>
								<span class="text-left">Check failure on line {annotation.line} in {file}</span>
							</div>
							<div class="px-3 py-2 border-t border-[#30363d] text-left">
								<div class="flex items-center gap-2 text-[#8b949e]">
									<svg class="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="currentColor">
										<path
											d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
										/>
									</svg>
									<span>GitHub Actions</span>
									<span class="text-[#7d8590]">/</span>
									<span>{annotation.repo}</span>
								</div>
								<div class="mt-2 text-left">
									<span class="text-red-400 font-semibold">{annotation.step}</span>
								</div>
								<div class="mt-1 text-left text-[#e6edf3]">{annotation.message}</div>
							</div>
						</div>
					</Transition>
				{/if}
			{/each}
		</div>
	</div>
</Transition>
