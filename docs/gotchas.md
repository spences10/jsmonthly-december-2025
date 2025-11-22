# Common Gotchas

## Tailwind Classes with `/` in class: Directive

**Problem:** Svelte's `class:` directive breaks with `/` in class names.

```svelte
<!-- BROKEN -->
<div class:bg-red-900/50={condition}>

<!-- WORKS -->
<div class="{condition ? 'bg-red-900/50' : 'bg-gray-800'}">
```

## Script Tags

- `<script lang="ts">` - regular imports, state
- `<script module>` - for `defineProps` (lifecycle)

## Regenerating Slides Overwrites Custom Work

The `md-to-slides.js` script overwrites everything in `src/slides/`.

**Solution:** Keep custom slides in `src/slides-custom/` and copy them back after regenerating.

## Transitions Not in Firefox

The View Transitions API isn't supported in Firefox. Test in Chrome/Edge.

## Code Component Line Numbers

When using `code.selectLines`, line numbers are 1-indexed:

```svelte
() => code.selectLines`1`  // First line
() => code.selectLines`2-4` // Lines 2-4
() => code.selectLines`*`  // All lines
```
