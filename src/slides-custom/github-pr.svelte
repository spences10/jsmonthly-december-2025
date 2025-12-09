<script lang="ts">
	import { Transition } from '@animotion/core'
	import {
		ArrowLeft,
		BookOpen,
		BookText,
		CircleDot,
		CirclePlay,
		CircleSlash,
		Eye,
		FileText,
		GitCommitHorizontal,
		GitMerge,
		GitPullRequest,
		GitPullRequestClosed,
		LayoutGrid,
		MessageSquare,
		Settings,
	} from '@lucide/svelte'

	interface Props {
		org: string
		repo: string
		pr_number: number
		pr_title: string
		author: string
		branch: string
		base_branch?: string
		status?: 'merged' | 'open' | 'closed'
		date?: string
		conversation?: number
		commits?: number
		checks?: number
		files_changed?: string
		added?: number
		deleted?: number
		scale?: number
	}

	let {
		org,
		repo,
		pr_number,
		pr_title,
		author,
		branch,
		base_branch = 'main',
		status = 'merged',
		date = '3 weeks ago',
		conversation = 6,
		commits = 30,
		checks = 15,
		files_changed = '300+',
		added = 0,
		deleted = 0,
		scale = 1,
	}: Props = $props()

	// Calculate the 5-block ratio (like GitHub does)
	const total = $derived(added + deleted)
	const added_ratio = $derived(total > 0 ? added / total : 0)
	const deleted_ratio = $derived(total > 0 ? deleted / total : 0)
	const added_blocks = $derived(Math.round(added_ratio * 5))
	const deleted_blocks = $derived(Math.round(deleted_ratio * 5))
	const neutral_blocks = $derived(5 - added_blocks - deleted_blocks)

	function format_number(n: number): string {
		return n.toLocaleString()
	}

	const status_config = {
		merged: { bg: 'bg-purple-600', text: 'Merged', icon: 'merged' },
		open: { bg: 'bg-green-600', text: 'Open', icon: 'open' },
		closed: { bg: 'bg-red-600', text: 'Closed', icon: 'closed' },
	}
</script>

<Transition visible duration={0.6}>
	<div
		class="flex items-center justify-center"
		style="transform: scale({scale})"
	>
		<div
			class="max-w-[1000px] overflow-hidden rounded-xl border border-gray-700 bg-[#0d1117] font-sans shadow-2xl"
		>
			<!-- Top header: org/repo + diffstat -->
			<div
				class="flex items-center justify-between border-b border-gray-700 bg-[#010409] px-4 py-3"
			>
				<div class="flex items-center gap-3">
					<svg
						class="h-8 w-8 shrink-0 text-white"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
						/>
					</svg>
					<span class="flex items-center gap-1 text-xl leading-none">
						<span class="text-gray-400">{org}</span>
						<span class="text-gray-600">/</span>
						<span class="font-semibold text-white">{repo}</span>
					</span>
				</div>
				{#if total > 0}
					<div class="flex items-center gap-2 self-end border-b-4 border-transparent font-mono text-base leading-none">
						<span class="text-[#3fb950]">+{format_number(added)}</span>
						<span class="text-[#f85149]">−{format_number(deleted)}</span>
						<div class="flex items-center gap-x-0.5">
							{#each Array(added_blocks) as _}
								<div class="h-3 w-3 bg-[#3fb950]"></div>
							{/each}
							{#each Array(deleted_blocks) as _}
								<div class="h-3 w-3 bg-[#f85149]"></div>
							{/each}
							{#each Array(neutral_blocks) as _}
								<div class="h-3 w-3 bg-gray-500"></div>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<!-- Nav tabs -->
			<div
				class="flex gap-4 border-b border-gray-700 bg-[#010409] px-4 py-2 text-sm text-gray-400"
			>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><BookOpen class="h-4 w-4" />Code</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><CircleDot class="h-4 w-4" />Issues</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-orange-500 pb-2 text-white"
					><GitPullRequest class="h-4 w-4" />Pull requests</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><CirclePlay class="h-4 w-4" />Actions</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><LayoutGrid class="h-4 w-4" />Projects</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><BookText class="h-4 w-4" />Wiki</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><Settings class="h-4 w-4" />Settings</span
				>
			</div>

			<!-- PR Title -->
			<div class="border-b border-gray-700 px-6 py-5">
				<h1 class="text-left text-3xl text-white">
					{pr_title} <span class="text-gray-500">#{pr_number}</span>
				</h1>

				<!-- Status + branch info -->
				<div class="mt-4 flex items-center gap-3 text-base">
					<span
						class="{status_config[status]
							.bg} flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium text-white"
					>
						{#if status === 'merged'}
							<GitMerge class="h-4 w-4" />
						{:else if status === 'open'}
							<GitPullRequest class="h-4 w-4" />
						{:else}
							<GitPullRequestClosed class="h-4 w-4" />
						{/if}
						{status_config[status].text}
					</span>
					<span class="text-gray-400">by</span>
					<span class="text-gray-300">{author}</span>
					<span
						class="rounded border border-gray-600 bg-[#1f2937] px-2 py-0.5 font-mono text-sm text-[#58a6ff]"
						>{base_branch}</span
					>
					<ArrowLeft class="h-4 w-4 text-gray-500" />
					<span
						class="rounded border border-gray-600 bg-[#1f2937] px-2 py-0.5 font-mono text-sm text-[#58a6ff] {status ===
						'merged'
							? 'line-through'
							: ''}">{branch}</span
					>
					<GitMerge class="h-4 w-4 text-gray-500" />
					<span class="text-gray-400">{date}</span>
					<Eye class="h-4 w-4 text-gray-500" />
				</div>
			</div>

			<!-- PR Tabs -->
			<div
				class="flex items-center justify-between px-6 py-3 text-base text-gray-400"
			>
				<div class="flex gap-8">
					<span
						class="flex items-center gap-1 border-b-2 border-orange-500 pb-2 text-white"
						><MessageSquare class="h-4 w-4" />Conversation
						<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
							>{conversation}</span
						></span
					>
					<span
						class="flex items-center gap-1 border-b-2 border-transparent pb-2"
						><GitCommitHorizontal class="h-4 w-4" />Commits
						<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
							>{commits}</span
						></span
					>
					<span
						class="flex items-center gap-1 border-b-2 border-transparent pb-2"
						><CircleSlash class="h-4 w-4" />Checks
						<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
							>{checks}</span
						></span
					>
					<span
						class="flex items-center gap-1 border-b-2 border-transparent pb-2"
						><FileText class="h-4 w-4" />Files changed
						<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
							>{files_changed}</span
						></span
					>
				</div>
			</div>
		</div>
	</div>
</Transition>
