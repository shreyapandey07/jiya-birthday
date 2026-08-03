import { cn } from "@/lib/utils";
import bow from "@/assets/bow.png";
import teddy from "@/assets/teddy.png";
import stickers from "@/assets/stickers.png";

/** A strip of translucent washi tape, purely decorative. */
export function Tape({
  className,
  rotate = -6,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("tape pointer-events-none absolute h-6 w-24", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}

/** Decorative pink bow image. */
export function Bow({ className, rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <img
      src={bow}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width={640}
      height={640}
      className={cn("pointer-events-none select-none object-contain", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}

/** Small teddy peeking into the layout. */
export function Teddy({ className, rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <img
      src={teddy}
      alt="A teddy bear holding a heart"
      loading="lazy"
      width={768}
      height={768}
      className={cn("select-none object-contain drop-shadow-md", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}

/** Pressed-flower / butterfly sticker sheet, used as scattered decoration. */
export function Stickers({ className, rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <img
      src={stickers}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width={640}
      height={640}
      className={cn("pointer-events-none select-none object-contain opacity-90", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}

/** A soft heart made of CSS – no emoji. */
export function Heart({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("heart pointer-events-none block", className)} />;
}

/** Scattered ambient decoration layer for a page. */
export function PageDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Bow className="absolute left-2 top-24 h-16 w-16 opacity-90 md:left-10 md:h-24 md:w-24" rotate={-14} />
      <Bow className="absolute bottom-24 right-3 h-14 w-14 opacity-80 md:right-12 md:h-20 md:w-20" rotate={12} />
      <Stickers className="absolute -left-6 bottom-8 h-40 w-40 md:h-56 md:w-56" rotate={8} />
      <Stickers className="absolute -right-8 top-10 h-36 w-36 md:h-52 md:w-52" rotate={-160} />
      <Heart className="absolute left-1/4 top-16 h-4 w-4 opacity-70" />
      <Heart className="absolute right-1/4 bottom-16 h-6 w-6 opacity-60" />
      <Heart className="absolute right-8 top-1/2 h-3 w-3 opacity-70" />
    </div>
  );
}
