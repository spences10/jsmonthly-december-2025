<script lang="ts">
	import { Transition } from '@animotion/core'

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
		conversation = 0,
		commits = 0,
		checks = 0,
		files_changed = '',
		scale = 1,
	}: Props = $props()

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
			<!-- Top header: org/repo -->
			<div
				class="flex items-center gap-3 border-b border-gray-700 bg-[#010409] px-4 py-3"
			>
				<svg
					class="h-8 w-8 text-white"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
				<span class="text-xl text-gray-400">{org}</span>
				<span class="text-xl text-gray-600">/</span>
				<span class="text-xl font-semibold text-white">{repo}</span>
			</div>

			<!-- Nav tabs -->
			<div
				class="flex gap-4 border-b border-gray-700 bg-[#010409] px-4 py-2 text-sm text-gray-400"
			>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"
						/></svg
					>Code</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
						/><path
							d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
						/></svg
					>Issues</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-orange-500 pb-2 text-white"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
						/></svg
					>Pull requests</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"
						/></svg
					>Actions</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"
						/></svg
					>Projects</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"
						/></svg
					>Wiki</span
				>
				<span
					class="flex items-center gap-1 border-b-2 border-[#0d1117] pb-2"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .167.169c.178.149.365.289.558.42l.145.1c.293.196.6.374.917.532l.162.081c.321.154.651.29.99.406l.168.054a8.014 8.014 0 0 0 1.044.263l.159.029c.357.057.722.088 1.092.1h.266a8.114 8.114 0 0 0 1.092-.1l.16-.029c.35-.06.694-.14 1.028-.243l.168-.054c.34-.116.67-.252.99-.406l.163-.081c.316-.158.623-.336.916-.532l.145-.1c.193-.131.38-.271.558-.42a.999.999 0 0 0 .167-.17A7.993 7.993 0 0 0 8 0Zm-.001 2c-.001 0-2.73.001-4.285 2.386C2.179 6.6 2.052 9.167 3.11 11.453c.26-.312.553-.596.873-.846a5.766 5.766 0 0 1 4.014-1.607 5.766 5.766 0 0 1 4.014 1.607c.32.25.614.534.873.846 1.058-2.286.93-4.853-.605-7.067C10.724 2.001 8.001 2 8 2Zm0 9c-1.3 0-2.494.447-3.445 1.19C5.857 13.33 6.892 14 8 14s2.143-.67 3.445-1.81A5.766 5.766 0 0 0 8 11Zm0-3.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
						/></svg
					>Settings</span
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
							<svg
								class="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 16 16"
								><path
									d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
								/></svg
							>
						{:else if status === 'open'}
							<svg
								class="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 16 16"
								><path
									d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
								/></svg
							>
						{:else}
							<svg
								class="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 16 16"
								><path
									d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 5.5a.75.75 0 0 1 .75.75v3.378a2.251 2.251 0 1 1-1.5 0V7.25a.75.75 0 0 1 .75-.75Zm-2.03-5.273a.75.75 0 0 1 1.06 0l.97.97.97-.97a.748.748 0 0 1 1.265.332.75.75 0 0 1-.205.729l-.97.97.97.97a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-.97-.97-.97.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l.97-.97-.97-.97a.75.75 0 0 1 0-1.06ZM3.25 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
								/></svg
							>
						{/if}
						{status_config[status].text}
					</span>
					<span class="text-gray-400">by</span>
					<span class="text-gray-300">{author}</span>
					<span
						class="rounded border border-gray-600 bg-[#1f2937] px-2 py-0.5 font-mono text-sm text-[#58a6ff]"
						>{base_branch}</span
					>
					<svg
						class="h-4 w-4 text-gray-500"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"
						/></svg
					>
					<span
						class="rounded border border-gray-600 bg-[#1f2937] px-2 py-0.5 font-mono text-sm text-[#58a6ff] {status ===
						'merged'
							? 'line-through'
							: ''}">{branch}</span
					>
					<svg
						class="h-4 w-4 text-gray-500"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
						/></svg
					>
					<span class="text-gray-400">{date}</span>
					<svg
						class="h-4 w-4 text-gray-500"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.824.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"
						/></svg
					>
				</div>
			</div>

			<!-- PR Tabs -->
			<div class="flex gap-8 px-6 py-3 text-base text-gray-400">
				<span
					class="flex items-center gap-1 border-b-2 border-orange-500 pb-2 text-white"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"
						/></svg
					>Conversation
					<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
						>{conversation}</span
					></span
				>
				<span class="flex items-center gap-1"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
						/></svg
					>Commits
					<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
						>{commits}</span
					></span
				>
				<span class="flex items-center gap-1"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm9.78-2.22-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"
						/></svg
					>Checks
					<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
						>{checks}</span
					></span
				>
				<span class="flex items-center gap-1"
					><svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 16 16"
						><path
							d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
						/></svg
					>Files changed
					<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs"
						>{files_changed}</span
					></span
				>
			</div>
		</div>
	</div>
</Transition>
