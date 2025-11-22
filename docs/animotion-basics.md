# Animotion Slide Basics

## Minimum Valid Slide

Just HTML content - no wrapper needed:

```svelte
<h2 class="text-8xl font-bold">My Title</h2>
<p class="mt-8 text-4xl">Content here</p>
```

## File Structure

- Slides in `src/slides/{number}/slide.svelte`
- Numbers sorted lowest to highest (100, 200, 300...)
- Assets can live in same folder as slide

## Adding Transitions

```svelte
<script lang="ts">
  import { Transition } from '@animotion/core'
</script>

<Transition visible entry="scale-in" duration={0.6}>
  <h2>Animated heading</h2>
</Transition>
```

## Slide Lifecycle Props

```svelte
<script module>
  import { defineProps } from '@animotion/core'
  export const props = defineProps({
    in: () => console.log('entered'),
    out: () => console.log('exited')
  })
</script>
```

## Key Components

| Component | Import | Purpose |
|-----------|--------|---------|
| `Transition` | `@animotion/core` | Entry/exit animations |
| `Action` | `@animotion/core` | Step-through on keypress |
| `Code` | `@animotion/core` | Syntax-highlighted code blocks |
