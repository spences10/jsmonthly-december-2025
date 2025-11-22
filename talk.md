<!-- component:title-slide title="How I Refactored 370 Files in 11 Hours" subtitle="(Thanks Claude)" name="Scott Spence" event="JSMonthly" date="December 2025" -->

---

<!-- component:image-caption src="$lib/assets/svelte_london_whatsapp_chat.png" alt="Svelte London WhatsApp chat" -->

---

# I lied!

On gathering the information for this talk, when I announced it, it
was 370, but I hadn't finished! 😅

---

# so!

How I Shipped 875 files, 128 commits, in 10 days (thanks Claude)

---

This is a story about how I used AI to massively accelerate a tedious,
repetitive refactor that would have taken me weeks to do manually.

---

## About Me

- Scott Spence
- SvelteKit TypeScript Developer
- Writer at scottspence.com
- Deep in the Claude Code ecosystem

> notes:
>
> - Mention working at company X
> - Been using Claude Code since early access

---

## The Setup

- Monorepo with legacy UI package
- Dependency mismatch causing cascade of errors
- svelte-check spitting out thousands of lines

---

## The CLI Output From Hell

<!-- component:terminal-output -->

---

## Why This Wasn't Fixable Manually

- 377 files affected
- Each fix could introduce new errors
- Time estimate: weeks of tedious work
- Human attention span: not built for this

---

## The Breakthrough

<!-- what made you realise there was a better way? -->

---

## The Loop

<!-- component:timeline-workflow -->

---

## Iteration Reality

- Session resets every few hours
- Context limits hit repeatedly
- 50 lines at a time = manageable chunks
- 30 commits over 4.6 days

---

## PR #5361: Remove UI Package

- 377 files changed
- 60 hours of coding
- 12,225 lines added
- 9,020 lines deleted
- The enabler for everything else

---

## The Unlock

<!-- component:unlock-timeline -->

---

## PR #5375: Vanilla shadcn-svelte

- With UI package gone, could standardize
- 364 files changed
- 24 hours
- 37 commits in under a day

---

## PR #5381: The Dream Refactor

- 18 months in the making
- Finally possible with clean foundation
- 122 files, 54 commits, 43 hours
- Auth optimization with remote functions

---

## Before vs After

<!-- component:before-after -->

---

## Time Freed = Time Earned

- Foundation work finished
- Room to tackle performance
- The stuff I actually wanted to do

---

## Performance Wins

<!-- list the concrete improvements from PR 5381 -->

---

## The Numbers

<!-- component:stats-animated -->

---

## What This Actually Means

- AI didn't replace me
- It enabled work at inhuman scale
- I focused on decisions, not drudgery

---

## Augmentation, Not Replacement

<!-- the human takeaway -->

---

## Impact Summary

<!-- component:key-takeaways -->

---

<!-- component:thank-you -->
