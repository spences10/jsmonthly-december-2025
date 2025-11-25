```component:title-slide
title: "How I Refactored 370 Files in 11 Hours"
subtitle: "(Thanks Claude)"
name: "Scott Spence"
event: "JSMonthly"
date: "December 2025"
```

---

```component:image-caption
src: "$lib/assets/svelte_london_whatsapp_chat.png"
alt: "Svelte London WhatsApp chat"
caption: "Svelte London WhatsApp chat"
```

---

```component:image-caption
src: "$lib/assets/svelte_london_whatsapp_chat_svaude.png"
alt: "Svelte London WhatsApp chat Svaude"
caption: "We like to ad `Sv` to everything"
```

---

# I lied!

It was 370 files in 11 hours, but I hadn't finished! 😅

---

# so!

> notes:
>
> - This talk should be titled

---

```component:title-slide
title: "How I Refactored 875 files over 180 commits, in 10 days"
subtitle: "(Thanks Claude)"
```

> notes:
>
> - Doesn't really roll off the tongue does it

---

This is a story about how I used AI to massively accelerate a tedious,
repetitive refactor that would have taken me weeks to do manually.

---

```component:image-caption
src: "$lib/assets/the_duality_of_ai_usage.jpeg"
alt: "The duality of AI usage meme"
caption: "The duality of AI usage meme"
```

> notes:
>
> - This talk is basically this meme

---

```component:about-me
name: "Scott Spence"
title: "SvelteKit TypeScript Developer"
image: "$lib/assets/mug-face.png"
points: ["Svelte LDN meetup organiser", "Application Team Lead", "Does AI stuff at XtendOps", "Dad 👨‍👩‍👧", "Cat dad 😺"]
```

> notes:
>
> - Mention working at company XtendOps
> - Been using Claude Code since early access

---

```component:bluesky-embed

```

---

```component:bullet-points
title: "The Setup"
points: ["Monorepo with legacy UI package", "Dependency mismatch causing cascade of errors", "svelte-check spitting out thousands of lines"]
```

---

```component:bullet-points
title: "The CLI Output From Hell"
points: ["svelte-check vomiting thousands of errors", "Scroll... scroll... scroll... more errors", "Found 2,847 errors in 377 files", "Terminal buffer couldn't even hold it all"]
```

---

```component:terminal-output

```

---

```component:bullet-points
title: "Why This Wasn't Fixable Manually"
points: ["377 files affected", "Each fix could introduce new errors", "Time estimate: weeks of tedious work", "Human attention span: not built for this"]
```

---

```component:bullet-points
title: "The Breakthrough"
points: ["What if I just... fed the errors to Claude?", "Copy 50 lines of errors → paste → get fixes", "It actually worked", "Repeat until svelte-check passes"]
```

---

```component:bullet-points
title: "The Loop"
points: ["Run svelte-check", "Copy first 50 errors", "Paste to Claude → get fixes", "Apply fixes → commit", "Repeat until green"]
```

---

```component:bullet-points
title: "Iteration Reality"
points: ["Session resets every few hours", "Context limits hit repeatedly", "50 lines at a time = manageable chunks", "30 commits over 4.6 days"]
```

---

