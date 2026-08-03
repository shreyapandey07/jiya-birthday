import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Bow, Heart } from "@/components/Decor";
import cautionSign from "@/assets/caution-sign.png";

export const Route = createFileRoute("/caution")({
  head: () => ({
    meta: [
      { title: "Caution — You Might Be Falling In Love" },
      { name: "description", content: "A playful floor caution sign before the surprise begins." },
      { property: "og:title", content: "Caution — You Might Be Falling In Love" },
      { property: "og:description", content: "A playful warning before the love surprise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Caution,
});

function Caution() {
  return (
    <PageShell current="/caution">
      <div className="relative w-[22rem] rotate-[-2deg] md:w-[34rem]">
        <img
          src={cautionSign}
          alt="Yellow folding floor caution sign"
          width={768}
          height={768}
          className="w-full select-none object-contain drop-shadow-xl"
        />

        <div className="absolute inset-x-[27%] top-[35%] flex flex-col items-center text-center">
          <p className="font-hand text-lg font-bold uppercase tracking-[0.15em] text-[oklch(0.2_0.02_60)] md:text-4xl">
            Caution
          </p>
          <span className="heart my-2 h-6 w-6 md:my-4 md:h-12 md:w-12" aria-hidden="true" />
          <p className="font-hand text-lg leading-tight text-[oklch(0.2_0.02_60)] md:text-3xl">
            you might be
            <br />
            falling in love
          </p>
        </div>


        <Bow className="absolute -right-8 top-4 h-20 w-20 md:h-28 md:w-28" rotate={16} />
      </div>
    </PageShell>
  );
}
