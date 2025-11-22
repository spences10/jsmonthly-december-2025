# How I Refactored 370 Files in 11 Hours

(Thanks Claude)

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

---

## The Setup

- Monorepo with legacy UI package
- Dependency mismatch causing cascade of errors
- svelte-check spitting out thousands of lines

---

## The CLI Output From Hell

<!-- screenshot or code block showing overwhelming error output -->

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

1. Run svelte-check
2. Export CLI output to file
3. Slice top 50 lines
4. Feed to Claude
5. Apply patches
6. Repeat

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

<!-- diagram: PR 5361 unlocked PR 5375 unlocked PR 5381 -->

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

- Before: "Maybe someday..."
- After: 10 days, done

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

- 875 files changed
- 128 commits
- 137 hours total
- 329 lines/hour throughput
- 4 PRs shipped

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

- Legacy UI package removed
- Components standardized on shadcn-svelte
- 18-month tech debt cleared
- Performance optimizations shipped
- All in 10 days

---

## Thanks!

<!-- contact info, links, questions -->
