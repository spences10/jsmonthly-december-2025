# Custom Slide Patterns

## Available in `src/slides-custom/`

### unlock-timeline.svelte
Step-through PR dependency chain. Shows how each PR enabled the next.

### stats-animated.svelte
Grid of 4 stats that reveal one-by-one, then summary line.

### before-after.svelte
Side-by-side comparison boxes with animated state changes.

## Pattern: Step-Through Reveal

```svelte
<script lang="ts">
  import { Action, Transition } from '@animotion/core'
  let step = $state(0)
</script>

<Transition visible>
  <div class:opacity-100={step >= 1} class:opacity-30={step < 1}>
    First item
  </div>
  <div class:opacity-100={step >= 2} class:opacity-30={step < 2}>
    Second item
  </div>
</Transition>

<Action actions={[
  () => (step = 0),
  () => (step = 1),
  () => (step = 2),
]} />
```

## Pattern: Cascading Boxes

```svelte
<div class="flex flex-col gap-6">
  <div class="pl-0">First box</div>
  <div class="pl-24">Second box (indented)</div>
  <div class="pl-48">Third box (more indented)</div>
</div>
```

## Reference Examples

More patterns in `src/examples/` - code blocks, embeds, images, timelines.
