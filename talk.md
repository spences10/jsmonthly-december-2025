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

It _was_ 370 files in 11 hours, but I hadn't finished! 😅

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
> - I'll be discussing some of the approaches I took
> - Both the good and the bad
> - Let's establish some credibility first

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
> - Here's a hint of the initial problem

---

```component:bluesky-embed

```

---

```component:bullet-points
title: "The Setup"
points: ["Monorepo with legacy UI package", "Dependency mismatch causing cascade of errors", "svelte-check spitting out thousands of lines"]
```

> notes:
>
> - ui package was ok my making

---

```component:bullet-points
title: "The decoupling"
points: ["Remove ui dependency", "Run svelte-check", "Proffit??"]
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

```component:bullet-points
title: "The Workflow: Batch Processing"
points: ["Created svelte-check.md tracking file", "Take top 50 errors", "Paste to Claude → apply fixes", "Delete those lines, repeat", "33 iterations in one session"]
```

> notes:
>
> - Not random fixes - systematic elimination
> - Tracking file kept state between sessions
> - 'do NOT run svelte-check!' - manual tracking only
> - Pattern emerged: batch size matters

---

# The 16.5 Hour Marathon

Nov 12-13: One continuous session, 33 conversations

> notes:
>
> - Started evening of Nov 12
> - Went through the night
> - Ended afternoon Nov 13
> - This wasn't AI making it fast - this was AI making it POSSIBLE
> - Human couldn't maintain focus on 2,847 errors
> - But 50 at a time? Manageable

---

```component:bullet-points
title: "Quality Control During Marathon"
points: ["'Skill(research) for svelte 5 runes'", "Ensure correct implementation", "NOT pattern matching", "Research before every fix"]
```

> notes:
>
> - Even in marathon mode, quality mattered
> - Used research skill to verify Svelte 5 patterns
> - Avoid blindly applying fixes
> - Understand each change

---

```component:github-diffstat
title: "PR #5361: The Numbers"
added: 12225
deleted: 9020
files: 377
commits: 20
```

---

```component:punch-card
title: "PR #5361: When It Happened"
subtitle: "Nov 12-17: 30 commits over 4.6 days"
data: [{"date":"2025-11-12","hour":21,"count":5},{"date":"2025-11-12","hour":22,"count":3},{"date":"2025-11-13","hour":7,"count":2},{"date":"2025-11-13","hour":10,"count":1},{"date":"2025-11-13","hour":12,"count":3},{"date":"2025-11-13","hour":13,"count":3},{"date":"2025-11-13","hour":14,"count":2},{"date":"2025-11-14","hour":21,"count":3},{"date":"2025-11-14","hour":22,"count":3},{"date":"2025-11-15","hour":8,"count":3},{"date":"2025-11-15","hour":9,"count":1},{"date":"2025-11-17","hour":10,"count":1},{"date":"2025-11-17","hour":11,"count":2}]
hour_range: [6, 24]
```

> notes:
>
> - The marathon: Nov 12 evening through Nov 13 afternoon
> - 16.5 hours shown in the punch card
> - Late night commits = fixing batches of 50 errors

---

```component:dual-bars
title: "PR #5361: Work vs Commits"
subtitle: "Coding hours vs shipped commits"
data: [{"date":"2025-11-12","commits":8,"hours":11.53},{"date":"2025-11-13","commits":7,"hours":12.53},{"date":"2025-11-14","commits":6,"hours":12.86},{"date":"2025-11-15","commits":3,"hours":6.09},{"date":"2025-11-16","commits":0,"hours":7.27},{"date":"2025-11-17","commits":6,"hours":10.53}]
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
> - Nov 12-13: Marathon coding, 8+7 commits
> - Nov 14: Still high hours (12.86h), fewer commits as work got
>   harder
> - Nov 16: 7.27h coding but 0 commits (working on personal projects)
> - Total: 60.81 hours across this PR

---

```component:unlock-chain
title: "The Unlock Chain"
items: ["#5361|Remove UI", "#5375|shadcn-svelte", "#5381|Performance", "#5397|Polish"]
```

---

# The Disaster

"you did fucking what? that ui package is the old svelte 4 fucking
implementation!"

> notes:
>
> - Claude migrated 160 files to the WRONG shadcn-svelte version
> - Had to revert everything and start over
> - This is why you verify AI outputs!

---

```component:bullet-points
title: "PR #5375: Vanilla shadcn-svelte (Take 2)"
points: ["Reverted the disaster, started fresh", "364 files changed", "24 hours", "37 commits (after disaster recovery)", "Route-by-route quality validation"]
```

---

```component:bullet-points
title: "The Workflow: Route-by-Route Validation"
points: ["Different from #5361's batch processing", "Visit each route in browser", "Check against official shadcn-svelte docs", "Verify tokens, contrast, dark mode", "No 'good enough' - authentic or nothing"]
```

