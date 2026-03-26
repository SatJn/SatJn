import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    href: "/music",
    label: "Music Album",
    description: "Listen to SW's latest album and explore the discography.",
    icon: "🎵",
  },
  {
    href: "/films",
    label: "Film Reviews",
    description: "SW's thoughts and ratings on the films he has watched.",
    icon: "🎬",
  },
  {
    href: "/books",
    label: "Book Reviews",
    description: "Reading notes and reviews from SW's bookshelf.",
    icon: "📚",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24 flex flex-col items-center gap-10 sm:flex-row sm:items-start">
        <div className="relative shrink-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-amber-200">
          <Image
            src="/sw.jpg"
            alt="SW"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Hi, I&apos;m SW
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-stone-600">
            Welcome to my personal corner of the internet. Here you can find my
            music, the films I have reviewed, and books I have been reading.
            Feel free to explore!
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {sections.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full bg-amber-700 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-800 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-8 text-2xl font-semibold text-stone-800">
          Explore
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {sections.map(({ href, label, description, icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-amber-300"
            >
              <span className="text-4xl">{icon}</span>
              <h3 className="text-lg font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
                {label}
              </h3>
              <p className="text-sm text-stone-500">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