```component:punch-card
title: "When The Work Happened"
subtitle: "180 commits across 10 days (work + personal)"
data: [{"date":"2025-11-12","hour":13,"count":1},{"date":"2025-11-12","hour":17,"count":1},{"date":"2025-11-12","hour":18,"count":1},{"date":"2025-11-12","hour":19,"count":6},{"date":"2025-11-12","hour":21,"count":5},{"date":"2025-11-12","hour":22,"count":3},{"date":"2025-11-13","hour":7,"count":2},{"date":"2025-11-13","hour":9,"count":3},{"date":"2025-11-13","hour":10,"count":3},{"date":"2025-11-13","hour":12,"count":3},{"date":"2025-11-13","hour":13,"count":3},{"date":"2025-11-13","hour":14,"count":2},{"date":"2025-11-14","hour":21,"count":3},{"date":"2025-11-14","hour":22,"count":9},{"date":"2025-11-14","hour":23,"count":2},{"date":"2025-11-15","hour":8,"count":1},{"date":"2025-11-15","hour":12,"count":4},{"date":"2025-11-15","hour":14,"count":1},{"date":"2025-11-15","hour":20,"count":1},{"date":"2025-11-16","hour":19,"count":3},{"date":"2025-11-16","hour":20,"count":2},{"date":"2025-11-17","hour":11,"count":6},{"date":"2025-11-17","hour":12,"count":1},{"date":"2025-11-17","hour":17,"count":2},{"date":"2025-11-17","hour":18,"count":4},{"date":"2025-11-17","hour":19,"count":4},{"date":"2025-11-17","hour":20,"count":6},{"date":"2025-11-17","hour":21,"count":1},{"date":"2025-11-17","hour":22,"count":4},{"date":"2025-11-17","hour":23,"count":2},{"date":"2025-11-18","hour":7,"count":1},{"date":"2025-11-18","hour":8,"count":2},{"date":"2025-11-18","hour":9,"count":2},{"date":"2025-11-18","hour":11,"count":3},{"date":"2025-11-18","hour":12,"count":3},{"date":"2025-11-18","hour":15,"count":2},{"date":"2025-11-18","hour":16,"count":2},{"date":"2025-11-18","hour":17,"count":2},{"date":"2025-11-18","hour":18,"count":7},{"date":"2025-11-18","hour":19,"count":5},{"date":"2025-11-18","hour":20,"count":6},{"date":"2025-11-18","hour":22,"count":2},{"date":"2025-11-19","hour":7,"count":1},{"date":"2025-11-19","hour":8,"count":1},{"date":"2025-11-19","hour":9,"count":1},{"date":"2025-11-19","hour":10,"count":1},{"date":"2025-11-19","hour":14,"count":4},{"date":"2025-11-19","hour":16,"count":2},{"date":"2025-11-19","hour":17,"count":1},{"date":"2025-11-19","hour":19,"count":1},{"date":"2025-11-19","hour":20,"count":1},{"date":"2025-11-19","hour":21,"count":4},{"date":"2025-11-20","hour":7,"count":2},{"date":"2025-11-20","hour":16,"count":1},{"date":"2025-11-20","hour":19,"count":12},{"date":"2025-11-20","hour":20,"count":5},{"date":"2025-11-20","hour":21,"count":3},{"date":"2025-11-20","hour":22,"count":2},{"date":"2025-11-20","hour":23,"count":2},{"date":"2025-11-21","hour":11,"count":1},{"date":"2025-11-21","hour":12,"count":2},{"date":"2025-11-21","hour":16,"count":2},{"date":"2025-11-21","hour":17,"count":3},{"date":"2025-11-21","hour":18,"count":1},{"date":"2025-11-21","hour":22,"count":1}]
hour_range: [6, 24]
```

> notes:
>
> - Notice the late night sessions
> - Nov 17-18 was intense - that's when #5375 happened
> - Early mornings on Nov 21 finishing up

---

```component:dual-bars
title: "But Here's What Was Really Happening"
subtitle: "Commits vs Coding Hours"
data: [{"date":"2025-11-12","commits":17,"hours":11.53},{"date":"2025-11-13","commits":16,"hours":12.53},{"date":"2025-11-14","commits":14,"hours":12.86},{"date":"2025-11-15","commits":7,"hours":6.09},{"date":"2025-11-16","commits":5,"hours":7.27},{"date":"2025-11-17","commits":30,"hours":10.53},{"date":"2025-11-18","commits":30,"hours":13.58},{"date":"2025-11-19","commits":14,"hours":11.41},{"date":"2025-11-20","commits":27,"hours":8.89},{"date":"2025-11-21","commits":10,"hours":9.33}]
y_primary: "hours"
y_secondary: "commits"
y_label: "Hours"
primary_label: "Coding Hours"
secondary_label: "Commits"
primary_opacity: 0.3
secondary_opacity: 0.6
```

> notes:
>
> - Coding ALL DAY, not just evenings
> - Peak: Nov 18 = 13.6 hours
> - Average: 10.4h per day
> - The commits show WHEN I shipped, not when I worked

---

# AI Didn't Make This Fast

It Made Impossible Work Possible

> notes:
>
> - Not quick AI fixes
> - Sustained, iterative work with Claude all day
> - Evening commits = proven solutions in batches
> - This reinforces "Augmentation, Not Replacement"

---

```component:bullet-points
title: "PR #5361: Remove UI Package"
points: ["377 files changed", "60 hours of coding", "12,225 lines added", "9,020 lines deleted", "The enabler for everything else"]
```

---

```component:github-diffstat
title: "PR #5361: The Numbers"
added: 12225
deleted: 9020
files: 377
commits: 30
```

---

```component:unlock-chain
title: "The Unlock Chain"
items: ["#5361|Remove UI", "#5375|shadcn-svelte", "#5381|Auth optimization"]
```

---

```component:bullet-points
title: "PR #5375: Vanilla shadcn-svelte"
points: ["With UI package gone, could standardize", "364 files changed", "24 hours", "37 commits in under a day"]
```

---

```component:bullet-points
title: "PR #5381: The Dream Refactor"
points: ["18 months in the making", "Finally possible with clean foundation", "122 files, 54 commits, 43 hours", "Auth optimization with remote functions"]
```

---

```component:bullet-points
title: "Before vs After"
points: ["Before: Blocked by legacy UI package for 18 months", "Before: Custom styling scattered everywhere", "After: Vanilla shadcn-svelte components", "After: Performance optimizations finally possible"]
```

---

```component:bullet-points
title: "Time Freed = Time Earned"
points: ["Foundation work finished", "Room to tackle performance", "The stuff I actually wanted to do"]
```

---

```component:bullet-points
title: "Performance Wins"
points: ["Auth optimization with remote functions", "Session caching reducing DB round trips", "Progressive loading for agent data", "Tab-based lazy loading"]
```

