<script lang="ts">
	import { Action, Transition } from '@animotion/core'

	let step = $state(0)
</script>

<!-- Terminal Error Output Slide -->
<!-- Shows TypeScript compilation errors -->

<Transition visible entry="scale-in" duration={0.6} delay={0.2}>
	<div
		class="overflow-hidden rounded-lg p-8 text-left font-mono text-2xl leading-relaxed transition-transform duration-500"
		class:scale-125={step === 2}
		class:scale-150={step === 3}
		class:scale-[1.75]={step >= 4}
		style="background-color: #011627;"
	>
		<Transition visible order={2} delay={0.6}>
			<div
				class="overflow-hidden transition-all duration-700 ease-in-out {step >= 1 ? 'max-h-0 opacity-0 mb-0' : 'max-h-[500px] opacity-100 mb-6'}"
			>
				<p style="color: #82AAFF;">
					/apps/xoos-sveltekit/src/routes/settings/cp-tab-secrets/secret-list.svelte:2:80
				</p>
				<p class="mt-2">
					<span class="font-bold" style="color: #EF5350;">
						Error:
					</span>
					<span style="color: #d6deeb;">
						Cannot find module 'ui' or its corresponding type
						declarations. (ts)
					</span>
				</p>
				<p style="color: #637777;">&lt;script lang="ts"&gt;</p>
				<p class="ml-8" style="color: #637777;">
					import {'{'} Table, TableBody, TableCell, TableHead, TableHeader,
					TableRow } from 'ui';
				</p>
				<p class="ml-8" style="color: #637777;">
					// import type {'{'} Secrets } from 'types/settings';
				</p>
			</div>
		</Transition>

		<Transition visible order={3} delay={0.8}>
			<div
				class="overflow-hidden transition-all duration-700 ease-in-out {step >= 1 ? 'max-h-0 opacity-0 mb-0' : 'max-h-[500px] opacity-100 mb-6'}"
			>
				<p style="color: #82AAFF;">
					/apps/xoos-sveltekit/src/routes/settings/cp-tab-secrets/add-secrets.svelte:3:24
				</p>
				<p class="mt-2">
					<span class="font-bold" style="color: #EF5350;">
						Error:
					</span>
					<span style="color: #d6deeb;">
						Cannot find module 'ui' or its corresponding type
						declarations. (ts)
					</span>
				</p>
				<p class="ml-8" style="color: #637777;">
					import {'{'} enhance } from '$app/forms';
				</p>
				<p class="ml-8" style="color: #637777;">
					import {'{'} Input } from 'ui';
				</p>
				<p class="ml-8" style="color: #637777;">
					import {'{'} Button } from '$lib/components/ui/button';
				</p>
			</div>
		</Transition>

		<Transition visible order={4} delay={1.0}>
			<div
				class="overflow-hidden transition-all duration-700 ease-in-out {step >= 1 ? 'max-h-0 opacity-0 mb-0' : 'max-h-[500px] opacity-100 mb-6'}"
			>
				<p style="color: #82AAFF;">
					/apps/xoos-sveltekit/src/routes/settings/control-panel/ai-agent-settings-cp-secrets.svelte:11:9
				</p>
				<p class="mt-2">
					<span class="font-bold" style="color: #EF5350;">
						Error:
					</span>
					<span style="color: #d6deeb;">
						Cannot find module 'ui' or its corresponding type
						declarations. (ts)
					</span>
				</p>
				<p class="ml-16" style="color: #C5E478;">toast</p>
				<p class="ml-8" style="color: #637777;">} from 'ui';</p>
			</div>
		</Transition>

		<Transition visible order={5} delay={1.2}>
			<div class="pt-4" style="border-top: 1px solid #1d3b53;">
				<p style="color: #EF5350;">
					svelte-check found 928 errors and 0 warnings in 227 files
				</p>
				<p class="mt-2">
					<span
						class="rounded px-2 py-1"
						style="background-color: #EF5350; color: #011627;"
					>
						ELIFECYCLE
					</span>
					<span class="ml-2" style="color: #d6deeb;">
						Command failed with exit code 1.
					</span>
				</p>
			</div>
		</Transition>
	</div>
</Transition>

<Action
	actions={[() => (step = 0), () => (step = 1), () => (step = 2), () => (step = 3), () => (step = 4)]}
/>
