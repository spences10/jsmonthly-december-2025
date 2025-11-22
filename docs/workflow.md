# Slide Creation Workflow

## Quick Start

1. Edit `talk.md` with your content
2. Run `node scripts/md-to-slides.js talk.md`
3. Custom slides go in `src/slides-custom/` then copy to numbered folders

## File Locations

| Path | Purpose |
|------|---------|
| `talk.md` | Your talk content in markdown |
| `src/slides/` | Generated slides (numbered folders) |
| `src/slides-custom/` | Custom visualization slides |
| `src/examples/` | Reference examples for patterns |

## Regenerating Slides

```bash
node scripts/md-to-slides.js talk.md
```

**Warning:** This overwrites all slides in `src/slides/`. Copy custom slides back after regenerating.

## Adding Custom Slides

1. Create in `src/slides-custom/`
2. Copy to appropriate `src/slides/{number}/slide.svelte`
3. Or manually create in the numbered folder
