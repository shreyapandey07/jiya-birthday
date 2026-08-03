import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Tape } from "@/components/Decor";

const KEY = (id: string) => `photo-slot:${id}`;

/**
 * A taped photo frame you can fill yourself.
 * Click the frame (or "change photo") to pick an image from your device –
 * it is remembered in this browser, so no code changes needed.
 */
export function PhotoSlot({
  id,
  label = "tap to add your photo",
  className,
  rotate,
  caption,
  src,
  alt = "",
  tape = true,
  fit = "cover",
}: {
  /** Stable id so your chosen photo is remembered for this exact frame. */
  id: string;
  label?: string;
  className?: string;
  rotate?: number;
  caption?: string;
  src?: string;
  alt?: string;
  tape?: boolean;
  fit?: "cover" | "contain";
}) {
  const [custom, setCustom] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      setCustom(window.localStorage.getItem(KEY(id)));
    } catch {
      /* ignore */
    }
  }, [id]);

  const onPick = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const data = String(reader.result);
      setCustom(data);
      try {
        window.localStorage.setItem(KEY(id), data);
      } catch {
        /* storage full – photo still shows for this visit */
      }
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    setCustom(null);
    try {
      window.localStorage.removeItem(KEY(id));
    } catch {
      /* ignore */
    }
  };

  const shown = custom ?? src;

  return (
    <figure
      className={cn("paper-card group relative rounded-sm p-3 pb-8", className)}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {tape && <Tape className="-top-4 left-1/2 -ml-14" rotate={-5} />}

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        aria-label={shown ? "Change this photo" : "Add a photo"}
        className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted text-center"
      >
        {shown ? (
          <img
            src={shown}
            alt={alt}
            loading="lazy"
            className={cn("h-full w-full", fit === "cover" ? "object-cover" : "object-contain")}
          />
        ) : (
          <span className="font-hand px-3 text-xl text-muted-foreground">{label}</span>
        )}
        <span className="font-hand absolute inset-x-0 bottom-0 bg-card/80 py-1 text-base text-ink/70 opacity-0 transition-opacity group-hover:opacity-100">
          change photo
        </span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onPick(e.target.files?.[0])}
      />

      {custom && (
        <button
          type="button"
          onClick={reset}
          className="font-hand absolute right-2 top-2 rounded-full bg-card/90 px-2 text-base text-ink/60 opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary"
        >
          reset
        </button>
      )}

      {caption && (
        <figcaption className="font-hand pt-2 text-center text-xl text-ink/70">{caption}</figcaption>
      )}
    </figure>
  );
}
