import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Bow, Heart, Teddy } from "@/components/Decor";

export const Route = createFileRoute("/love")({
  head: () => ({
    meta: [
      { title: "Love You More" },
      { name: "description", content: "A reverse card that always wins: love you more." },
      { property: "og:title", content: "Love You More" },
      { property: "og:description", content: "A reverse card that always wins: love you more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Love,
});

function Love() {
  return (
    <PageShell current="/love">
      <div className="relative mt-10 flex items-end">
        <div className="paper-card flex h-80 w-56 rotate-[3deg] flex-col items-center justify-center rounded-2xl border-8 border-card bg-accent">
          <span className="font-hand text-5xl leading-none text-accent-foreground">I love</span>
          <div className="my-3 flex items-center gap-2">
            <Heart className="h-6 w-6" />
            <Heart className="h-8 w-8" />
            <Heart className="h-6 w-6" />
          </div>
          <span className="font-hand text-5xl leading-none text-accent-foreground">you</span>
          <span className="font-hand text-5xl leading-none text-accent-foreground">more</span>
          <span className="font-hand text-5xl leading-none text-accent-foreground">smjhe?</span>
        </div>
        <Bow className="absolute -left-8 -top-6 h-16 w-16 md:h-20 md:w-20" rotate={-18} />
        <Teddy className="-ml-8 h-28 w-28 md:h-36 md:w-36" rotate={8} />
      </div>
    </PageShell>
  );
}
