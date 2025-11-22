# Animations and Actions

## Step-Through with Actions

Use arrow keys to advance through steps:

```svelte
<script lang="ts">
  import { Action } from '@animotion/core'
  let step = $state(0)
</script>

<div class:opacity-100={step >= 1} class:opacity-0={step < 1}>
  Appears on step 1
</div>

<Action
  actions={[
    () => (step = 0),
    () => (step = 1),
    () => (step = 2),
  ]}
/>
```

## Transition Effects

```svelte
<Transition visible entry="scale-in" duration={0.6}>
  <h2>Scales in on load</h2>
</Transition>

<Transition visible entry="scale-in" duration={0.8} delay={0.2}>
  <p>Appears 0.2s later</p>
</Transition>
```

## Conditional Classes

For toggling styles based on step:

```svelte
<!-- Simple classes work fine -->
<div class:bg-green-500={step >= 1}>

<!-- Classes with / need template syntax -->
<div class="base-classes {step >= 1 ? 'bg-red-900/50' : 'bg-gray-800'}">
```

## CSS Transitions

Add Tailwind transition classes for smooth state changes:

```svelte
<div class="transition-all duration-500"
     class:scale-105={step === 1}
     class:bg-green-600={step >= 1}>
```
