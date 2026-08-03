import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { navPages, siblings, type PagePath } from "@/lib/pages";
import { PageDecor } from "@/components/Decor";

export function PageShell({
  current,
  children,
  nextLabel = "next >>",
  backLabel = "<< back",
  decor = true,
}: {
  current: PagePath;
  children: ReactNode;
  nextLabel?: string;
  backLabel?: string;
  decor?: boolean;
}) {
  const { prev, next } = siblings(current);

  return (
    <div className="stripes relative flex min-h-screen flex-col">
      {decor && <PageDecor />}

      <header className="relative z-10 flex justify-end gap-6 px-6 py-4 md:px-12">
        {navPages.map((p) => (
          <Link
            key={p.path}
            to={p.path}
            className="font-hand text-xl text-ink/70 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary italic" }}
            activeOptions={{ exact: true }}
          >
            {p.label}
          </Link>
        ))}
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-10 md:px-10">
        {children}
      </main>

      <nav className="relative z-10 flex items-center justify-center gap-10 pb-12 font-hand text-2xl">
        {prev && (
          <Link to={prev} className="text-ink/80 hover:text-primary">
            {backLabel}
          </Link>
        )}
        {next ? (
          <Link to={next} className="text-ink/80 hover:text-primary">
            {nextLabel}
          </Link>
        ) : (
          <Link to="/" className="text-ink/80 hover:text-primary">
            &lt; RESTART &gt;
          </Link>
        )}
      </nav>
    </div>
  );
}
