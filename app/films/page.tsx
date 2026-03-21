import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Film Reviews – SW",
  description: "SW's film reviews and ratings.",
};

// TODO: Replace with real film review entries
const films = [
  { title: "Film Title Placeholder 1", rating: "★★★★☆", note: "Review coming soon…" },
  { title: "Film Title Placeholder 2", rating: "★★★☆☆", note: "Review coming soon…" },
  { title: "Film Title Placeholder 3", rating: "★★★★★", note: "Review coming soon…" },
];

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900">
        🎬 Film Reviews
      </h1>
      <p className="mb-10 text-lg text-stone-600">
        SW&apos;s reviews and ratings of recently watched films. Edit the list in{" "}
        <code className="rounded bg-stone-100 px-1 py-0.5 text-sm">
          app/films/page.tsx
        </code>
        .
      </p>

      <ul className="flex flex-col gap-4">
        {films.map(({ title, rating, note }) => (
          <li
            key={title}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-stone-800">{title}</h2>
              <span className="text-amber-500">{rating}</span>
            </div>
            <p className="mt-2 text-sm text-stone-500 italic">{note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
