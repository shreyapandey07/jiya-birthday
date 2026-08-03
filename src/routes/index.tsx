import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Bow, Heart, Teddy } from "@/components/Decor";
import { photo } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "To My One and Only" },
      {
        name: "description",
        content:
          "A little pink-striped love note: letters, memories, a bouquet and gifts, all in one place.",
      },
      { property: "og:title", content: "To My One and Only" },
      {
        property: "og:description",
        content: "A little pink-striped love note: letters, memories, a bouquet and gifts, all in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell current="/">
      <div className="relative flex flex-col items-center">
        <Bow className="absolute -top-14 left-1/2 h-20 w-20 -translate-x-1/2 md:h-32 md:w-32" />
        <h1 className="font-script mt-8 text-center text-7xl leading-none text-ink md:text-[9rem]">
          I love you
        </h1>
      </div>

      <div className="relative mt-12 flex items-end justify-center">
        <PhotoSlot
          id="home-main"
          src={photo(1)}
          alt="Us together"
          label="add your favourite photo"
          className="h-[26rem] w-[22rem] md:h-[34rem] md:w-[28rem]"
          rotate={-2}
        />
        <Teddy className="-ml-12 h-36 w-36 md:-ml-20 md:h-56 md:w-56" rotate={6} />
      </div>

      <p className="font-hand mt-10 flex items-center gap-4 text-4xl text-ink md:text-5xl">
        <Heart className="h-5 w-5" />
        To my one and only
        <Heart className="h-5 w-5" />
      </p>
    </PageShell>
  );
}
