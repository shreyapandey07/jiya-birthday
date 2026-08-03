export type PagePath =
  | "/"
  | "/caution"
  | "/surprise"
  | "/bouquet"
  | "/letter"
  | "/memories"
  | "/love"
  | "/us";

export const pageOrder: { path: PagePath; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/caution", label: "Caution" },
  { path: "/surprise", label: "Surprise" },
  { path: "/bouquet", label: "Bouquet" },
  { path: "/letter", label: "Letter" },
  { path: "/memories", label: "Memories" },
  { path: "/love", label: "Love" },
  { path: "/us", label: "Us" },
];

export const navPages = pageOrder.slice(0, 4);

export function siblings(current: PagePath) {
  const i = pageOrder.findIndex((p) => p.path === current);
  return {
    prev: i > 0 ? (pageOrder[i - 1]?.path ?? null) : null,
    next: i < pageOrder.length - 1 ? (pageOrder[i + 1]?.path ?? null) : null,
  };
}
