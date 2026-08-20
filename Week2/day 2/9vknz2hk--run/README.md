# Badge & Sticky Header

A CSS-only mini-project for **Positioning & Display (LU 1.12)**. The page has a
header and a product card with a `NEW` label — but nothing is positioned yet.
Your job is to **pin the header to the top of the screen** and **tuck the badge
into the card's top-right corner**, using the `position` and `z-index`
properties you just learned.

## What you edit

You do **all** of your work in **`main.css`**. Do **not** edit `index.html`
(the markup is fixed) or the files under `tests/`. You may **not** use
`!important` — solve it with real positioning.

## The markup (already provided)

```html
<header class="site-header">Gadget Store</header>
<main class="page">
  <div class="card">
    <span class="badge">NEW</span>
    <h2>Wireless Buds</h2>
    <p>Crisp sound, tiny price. Our best deal of the week.</p>
  </div>
</main>
```

## Your tasks

1. Make `.card` a **positioning context** — `position: relative`.
2. Take `.badge` **out of flow** — `position: absolute`.
3. Tuck the badge into the **top-right corner** — set `top` and `right`.
4. Keep the badge **above** the card content — a positive `z-index`.
5. Pin the header to the screen — `position: fixed` with `top: 0`.
6. Keep the header **above** scrolling content — a positive `z-index`.
7. Remove the leftover `!important` in the starter — solve it honestly.

## How it's graded (10 tests)

Open `index.html` (the Jasmine Spec Runner). The specs read your `main.css`:

1. `.card` is `position: relative`
2. `.badge` is `position: absolute`
3. `.badge` has a `top` offset
4. `.badge` has a `right` offset
5. The badge/card positioning context is established (relative card + absolute badge)
6. `.badge` has a positive `z-index`
7. `.site-header` is `position: fixed`
8. `.site-header` has `top: 0`
9. `.site-header` has a positive `z-index`
10. No `!important` anywhere in `main.css`

All 10 pass when the header stays pinned and the badge sits in the card's corner.