> notes:
>
> - After the disaster, trust but verify EVERYTHING
> - 15 routes: /quality, /evals, /reporting, /agent-view,
>   /smart-agents, /login, etc.
> - Constant questions: "is that vanilla schadcn-svelte?"
> - "doesn't feel very schadcn-svelte" → research and fix
> - Visual validation, not just compile errors

---

```component:bullet-points
title: "Quality Enforcement Philosophy"
points: ["'are they vanilla schadcn-svelte?'", "'is that correct against official docs?'", "15 routes systematically validated", "No shortcuts, no 'good enough'"]
```

> notes:
>
> - Quote: "implement shadcn-svelte into the implementation, not the
>   other way around"
> - Found components "pretending to be shadcn-svelte"
> - Nav was "just a mishmash of things"
> - Strip it all, start authentic

---

```component:github-diffstat
title: "PR #5375: The Numbers"
added: 4776
deleted: 4528
files: 364
commits: 37
```

---

```component:punch-card
title: "PR #5375: When It Happened"
subtitle: "Nov 17-18: 37 commits in 1.5 days"
data: [{"date":"2025-11-17","hour":11,"count":4},{"date":"2025-11-17","hour":12,"count":1},{"date":"2025-11-17","hour":17,"count":2},{"date":"2025-11-17","hour":18,"count":4},{"date":"2025-11-17","hour":19,"count":4},{"date":"2025-11-17","hour":20,"count":6},{"date":"2025-11-17","hour":21,"count":1},{"date":"2025-11-17","hour":22,"count":4},{"date":"2025-11-17","hour":23,"count":2},{"date":"2025-11-18","hour":7,"count":1},{"date":"2025-11-18","hour":8,"count":2},{"date":"2025-11-18","hour":9,"count":2},{"date":"2025-11-18","hour":11,"count":3},{"date":"2025-11-18","hour":12,"count":3},{"date":"2025-11-18","hour":15,"count":2},{"date":"2025-11-18","hour":16,"count":2},{"date":"2025-11-18","hour":17,"count":2},{"date":"2025-11-18","hour":18,"count":7},{"date":"2025-11-18","hour":19,"count":5},{"date":"2025-11-18","hour":20,"count":6},{"date":"2025-11-18","hour":22,"count":2}]
hour_range: [6, 24]
```

> notes:
>
> - Nov 17: Started fresh after disaster, all day + evening
> - Nov 18: The PEAK day - 13.58 hours coding
> - Route by route validation throughout

---

```component:dual-bars
title: "PR #5375: Work vs Commits"
subtitle: "Post-disaster recovery sprint"
data: [{"date":"2025-11-17","commits":24,"hours":10.53},{"date":"2025-11-18","commits":30,"hours":13.58}]
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
> - Most intense 2 days of the entire 10-day period
> - Nov 18: 30 commits in a single day (peak productivity)
> - 13.58 hours = longest coding day
> - High commit rate because of systematic route-by-route approach

---

```component:bullet-points
title: "PR #5381: The Performance Crisis"
points: ["18 months in the making", "Finally possible with clean foundation", "122 files, 20 commits, 43 hours", "But first... a reckoning"]
```

---

# "I'm super pissed off with this slow loading"

Repeated across 5 sessions

> notes:
>
> - SvelteKit is super fast
> - But 3 years of accumulated rot
> - Time to strip everything

---

```component:bullet-points
title: "The Workflow: Performance Investigation"
points: ["Different from batch processing and validation", "Performance.now() timing around all hooks", "Wrote performance-logs.jsonl for analysis", "Read logs, identify bottlenecks, implement solutions"]
```

> notes:
>
> - Not fixing errors or validating UI
> - Scientific method: measure, identify, optimize
> - "let's add performance.now logging throughout"
> - Log rotation to avoid clogging devices
> - Made problems visible before solving them

---

```component:bullet-points
title: "The Bottleneck Discovery"
points: ["Systematic route investigation", "fetchAgents: 803ms ❌ (TOO SLOW)", "Total request: 2,838ms including render", "Solution: MongoDB database indexes"]
```

> notes:
>
> - parallelQueries: 221ms ✅ (acceptable)
> - fetchAgents: 803ms ❌ (THE PROBLEM)
> - Created database-indexes.md documentation
> - Multiple indexes needed for optimization

---

```component:github-diffstat
title: "PR #5381: The Numbers"
added: 8269
deleted: 6054
files: 122
commits: 54
```

---

```component:punch-card
title: "PR #5381: When It Happened"
subtitle: "Nov 18-21: 54 commits over 3 days"
data: [{"date":"2025-11-18","hour":15,"count":2},{"date":"2025-11-18","hour":16,"count":2},{"date":"2025-11-18","hour":17,"count":2},{"date":"2025-11-18","hour":22,"count":2},{"date":"2025-11-19","hour":7,"count":1},{"date":"2025-11-19","hour":8,"count":1},{"date":"2025-11-19","hour":9,"count":1},{"date":"2025-11-19","hour":10,"count":1},{"date":"2025-11-19","hour":14,"count":4},{"date":"2025-11-19","hour":16,"count":2},{"date":"2025-11-19","hour":17,"count":1},{"date":"2025-11-19","hour":19,"count":1},{"date":"2025-11-19","hour":20,"count":1},{"date":"2025-11-19","hour":21,"count":4},{"date":"2025-11-20","hour":7,"count":2},{"date":"2025-11-20","hour":16,"count":1},{"date":"2025-11-20","hour":19,"count":12},{"date":"2025-11-20","hour":20,"count":5},{"date":"2025-11-20","hour":21,"count":3},{"date":"2025-11-20","hour":22,"count":2},{"date":"2025-11-20","hour":23,"count":2},{"date":"2025-11-21","hour":11,"count":1},{"date":"2025-11-21","hour":12,"count":2},{"date":"2025-11-21","hour":16,"count":2},{"date":"2025-11-21","hour":17,"count":3},{"date":"2025-11-21","hour":18,"count":1}]
hour_range: [6, 24]
```

> notes:
>
> - Nov 18 afternoon: started after #5375 completion
> - Nov 19: steady investigation and optimization
> - Nov 20: Big push (27 commits) - implementing solutions
> - Nov 21: final touches before wrapping up

---

```component:dual-bars
title: "PR #5381: Work vs Commits"
subtitle: "Performance investigation and optimization"
data: [{"date":"2025-11-18","commits":8,"hours":13.58},{"date":"2025-11-19","commits":14,"hours":11.41},{"date":"2025-11-20","commits":27,"hours":8.89},{"date":"2025-11-21","commits":9,"hours":9.33}]
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
> - Nov 18: overlapped with end of #5375 (13.58h total)
> - Nov 19: Investigation day (11.41h, steady commits)
> - Nov 20: Implementation day (27 commits, shipping solutions)
> - Nov 21: Wrapping up (9.33h)
> - Total: 43.21 hours across this PR

