import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Bow, Teddy } from "@/components/Decor";
import { photo } from "@/lib/photos";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A Love Letter For You" },
      { name: "description", content: "A handwritten-style love letter, kept safe on a page." },
      { property: "og:title", content: "A Love Letter For You" },
      { property: "og:description", content: "A handwritten-style love letter for you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Letter,
});

function Letter() {
  return (
    <PageShell current="/letter">
      <div className="mt-8 grid w-full max-w-6xl items-start gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col items-center gap-8">
         <p className="font-hand max-w-72 text-center text-2xl whitespace-pre-line text-ink/80">
  {`The moon has the sky; 
I have you.
The moon borrows its light; 
my heart borrowed yours.
If the moon could fall in love, 
I think it would look at you 
the way I do.`}
</p>
          <PhotoSlot
            id="letter-1"
            src={photo(9)}
            alt="Us together"
            className="h-[24rem] w-full max-w-sm"
            rotate={-3}
            caption="time passes , my love doesn't"
          />
          <div className="flex items-center gap-4">
            <Teddy className="h-32 w-32 md:h-44 md:w-44" rotate={-4} />
            <Bow className="h-16 w-16 md:h-24 md:w-24" rotate={12} />
          </div>
        </div>

        <article className="font-hand paper-card rounded-2xl p-9 text-3xl leading-relaxed text-ink">
          <p>"I fell for those pretty eyes"</p>
          <p className="mt-5">
            Jahan Pe Jaana Tu Wahan Khamoshi Kare Shor
Jahan Pe Jaanam Mein Wahan Afsurdah Ho Mizaaj
Haan Tujhe Leke Hoon Main Zara Sa Insecure
Kisi Ko Kaise Haasil Karne Doon Main Apna Khwaab
          </p>
          <p className="mt-5">
            We Should Wait For The Win Girl
Idhar Haar Jaana Theek Nahi
And This Life Would Have Been Simpler
Suni Jaati Jo Na Dil Ki
          </p>
          <p className="mt-5">
            
            And so, this little corner of the internet comes to an end, but my love for you doesn't. It will continue in the quiet mornings, in the late-night conversations, in every laugh we share, and in every hand we choose to hold. If years from now you ever find yourself reading these words again, I hope they remind you of one simple truth: you have always been, and will always be, one of the most beautiful things that ever happened to me. Until every sunset becomes a memory and every tomorrow becomes yesterday, I'll keep choosing you.
          </p>
          <p className="mt-5">I hope today makes you feel even a little of how much I love you. </p>
        </article>
      </div>
    </PageShell>
  );
}