---

```component:big-stat
number: "875"
label: "files changed"
sublabel: "180 commits (123 work + 57 personal) in 10 days"
color: "text-green-400"
```

---

```component:github-diffstat
title: "Total Impact"
added: 25477
deleted: 19733
files: 875
commits: 123
```

---

```component:bullet-points
title: "What This Actually Means"
points: ["AI didn't replace me", "It enabled work at inhuman scale", "I focused on decisions, not drudgery"]
```

---

```component:bullet-points
title: "Augmentation, Not Replacement"
points: ["I made all the architectural decisions", "Claude handled the tedious execution", "Still needed to understand every fix", "But didn't have to type it all manually"]
```

---

```component:stat-comparison
title: "Same 10 Days"
stats: ["74.5h|Work refactor|text-blue-400", "20.8h|Personal projects|text-green-400"]
```

> notes:
>
> - This is the meta story
> - Not just using AI, but improving how to use AI
> - Work refactor AND personal projects in parallel

---

```component:area-chart
title: "The 10-Day Grind"
subtitle: "Work refactor vs Personal projects"
data: [{"date":"2025-11-12","work":9.3,"personal":2.23},{"date":"2025-11-13","work":7.46,"personal":5.08},{"date":"2025-11-14","work":10.22,"personal":2.63},{"date":"2025-11-15","work":0.09,"personal":5.96},{"date":"2025-11-16","work":0,"personal":7.27},{"date":"2025-11-17","work":9.24,"personal":1.29},{"date":"2025-11-18","work":13.45,"personal":0.13},{"date":"2025-11-19","work":10.88,"personal":0.52},{"date":"2025-11-20","work":8.57,"personal":0.32},{"date":"2025-11-21","work":5.39,"personal":3.95}]
series: [{"key":"work","color":"var(--color-primary)","label":"xo-monorepo"},{"key":"personal","color":"var(--color-secondary)","label":"Personal projects"}]
fill_opacity: 0.4
show_tooltip: true
show_highlight: true
stats: [{"label":"Total","value":"104h"},{"label":"Average","value":"10.4h/day"},{"label":"Peak","value":"13.6h"}]
```

> notes:
>
> - Same data as bar chart, different visualization
> - Shows the parallel nature of work and personal projects

---

```component:histogram
title: "Peak Productivity Hours"
subtitle: "Distribution of 180 commits by hour"
data: [13,17,18,19,19,19,19,19,19,21,21,21,21,21,22,22,22,7,7,9,9,9,10,10,10,12,12,12,13,13,13,14,14,21,21,21,22,22,22,22,22,22,22,22,22,23,23,8,12,12,12,12,14,20,19,19,19,20,20,11,11,11,11,11,11,12,17,17,18,18,18,18,19,19,19,19,20,20,20,20,20,20,21,22,22,22,22,23,23,7,8,8,9,9,11,11,11,12,12,12,15,15,16,16,17,17,18,18,18,18,18,18,18,19,19,19,19,19,20,20,20,20,20,20,22,22,7,8,9,10,14,14,14,14,16,16,17,19,20,21,21,21,21,7,7,16,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,21,21,21,22,22,23,23,11,12,12,16,16,17,17,17,18,22]
thresholds: 18
color: "var(--color-warning)"
```

> notes:
>
> - Clear peaks in evening hours (19:00-22:00)
> - Some early morning sessions (6-8am)
> - Lunch breaks visible (fewer commits at 13:00)

---

```component:bullet-points
title: "Building Better Workflows"
points: ["Skill evaluation framework (Nov 13)", "Cost calculator and metrics tracker", "Hook system for reliable skill activation (Nov 15)", "Testing what makes Claude work consistently"]
```

> notes:
>
> - svelte-claude-skills repo
> - Measuring activation rates, quality of outputs
> - Finding patterns that work vs don't

---

# Don't trust it!

> notes:
>
> - alignment this is why only 50 lines at a time
> - Session limits in Claude
> - Constantly verifying outputs

---

```component:simple-timeline
title: "The Blog Post"
events: ["Nov 13|Built eval framework", "Nov 15|Created hook system", "Nov 16|Published|highlight", "Nov 22|4.5k readers"]
```

> notes:
>
> - Shared what I learned about making Claude reliable
> - People clearly wanted this information
> - Community hungry for practical AI workflows

---

```component:bullet-points
title: "The Real Unlock"
points: ["AI accelerated my work", "Understanding AI made it reliable", "Sharing knowledge amplified impact", "875 files + viral blog post = same 10 days"]
```

---

```component:key-takeaways
title: "Impact Summary"
points: ["AI handles tedious work so you focus on interesting problems", "Large-scale refactors become manageable with the right tools", "Building reliable workflows beats one-off solutions"]
```

---

```component:thank-you
title: "Thank You!"
subtitle: "Questions?"
links: ["🌐 scottspence.com", "🦋 @scottspence.dev", "💻 github.com/spences10"]
```
