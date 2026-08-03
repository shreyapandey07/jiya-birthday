import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Bow, Heart, Stickers } from "@/components/Decor";
import { photo } from "@/lib/photos";
import bouquetImg from "@/assets/bouquet.png";

export const Route = createFileRoute("/bouquet")({
  head: () => ({
    meta: [
      { title: "A Bouquet For My Favourite Person" },
      { name: "description", content: "A scrapbook bouquet page with photos and little notes." },
      { property: "og:title", content: "A Bouquet For My Favourite Person" },
      { property: "og:description", content: "Flowers, photos and little notes for you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bouquet,
});

function Bouquet() {
  return (
    <PageShell current="/bouquet">
        <h1 className="font-script text-center text-6xl text-ink md:text-7xl">
      Every heartbeat has a reason.
      <span className="font-script block text-center text-3xl text-ink md:text-5xl">
        Mine just happens to be you. ❤️
      </span>
    </h1>
          <div className="mt-10 grid w-full max-w-6xl grid-cols-2 items-center gap-8 md:grid-cols-3">
        <PhotoSlot
          id="bouquet-1"
          src={photo(4)}
          alt="Us together"
          className="h-64 md:h-80"
          rotate={-4}
          caption="Still choosing you."
        />

        <div className="relative order-first col-span-2 flex items-center justify-center md:order-none md:col-span-1">
          <img
            src={bouquetImg}
            alt="A bouquet of pink and white roses"
            loading="lazy"
            width={768}
            height={768}
            className="w-72 select-none object-contain drop-shadow-lg md:w-96"
          />
          <Bow className="absolute -bottom-4 right-0 h-16 w-16 md:h-24 md:w-24" rotate={-10} />
          <Stickers className="absolute -left-10 -top-6 h-36 w-36" rotate={140} />
        </div>

        <PhotoSlot id="bouquet-2" src={photo(6)} alt="Us together" className="h-64 md:h-80" rotate={3} 
        caption="Found you. Kept you."/>
        <PhotoSlot id="bouquet-3" src={photo(7)} alt="Us together" className="h-64 md:h-80" rotate={2} 
        caption="Endlessly yours."/>

        <p className="font-hand flex flex-col items-center gap-3 px-2 text-center text-3xl text-ink">
          <Heart className="h-5 w-5" />
          “You are my sun, my moon, and all of my stars.”
        </p>

        <PhotoSlot id="bouquet-4" src={photo(8)} alt="Us together" className="h-64 md:h-80" rotate={-3} 
        caption="Just you."/>
      </div>
    </PageShell>
  );
}
