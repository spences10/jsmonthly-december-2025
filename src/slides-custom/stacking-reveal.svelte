<script lang="ts">
	import { Action } from '@animotion/core'
	import { tween } from '@animotion/motion'
	import { cubicOut } from 'svelte/easing'

	let { items = [], scale = 1 }: { items: string[]; scale?: number } =
		$props()

	// Create tweens once - not derived (tweens are stateful)
	const create_tweens = () =>
		items.map((_, i) =>
			tween(
				{
					y: i === 0 ? 0 : 100,
					item_scale: i === 0 ? 1 : 0.5,
					opacity: i === 0 ? 1 : 0,
				},
				{ duration: 500, easing: cubicOut },
			),
		)

	let item_tweens = $state(create_tweens())

	// Each action handles a specific transition: show item at index, hide previous
	function show_item(index: number) {
		// Hide previous item (move up and fade)
		if (index > 0) {
			item_tweens[index - 1].to({
				y: -50,
				item_scale: 0.6,
				opacity: 0,
			})
		}
		// Show this item
		item_tweens[index].to({ y: 0, item_scale: 1, opacity: 1 })
	}

	function hide_item(index: number) {
		// Hide this item (move down and fade)
		item_tweens[index].to({ y: 100, item_scale: 0.5, opacity: 0 })
		// Show previous item
		if (index > 0) {
			item_tweens[index - 1].to({ y: 0, item_scale: 1, opacity: 1 })
		}
	}
</script>

<div class="stacking-container" style:transform="scale({scale})">
	{#each items as item, i}
		<div
			class="stacking-item text-8xl font-bold"
			style:transform="translateY({item_tweens[i].current.y}vh) scale({item_tweens[
				i
			].current.item_scale})"
			style:opacity={item_tweens[i].current.opacity}
		>
			<h1>{item}</h1>
		</div>
	{/each}
</div>

{#each items.slice(1) as _, i}
	<Action do={() => show_item(i + 1)} undo={() => hide_item(i + 1)} />
{/each}

<style>
	.stacking-container {
		display: grid;
		place-items: center;
		min-height: 50vh;
	}

	.stacking-item {
		grid-area: 1 / 1;
	}
</style>
