import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Bow, Heart, PageDecor, Stickers, Teddy } from "@/components/Decor";
import { photo } from "@/lib/photos";
import giftBlue from "@/assets/gift-blue.png";
import gift2 from "@/assets/gift-2.png";
import gift3 from "@/assets/gift-3.png";

const gifts = [
  {
    id: "one",
    title: "gift one",
    image: giftBlue,
    tilt: -5,
    size: "w-full max-w-[19rem] md:max-w-[22rem]",
    heading: "Finding all the reasons I fell for you... ❤️",
    layout: "letter-left" as const,
 letter: [
  `If someone asked me when I started loving you, I wouldn't know the exact day.
Maybe it was hidden in the conversations that lasted longer than planned.
Maybe it was in the way you made ordinary moments feel extraordinary.
Or maybe my heart had already chosen you long before I realized it.`,

  `Every single day with you feels like a small festival — the kind with fairy lights, music and too much cake.`,

  `If my life were a sky,
you'd be the star
my eyes search for every night.

If my heart were a book,
every page would whisper your name.

And if forever exists,
I hope it finds us together.`,

`Forever,
Your biggest admirer. ❤️`,
],
    note: "redeemable coupon: one whole day of celebrating you nd only you.",
  },
  {
    id: "two",
    title: "gift two",
    image: gift2,
    tilt: 0,
    size: "w-full max-w-[22rem] md:max-w-[26rem]",
    heading: `One I love you for every time
I couldnt tell you !`,
    layout: "letter-center" as const,
    letter: [
      "To the person who annoys me the most but i still miss when not around!",
      "I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you",
      "AND SOME FOR THE FUTURE (HAHA)",
      " I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you I love you",
      "No grand gestures just HUNDREDS little reasons."
    ],
    note: [
      "coupon code : unlimited hugs  warranty : lifetime",

      
    ],
  },
  {
    id: "three",
    title: "gift three",
    image: gift3,
    tilt: 6,
    size: "w-full max-w-[20rem] md:max-w-[24rem]",
    heading: "a whole day where we do only what you want",
    layout: "letter-right" as const,
    letter: [
  `I don’t think I say this enough in the right way.

Not the “I love you” we throw around casually,
but the quiet kind that sits underneath everything.

The kind that shows up in the way I look for you in every crowd,
or how my mood changes depending on how your day went`,

  `If I could rewrite one chapter of our story, it wouldn't be to erase every mistake.
It would be to remind us that we were always on the same side.
Sometimes we forgot that.
Sometimes my frustration became louder than my love.
For that, I'm truly sorry.
You have never been my opponent.

You have always been my favorite person.`,

  `You deserve patience, kindness, and a love that feels safe.
I'm still learning how to give you all of that.`,

  `Yours Babe 
and you are mine betu`,
],
    note: "voucher: one day, your rules",
  },
];

export const Route = createFileRoute("/surprise")({
  head: () => ({
    meta: [
      { title: "Pick Your Little Surprise" },
      { name: "description", content: "Choose one of three gift boxes and open a whole love letter." },
      { property: "og:title", content: "Pick Your Little Surprise" },
      { property: "og:description", content: "Three gift boxes, a full love letter inside each." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Surprise,
});

function Surprise() {
  const [opened, setOpened] = useState<number | null>(null);

  if (opened !== null) {
    const gift = gifts[opened]!;
    return <GiftPage gift={gift} onClose={() => setOpened(null)} />;
  }

  return (
    <PageShell current="/surprise">
      <h1 className="font-script text-center text-6xl text-ink md:text-8xl">
        Pick your little surprise
      </h1>

      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 items-end gap-12 sm:grid-cols-3">
        {gifts.map((gift, i) => (
          <button
            key={gift.id}
            onClick={() => setOpened(i)}
            aria-label={`Open ${gift.title}`}
            className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-3"
          >
            <img
              src={gift.image}
              alt=""
              loading="lazy"
              width={768}
              height={768}
              className={`${gift.size} select-none object-contain drop-shadow-[0_22px_28px_oklch(0.4_0.08_350_/_35%)]`}
              style={{ transform: `rotate(${gift.tilt}deg)` }}
            />
            <span className="font-hand text-2xl text-ink/70 group-hover:text-primary">
              tap to open
            </span>
          </button>
        ))}
      </div>
    </PageShell>
  );
}

function GiftPage({
  gift,
  onClose,
}: {
  gift: (typeof gifts)[number];
  onClose: () => void;
}) {
  const photoBlock = (
    <div className="flex flex-col items-center gap-7">
      <PhotoSlot
        id={`gift-${gift.id}`}
        src={photo(gift.id === "one" ? 14 : gift.id === "two" ? 3 : 4)}
        alt="Us together"
        className="h-[28rem] w-full max-w-sm"
        rotate={-3}
        caption="The way my heart smiles
every time it thinks of you."
      />
      <div className="flex items-center gap-5">
        <Teddy className="h-36 w-36 md:h-48 md:w-48" rotate={-5} />
        <Bow className="h-28 w-28 md:h-28 md:w-28" rotate={10} />
      </div>
    </div>
  );

  const letterBlock = (
    <div className="relative">
      <Stickers className="absolute -right-8 -top-10 h-46 w-46" rotate={-30} />
      <article className="font-hand paper-card relative rounded-2xl p-9 text-3xl leading-relaxed text-ink">
        {gift.letter.map((line, i) => (
          <p key={i} className={i === 0 ? "" : "mt-5"}>
            {line}
          </p>
        ))}
        <p className="mt-5 flex items-center gap-3">
          <Heart className="h-5 w-5" />
        </p>
      </article>
      <p className="font-hand mt-6 flex items-center justify-center gap-4 text-2xl text-ink/70">
        <Heart className="h-4 w-4" />
        {gift.note}
        <Heart className="h-4 w-4" />
      </p>
    </div>
  );

  return (
    <div className="stripes relative flex min-h-screen flex-col">
      <PageDecor />

      <header className="relative z-10 flex justify-end px-6 py-4 md:px-12">
        <button
          onClick={onClose}
          className="font-hand text-2xl text-ink/70 transition-colors hover:text-primary"
        >
          &lt;&lt; back to the gifts
        </button>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center px-5 pb-14 md:px-10">
        <img
          src={gift.image}
          alt=""
          loading="lazy"
          width={768}
          height={768}
          className="w-32 select-none object-contain md:w-40"
          style={{ transform: `rotate(${gift.tilt}deg)` }}
        />
        <h1 className="font-script mt-4 text-center text-5xl text-ink md:text-7xl">{gift.heading}</h1>

        {gift.layout === "letter-center" ? (
          <div className="mt-10 flex w-full max-w-3xl flex-col items-center gap-10">
            {letterBlock}
            {photoBlock}
          </div>
        ) : gift.layout === "letter-left" ? (
          <div className="mt-10 grid w-full max-w-6xl items-start gap-10 md:grid-cols-[1.2fr_1fr]">
            {letterBlock}
            {photoBlock}
          </div>
        ) : (
          <div className="mt-10 grid w-full max-w-6xl items-start gap-10 md:grid-cols-[1fr_1.2fr]">
            {photoBlock}
            {letterBlock}
          </div>
        )}
      </main>
    </div>
  );
}