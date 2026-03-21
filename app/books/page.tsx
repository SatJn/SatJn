import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Reviews – SW",
  description: "SW's book reviews and reading notes.",
};

// TODO: Replace with real book review entries
const books = [
  { title: "Book Title Placeholder 1", author: "Author Name", rating: "★★★★☆", note: "Review coming soon…" },
  { title: "Book Title Placeholder 2", author: "Author Name", rating: "★★★★★", note: "Review coming soon…" },
  { title: "Book Title Placeholder 3", author: "Author Name", rating: "★★★☆☆", note: "Review coming soon…" },
];

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900">
        📚 Book Reviews
      </h1>
      <p className="mb-10 text-lg text-stone-600">
        SW&apos;s reading notes and reviews. Edit the list in{" "}
        <code className="rounded bg-stone-100 px-1 py-0.5 text-sm">
          app/books/page.tsx
        </code>
        .
      </p>

      <ul className="flex flex-col gap-4">
        {books.map(({ title, author, rating, note }) => (
          <li
            key={title}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-stone-800">{title}</h2>
                <p className="text-sm text-stone-500">{author}</p>
              </div>
              <span className="shrink-0 text-amber-500">{rating}</span>
            </div>
            <p className="mt-2 text-sm text-stone-500 italic">{note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
