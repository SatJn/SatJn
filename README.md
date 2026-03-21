# SW – Personal Website

A minimal personal site for **SW**, built with [Next.js](https://nextjs.org/) (App Router) and [Tailwind CSS](https://tailwindcss.com/).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing / home page |
| `/music` | Music album links |
| `/films` | Film reviews |
| `/books` | Book reviews |

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18

### Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## How to update placeholder content

### Landing page photo

Replace `public/sw.jpg` with your own photo (keep the filename or update the `src` in `app/page.tsx`).

### Music album links

Open `app/music/page.tsx` and find the `albumLinks` array near the top of the file:

```ts
const albumLinks = [
  { label: "Spotify",      href: "#" },   // ← replace "#" with real URL
  { label: "Apple Music",  href: "#" },
  { label: "Bandcamp",     href: "#" },
  { label: "YouTube Music",href: "#" },
];
```

Replace each `"#"` with the real streaming URL.

### Film reviews

Open `app/films/page.tsx` and edit the `films` array:

```ts
const films = [
  { title: "My Favourite Film", rating: "★★★★★", note: "Amazing cinematography." },
  // add more entries here
];
```

### Book reviews

Open `app/books/page.tsx` and edit the `books` array:

```ts
const books = [
  { title: "Great Book", author: "Author Name", rating: "★★★★☆", note: "Loved the characters." },
  // add more entries here
];
```

---

## Project structure

```
app/
  layout.tsx        – shared HTML shell (font, metadata)
  globals.css       – global Tailwind styles
  page.tsx          – home / landing page
  music/page.tsx    – music album page
  films/page.tsx    – film reviews page
  books/page.tsx    – book reviews page
components/
  Header.tsx        – sticky navigation bar
  Footer.tsx        – page footer
public/
  sw.jpg            – landing page photo (replace with your own)
```
