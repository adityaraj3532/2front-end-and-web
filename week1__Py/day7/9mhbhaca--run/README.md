# Brand Restyle

## Problem Statement

You're handed a plain, unstyled page — a heading, some text, and a button — for a meetup called **Chai & Code**. The HTML is fine. What's missing is a *look*: a colour palette that agrees with itself, comfortable web-font typography, and text sized in units that respect the reader.

Your job is to **restyle the page using CSS only**. You will not change the HTML markup. You'll build a small design system in `main.css` — a palette of CSS custom properties, a web-font stack, and `rem`-based type — and reuse the palette with `var(--...)`.

## Tasks

Work entirely in **`main.css`** (plus, optionally, one font `<link>` in the `<head>` of `index.html`):

1. **Define a palette.** Create a `:root` rule with **at least 3 colour custom properties** (for example `--brand`, `--accent`, `--ink`). Use hex, `rgb()`, or `hsl()` values.
2. **Style the `body`.** Give it a **`font-family` stack** (a preferred font plus at least one fallback ending in a generic family like `sans-serif`), a **`font-size` in `rem`**, and a text **`color`** taken from your palette with `var(--...)`.
3. **Style the headings.** Give **`h1` a `font-size` in `rem`** and set a heading's **`color`** using a palette variable.
4. **Reuse the palette.** Style the `.cta` button's **`background`** with a palette variable. Across the whole file, `var(--...)` must appear **at least twice**.

> Optional but recommended: add a real web font by pasting its Google Fonts `<link>` into the `<head>` (the one change allowed there), then naming it first in your `body` font-family stack.

## Instructions

1. Open the project. All your work happens in **`main.css`**.
2. Open **`index.html`** — this is the **Jasmine Spec Runner**. It shows each test as **green (passing)** or **red (failing)**.
3. Edit `main.css`, save, and refresh `index.html`. Watch red specs turn green as you complete each task.
4. Do **not** edit the page markup in the `<body>` or the test file.

## Test Cases

Ten checks run automatically in the Spec Runner (1 mark each):

1. A `:root` rule exists for the palette.
2. `:root` declares at least **3 custom properties**.
3. At least **3** of those custom properties hold **colour** values (hex / `rgb()` / `hsl()`).
4. `body` has a `font-family`.
5. `body`'s `font-family` is a **stack** (has a fallback after a comma).
6. `body`'s `font-size` uses **`rem`**.
7. `h1`'s `font-size` uses **`rem`**.
8. The palette is referenced with **`var(--...)` at least twice**.
9. A **text `color`** uses a palette variable.
10. A **`background`** uses a palette variable.

## Submission Guidelines

- Make **all 10 specs green** in the Jasmine Spec Runner.
- Keep the page markup and the test file unchanged — only `main.css` (and an optional font `<link>`) should differ.
- Commit and submit your work as instructed on the platform.
