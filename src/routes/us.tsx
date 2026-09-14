import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Bow, Heart } from "@/components/Decor";
import { photo } from "@/lib/photos";
import penguins from "@/assets/penguins.png";

export const Route = createFileRoute("/us")({
  head: () => ({
    meta: [
      { title: "You Are My One And Only" },
      { name: "description", content: "The last page: just us, two penguins, and a restart button." },
      { property: "og:title", content: "You Are My One And Only" },
      { property: "og:description", content: "The last page: just us, and a restart button." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Us,
});

function Us() {
  return (
    <PageShell current="/us">
      <p className="font-hand paper-card mt-8 flex items-center gap-4 rounded-2xl px-7 py-3 text-3xl text-ink">
        <Heart className="h-5 w-5" />
        "The End, but never the end of us. ❤️🌙"
      </p>

      <img
        src={penguins}
        alt="Two penguins holding flippers"
        loading="lazy"
        width={1024}
        height={768}
        className="mt-4 w-72 select-none object-contain md:w-[26rem]"
      />

      <div className="relative mt-6 flex items-end">
        <PhotoSlot
          id="us-main"
          src={photo(0)}
          alt="Us together"
          label="add our photo"
          className="h-[24rem] w-[20rem] md:h-[30rem] md:w-[26rem]"
          rotate={-2}
        />
        <Bow className="absolute -left-8 -top-10 h-20 w-20 md:h-28 md:w-28" rotate={-14} />
      </div>
    </PageShell>
  );
}
