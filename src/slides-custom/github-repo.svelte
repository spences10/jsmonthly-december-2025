<script lang="ts">
	import { Transition } from '@animotion/core'
	import { onMount } from 'svelte'

	interface Props {
		repo: string // format: "owner/repo" e.g. "ghostdevv/svelte-check-action"
		scale?: number
	}

	let { repo, scale = 1 }: Props = $props()

	interface RepoData {
		name: string
		full_name: string
		description: string | null
		stargazers_count: number
		forks_count: number
		language: string | null
		owner: {
			login: string
			avatar_url: string
		}
		html_url: string
	}

	let data = $state<RepoData | null>(null)
	let error = $state<string | null>(null)
	let loading = $state(true)

	onMount(async () => {
		try {
			const res = await fetch(`https://api.github.com/repos/${repo}`)
			if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
			data = await res.json()
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load repo'
		} finally {
			loading = false
		}
	})

	function format_number(n: number): string {
		if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
		return n.toString()
	}

	// Language colors (subset of GitHub's)
	const lang_colors: Record<string, string> = {
		TypeScript: '#3178c6',
		JavaScript: '#f1e05a',
		Python: '#3572A5',
		Rust: '#dea584',
		Go: '#00ADD8',
		Svelte: '#ff3e00',
		Vue: '#41b883',
		React: '#61dafb',
		Ruby: '#701516',
		Java: '#b07219',
		CSS: '#563d7c',
		HTML: '#e34c26',
		Shell: '#89e051',
	}
</script>

<Transition visible duration={0.6}>
	<div
		class="flex items-center justify-center"
		style="transform: scale({scale})"
	>
		{#if loading}
			<div class="text-4xl text-gray-400">Loading...</div>
		{:else if error}
			<div class="text-4xl text-red-400">{error}</div>
		{:else if data}
			<!-- GitHub OG-style card -->
			<a
				href={data.html_url}
				target="_blank"
				rel="noopener noreferrer"
				class="block w-[800px] overflow-hidden rounded-xl border border-gray-700 bg-[#0d1117] no-underline shadow-2xl transition-transform hover:scale-[1.02]"
			>
				<!-- Header with owner info -->
				<div
					class="flex items-center gap-4 border-b border-gray-700 bg-[#161b22] px-6 py-4"
				>
					<img
						src={data.owner.avatar_url}
						alt={data.owner.login}
						class="h-12 w-12 rounded-full"
					/>
					<span class="text-2xl text-gray-300"
						>{data.owner.login}</span
					>
				</div>

				<!-- Main content -->
				<div class="p-8">
					<!-- Repo name -->
					<div class="flex items-center gap-3">
						<svg
							class="h-8 w-8 text-gray-400"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
							/>
						</svg>
						<h2 class="text-4xl font-semibold text-[#58a6ff]">
							{data.name}
						</h2>
					</div>

					<!-- Description -->
					{#if data.description}
						<p
							class="mt-4 text-left text-2xl leading-relaxed text-gray-300"
						>
							{data.description}
						</p>
					{/if}

					<!-- Stats row -->
					<div
						class="mt-6 flex items-center gap-8 text-xl text-gray-400"
					>
						<!-- Language -->
						{#if data.language}
							<div class="flex items-center gap-2">
								<span
									class="h-4 w-4 rounded-full"
									style="background-color: {lang_colors[
										data.language
									] || '#8b949e'}"
								></span>
								<span>{data.language}</span>
							</div>
						{/if}

						<!-- Stars -->
						<div class="flex items-center gap-2">
							<svg
								class="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
								/>
							</svg>
							<span>{format_number(data.stargazers_count)}</span>
						</div>

						<!-- Forks -->
						<div class="flex items-center gap-2">
							<svg
								class="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
								/>
							</svg>
							<span>{format_number(data.forks_count)}</span>
						</div>
					</div>
				</div>
			</a>
		{/if}
	</div>
</Transition>
