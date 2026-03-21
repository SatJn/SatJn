import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music – SW",
  description: "SW's music album and discography.",
};

// TODO: Replace placeholder links with real album/streaming URLs
const albumLinks = [
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
  { label: "Bandcamp", href: "#" },
  { label: "YouTube Music", href: "#" },
];

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900">
        🎵 Music Album
      </h1>
      <p className="mb-10 text-lg text-stone-600">
        Check out SW&apos;s music below. Links are placeholders – update them in{" "}
        <code className="rounded bg-stone-100 px-1 py-0.5 text-sm">
          app/music/page.tsx
        </code>
        .
      </p>

      <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-stone-800">
          Latest Album
        </h2>
        <p className="mb-6 text-stone-500 italic">
          Album title placeholder – update this text with the real album name.
        </p>
        <ul className="flex flex-wrap gap-3">
          {albumLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="rounded-full border border-amber-300 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-800 hover:bg-amber-100 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