---

```component:bullet-points
title: "PR #5397: Layout Effect Refactor"
points: ["Quick polish pass", "7 commits, 9 hours", "Fixed loading states", "Wrapped components in TooltipProvider", "The cleanup after the big refactors"]
```

> notes:
>
> - Nov 21: wrapping up loose ends
> - Not every PR is a marathon
> - Sometimes you just need to tidy up
> - Added Spinner component for loading states

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
> - Remember the 160-file disaster? That's why verification matters
> - 50 lines at a time = manageable, verifiable chunks
> - Session limits force breaks = built-in verification points
> - Constantly checking outputs against real behavior

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

# Three Different Workflows

> notes:
>
> - PR #5361: Batch processing (systematic error elimination)
> - PR #5375: Route-by-route validation (visual quality enforcement)
> - PR #5381: Scientific investigation (measure, identify, optimize)
> - Each PR needed a different approach
> - AI adapted to the workflow, not the other way around

---

```component:bullet-points
title: "The Complete Picture"
points: ["4 work PRs across 10 days", "128 commits to production", "137 hours tracked (git duration)", "104 hours actual coding time", "Plus 57 personal commits"]
```

> notes:
>
> - Work: xo-monorepo refactor (74.5h)
> - Personal: svelte-claude-skills (20.8h), blog, other projects
> - Not just doing more - doing impossible work
> - While building better tools to do it

---

```component:github-diffstat
title: "Final Totals: Work Refactor"
added: 25477
deleted: 19733
files: 875
commits: 128
```

> notes:
>
> - This is just the work PRs
> - 6 PRs total (#5361, #5373, #5375, #5381, #5388, #5397)
> - Primary 4 PRs shown in detail today
> - The foundation for everything that follows

---

```component:big-stat
number: "180"
label: "total commits"
sublabel: "128 work + 57 personal across 10 days"
color: "text-purple-400"
```

> notes:
>
> - This is the full achievement
> - Professional AND personal growth
> - Refactoring at work
> - Building better AI tools at home
> - Publishing knowledge to community
> - All in parallel

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
> - The complete timeline across all 10 days

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
> - Full 10-day picture of work + personal combined

---

```component:key-takeaways
title: "Impact Summary"
points: ["AI handles tedious work so you focus on interesting problems", "Large-scale refactors become manageable with the right tools", "Building reliable workflows beats one-off solutions", "Different problems need different workflows"]
```

---

```component:thank-you
title: "Thank You!"
subtitle: "Questions?"
links: ["🌐 scottspence.com", "🦋 @scottspence.dev", "💻 github.com/spences10"]
```
