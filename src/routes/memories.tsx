import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Heart, Stickers } from "@/components/Decor";
import { photo } from "@/lib/photos";
import disco from "@/assets/disco.png";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Our Memory Box" },
      { name: "description", content: "A scattered collage of polaroids from our favourite days." },
      { property: "og:title", content: "Our Memory Box" },
      { property: "og:description", content: "A collage of polaroids from our favourite days." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Memories,
});

const tilts = [-6, 4, -3, 5, -4, 3];

function Memories() {
  return (
    <PageShell current="/memories">
      <h1 className="font-script text-center text-6xl text-ink md:text-8xl">Our Memory Box</h1>

      <div className="relative mt-6 flex items-center justify-center">
        <img
          src={disco}
          alt="A hanging disco ball"
          loading="lazy"
          width={640}
          height={640}
          className="w-36 select-none object-contain md:w-48"
        />
        <Stickers className="absolute -right-6 bottom-0 h-32 w-32" rotate={-20} />
      </div>

      <div className="mt-8 grid w-full max-w-6xl grid-cols-2 gap-7 sm:grid-cols-3">
        {tilts.map((t, i) => (
          <PhotoSlot
            key={i}
            id={`memory-${i}`}
            src={photo(i + 10)}
            alt="A memory of us"
            className="h-64 md:h-80"
            rotate={t}
          />
        ))}
      </div>

      <p className="font-hand mt-10 flex items-center justify-center gap-4 text-center text-3xl text-ink">
        <Heart className="h-5 w-5" />
        The wind carries many names, yet my heart only answers to yours.
        <Heart className="h-5 w-5" />
      </p>
    </PageShell>
  );
}