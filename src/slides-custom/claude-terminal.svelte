<script lang="ts">
	import { Transition } from '@animotion/core'

	interface Props {
		display_header?: boolean
		claude_code_version?: string
		model?: string
		account_type?: string
		folder_location?: string
		user_input?: string | string[]
		user_reply?: string
		claude_output?: string | string[]
		show_thinking?: boolean
		thinking_file?: string
		thinking_on?: boolean
		status_text?: 'shortcuts' | 'accept-edits' | 'plan-mode'
		output_first?: boolean
	}

	let {
		display_header = true,
		claude_code_version = 'v2.0.54',
		model = 'Sonnet 4.5',
		account_type = 'Claude Pro',
		folder_location = '~/',
		user_input,
		user_reply,
		claude_output,
		show_thinking = false,
		thinking_file = 'claude-terminal.svelte',
		thinking_on = true,
		status_text = 'shortcuts',
		output_first = false,
	}: Props = $props()
</script>

<!-- Claude Terminal - Authentic Claude Code UI -->

<Transition visible entry="scale-in" duration={0.6} delay={0.2}>
	<div
		class="overflow-hidden rounded-lg text-left font-mono"
		style="background-color: #011627; max-width: 1400px; min-height: 600px; display: flex; flex-direction: column; padding: 2rem; font-family: 'JetBrains Mono', 'Victor Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace;"
	>
		<!-- Header Section -->
		{#if display_header}
			<div
				class="mb-8 flex items-start justify-center gap-8"
				style="align-self: flex-start; background: none; padding: 0; border: none; border-radius: 0;"
			>
				<!-- Claude Logo - Small and inline -->
				<pre
					style="color: #FF6B9D; font-family: 'Victor Mono', 'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace; font-size: 24px; line-height: 1.6; white-space: pre; margin: 0; padding: 0; background: none;">
 ▐▛███▜▌ 
▝▜█████▛▘
  ▘▘ ▝▝  
        </pre>
				<!-- Version Info -->
				<div
					class="text-2xl leading-tight"
					style="color: #949494; background: none;"
				>
					<div style="color: #d6deeb;">
						Claude Code <span style="color: #949494"
							>{claude_code_version}</span
						>
					</div>
					<div>{model} · {account_type}</div>
					<div>{folder_location}</div>
				</div>
			</div>
		{/if}

		<!-- Main Content Area -->
		<div class="mb-6 flex-1">
			{#if output_first}
				<!-- Claude Output First -->
				{#if claude_output}
					<div class="mb-8">
						{#if Array.isArray(claude_output)}
							{#each claude_output as output, index}
								<Transition
									visible
									order={1 + index}
									delay={0.3 + index * 0.15}
								>
									<div
										class="text-2xl leading-relaxed whitespace-pre-wrap"
										style="color: #d6deeb;"
									>
										{#if index === 0}<span>●&nbsp;</span>{:else}<span
												>&nbsp;&nbsp;</span
											>{/if}{output}
									</div>
								</Transition>
							{/each}
						{:else}
							<Transition visible order={1} delay={0.3}>
								<div
									class="text-2xl leading-relaxed whitespace-pre-wrap"
									style="color: #d6deeb;"
								>
									● {claude_output}
								</div>
							</Transition>
						{/if}
					</div>
				{/if}

				<!-- User Input Second -->
				{#if user_input}
					{#if Array.isArray(user_input)}
						{#each user_input as input, index}
							<Transition
								visible
								order={2 + index}
								delay={0.5 + index * 0.15}
							>
								<div class="">
									<div
										class="inline-flex items-end gap-2"
										style="color: #d6deeb; background: #3a3a3a;"
									>
										{#if index === 0}
											<span class="text-2xl">&gt;</span>
										{/if}
										<div
											class="text-2xl leading-normal"
											style="color: #d6deeb; background: #3a3a3a;"
										>
											{input}
										</div>
									</div>
								</div>
							</Transition>
						{/each}
					{:else}
						<Transition visible order={2} delay={0.5}>
							<div class="">
								<div
									class="inline-flex items-end gap-2"
									style="color: #d6deeb; background: #3a3a3a;"
								>
									<span class="text-2xl">&gt;</span>
									<div
										class="text-2xl leading-normal"
										style="color: #d6deeb; background: #3a3a3a;"
									>
										{user_input}
									</div>
								</div>
							</div>
						</Transition>
					{/if}
				{/if}
			{:else}
				<!-- User Input First (default) -->
				{#if user_input}
					<div class="mb-8">
						{#if Array.isArray(user_input)}
							{#each user_input as input, index}
								<Transition
									visible
									order={1 + index}
									delay={0.3 + index * 0.15}
								>
									<div class="">
										<div
											class="inline-flex items-end gap-2"
											style="color: #d6deeb; background: #3a3a3a;"
										>
											{#if index === 0}
												<span class="text-2xl">&gt;</span>
											{/if}
											<div
												class="text-2xl leading-normal"
												style="color: #d6deeb; background: #3a3a3a;"
											>
												{input}
											</div>
										</div>
									</div>
								</Transition>
							{/each}
						{:else}
							<Transition visible order={1} delay={0.3}>
								<div class="">
									<div
										class="inline-flex items-end gap-2"
										style="color: #d6deeb; background: #3a3a3a;"
									>
										<span class="text-2xl">&gt;</span>
										<div
											class="text-2xl leading-normal"
											style="color: #d6deeb; background: #3a3a3a;"
										>
											{user_input}
										</div>
									</div>
								</div>
							</Transition>
						{/if}
					</div>
				{/if}

				<!-- Claude Output Second -->
				{#if claude_output}
					{#if Array.isArray(claude_output)}
						{#each claude_output as output, index}
							<Transition
								visible
								order={2 + index}
								delay={0.5 + index * 0.15}
							>
								<div
									class="text-2xl leading-relaxed whitespace-pre-wrap"
									style="color: #d6deeb;"
								>
									{#if index === 0}<span>●&nbsp;</span>{:else}<span
											>&nbsp;&nbsp;</span
										>{/if}{output}
								</div>
							</Transition>
						{/each}
					{:else}
						<Transition visible order={2} delay={0.5}>
							<div
								class="text-2xl leading-relaxed whitespace-pre-wrap"
								style="color: #d6deeb;"
							>
								● {claude_output}
							</div>
						</Transition>
					{/if}
				{/if}
			{/if}
		</div>

		<!-- User Reply Section with bars -->
		{#if user_reply}
			<Transition visible order={3} delay={0.7}>
				<div class="mt-6">
					<!-- Top bar -->
					<div
						class="border-t-4 pt-4"
						style="border-color: #576b7f;"
					></div>

					<!-- User reply with prompt -->
					<div class="flex items-end gap-2 px-4">
						<span class="-ml-4 text-2xl" style="color: #d6deeb;"
							>&gt;</span
						>
						<div
							class="text-2xl leading-normal"
							style="color: #d6deeb;"
						>
							{user_reply}
						</div>
					</div>

					<!-- Bottom bar -->
					<div
						class="border-b-4 pt-4"
						style="border-color: #576b7f;"
					></div>
				</div>
			</Transition>
		{/if}

		<!-- Bottom Status Bar -->
		<div class="mt-auto pt-2" style="border-color: #576b7f;">
			<div class="flex items-start justify-between text-lg">
				<div style="color: #637777;">
					{#if status_text === 'shortcuts'}
						? for shortcuts
					{:else if status_text === 'accept-edits'}
						<span style="color: #afafff;">⏩ accept edits on</span> (shift+tab
						to cycle)
					{:else if status_text === 'plan-mode'}
						⏸ plan mode on (shift+tab to cycle)
					{/if}
				</div>
				{#if show_thinking}
					<Transition visible order={3} delay={0.7}>
						<div
							class="flex flex-col items-end"
							style="color: #637777;"
						>
							<div class="flex items-center gap-2">
								<span style="color: #afafff;">⧉</span>
								<span>In {thinking_file}</span>
							</div>
							<span style="color: #596d6f;">
								<span style={thinking_on ? 'color: #afafff;' : ''}>
									Thinking {thinking_on ? 'on' : 'off'}
								</span> (tab to toggle)
							</span>
						</div>
					</Transition>
				{/if}
			</div>
		</div>
	</div>
</Transition>
