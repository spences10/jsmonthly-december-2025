# Data Files

## Available Data

| File | Content |
|------|---------|
| `pr-analysis-data.json` | Structured PR data with narrative |
| `pr-commits-timeline.csv` | Commit-by-commit timeline |

## Key Numbers (from JSON)

- **Total:** 137.45 hours, 128 commits, 875 files
- **PR 5361:** 60.81h, 30 commits, 377 files (Remove UI package)
- **PR 5375:** 24.11h, 37 commits, 364 files (shadcn-svelte)
- **PR 5381:** 43.21h, 54 commits, 122 files (Auth optimization)
- **PR 5397:** 9.33h, 7 commits, 12 files (Layout polish)
- **Throughput:** 329 lines/hour

## Using Data in Slides

Import JSON directly:

```svelte
<script lang="ts">
  import data from '$lib/pr-analysis-data.json'
</script>

<p>{data.summary.total_commits} commits</p>
```

Or just hardcode the numbers - they won't change.

## Visualization Ideas

- PR unlock chain (dependency cascade)
- Stats grid with animated reveal
- Before/after comparison
- Commit heatmap by hour (CSV has hour data)
