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

# I lied!

It was 370 files in 11 hours, but I hadn't finished! 😅

---

# so!

> notes:
>
> - This talk should be titled

---

```component:title-slide
title: "How I Refactored 875 files over 128 commits, in 10 days"
subtitle: "(Thanks Claude)"
```

> notes:
>
> - Doesn't really roll off the tongue does it

---

This is a story about how I used AI to massively accelerate a tedious,
repetitive refactor that would have taken me weeks to do manually.

---

```component:about-me
name: "Scott Spence"
title: "SvelteKit TypeScript Developer"
image: "$lib/assets/mug-face.png"
points:
  - Svelte LDN meetup organiser
  - Working with Svelte workshops
  - Application Team Lead
  - Dad 👨‍👩‍👧
  - Cat dad 😺
```

> notes:
>
> - Mention working at company XtendOps
> - Been using Claude Code since early access

---

```component:bullet-points
title: "The Setup"
points:
  - Monorepo with legacy UI package
  - Dependency mismatch causing cascade of errors
  - svelte-check spitting out thousands of lines
```

---

```component:bullet-points
title: "The CLI Output From Hell"
points:
  - svelte-check vomiting thousands of errors
  - Scroll... scroll... scroll... more errors
  - "Found 2,847 errors in 377 files"
  - Terminal buffer couldn't even hold it all
```

---

```component:bullet-points
title: "Why This Wasn't Fixable Manually"
points:
  - 377 files affected
  - Each fix could introduce new errors
  - Time estimate: weeks of tedious work
  - Human attention span: not built for this
```

---

```component:bullet-points
title: "The Breakthrough"
points:
  - "What if I just... fed the errors to Claude?"
  - Copy 50 lines of errors → paste → get fixes
  - It actually worked
  - Repeat until svelte-check passes
```

---

```component:bullet-points
title: "The Loop"
points:
  - Run svelte-check
  - Copy first 50 errors
  - Paste to Claude → get fixes
  - Apply fixes → commit
  - Repeat until green
```

---

```component:bullet-points
title: "Iteration Reality"
points:
  - Session resets every few hours
  - Context limits hit repeatedly
  - 50 lines at a time = manageable chunks
  - 30 commits over 4.6 days
```

---

```component:bullet-points
title: "PR #5361: Remove UI Package"
points:
  - 377 files changed
  - 60 hours of coding
  - 12,225 lines added
  - 9,020 lines deleted
  - The enabler for everything else
```

---

```component:bullet-points
title: "The Unlock"
points:
  - PR #5361 merged
  - Legacy UI package finally gone
  - Clean foundation to build on
  - Everything else became possible
```

---

```component:bullet-points
title: "PR #5375: Vanilla shadcn-svelte"
points:
  - With UI package gone, could standardize
  - 364 files changed
  - 24 hours
  - 37 commits in under a day
```

---

```component:bullet-points
title: "PR #5381: The Dream Refactor"
points:
  - 18 months in the making
  - Finally possible with clean foundation
  - 122 files, 54 commits, 43 hours
  - Auth optimization with remote functions
```

---

```component:bullet-points
title: "Before vs After"
points:
  - Before: Blocked by legacy UI package for 18 months
  - Before: Custom styling scattered everywhere
  - After: Vanilla shadcn-svelte components
  - After: Performance optimizations finally possible
```

---

```component:bullet-points
title: "Time Freed = Time Earned"
points:
  - Foundation work finished
  - Room to tackle performance
  - The stuff I actually wanted to do
```

---

```component:bullet-points
title: "Performance Wins"
points:
  - Auth optimization with remote functions
  - Session caching reducing DB round trips
  - Progressive loading for agent data
  - Tab-based lazy loading
```

---

```component:bullet-points
title: "The Numbers"
points:
  - 137 hours of coding
  - 128 commits across 4 PRs
  - 875 files changed
  - 10 days start to finish
  - +25,477 / -19,733 lines
```

---

```component:bullet-points
title: "What This Actually Means"
points:
  - AI didn't replace me
  - It enabled work at inhuman scale
  - I focused on decisions, not drudgery
```

---

```component:bullet-points
title: "Augmentation, Not Replacement"
points:
  - I made all the architectural decisions
  - Claude handled the tedious execution
  - Still needed to understand every fix
  - But didn't have to type it all manually
```

---

```component:bullet-points
title: "Meanwhile..."
points:
  - While doing the refactor at work...
  - I was also building tools to improve Claude workflows
  - Same 10 days, parallel tracks
```

> notes:
>
> - This is the meta story
> - Not just using AI, but improving how to use AI

---

```component:bullet-points
title: "Building Better Workflows"
points:
  - Skill evaluation framework (Nov 13)
  - Cost calculator and metrics tracker
  - Hook system for reliable skill activation (Nov 15)
  - Testing what makes Claude work consistently
```

> notes:
>
> - svelte-claude-skills repo
> - Measuring activation rates, quality of outputs
> - Finding patterns that work vs don't

---

```component:bullet-points
title: "The Blog Post"
points:
  - "Improving Claude Code Skills Activation Reliability"
  - Published Nov 16 (mid-refactor!)
  - 4,500 readers in 6 days
  - 11,100 views
```

> notes:
>
> - Shared what I learned about making Claude reliable
> - People clearly wanted this information
> - Community hungry for practical AI workflows

---

```component:bullet-points
title: "The Real Unlock"
points:
  - AI accelerated my work
  - Understanding AI made it reliable
  - Sharing knowledge amplified impact
  - 875 files + viral blog post = same 10 days
```

---

```component:key-takeaways
title: "Impact Summary"
points:
  - AI handles tedious work so you focus on interesting problems
  - Large-scale refactors become manageable with the right tools
  - Building reliable workflows beats one-off solutions
```

---

```component:thank-you
title: "Thank You!"
subtitle: "Questions?"
links:
  - 🌐 scottspence.com
  - 🦋 @scottspence.dev
  - 💻 github.com/spences10
```
