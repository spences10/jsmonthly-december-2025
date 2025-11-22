# Markdown Format for Slides

## Basic Structure

Separate slides with `---`:

```markdown
# Title Slide
(subtitle in parentheses)

---

## Content Slide

- bullet point
- another bullet

---

## Numbered List

1. First item
2. Second item
```

## What Gets Converted

| Markdown | Output |
|----------|--------|
| `# Heading` | Big centered h1 (title slides) |
| `## Heading` | Section h2 |
| `- item` | Unordered list with styling |
| `1. item` | Ordered list with styling |
| `(text)` | Subtitle styling (smaller, opacity) |
| Plain text | Paragraph |

## Comments for Placeholders

Use HTML comments for things to fill in later:

```markdown
## My Slide

<!-- TODO: add screenshot here -->
```

The script preserves these in the output.

## Limitations

The script only handles basic markdown. For fancy stuff (animations, code blocks, embeds), create custom slides manually.
