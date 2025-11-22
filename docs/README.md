# Presentation Docs

Quick reference for building slides with Animotion.

## Docs

| File | What's In It |
|------|--------------|
| [workflow.md](workflow.md) | How to create/regenerate slides |
| [markdown-format.md](markdown-format.md) | Writing `talk.md` |
| [animotion-basics.md](animotion-basics.md) | Slide structure, components |
| [animations-actions.md](animations-actions.md) | Step-through, transitions |
| [custom-slides.md](custom-slides.md) | Visualization patterns |
| [data-files.md](data-files.md) | PR data and key numbers |
| [gotchas.md](gotchas.md) | Common issues and fixes |

## Quick Commands

```bash
# Regenerate slides from markdown
node scripts/md-to-slides.js talk.md

# Dev server
pnpm dev
```

## Key Folders

- `talk.md` - Your content
- `src/slides/` - Generated slides
- `src/slides-custom/` - Custom visualizations
- `src/examples/` - Reference patterns
