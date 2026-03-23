import Link from "next/link";

const strategies = [
  {
    href: "/csr",
    label: "CSR",
    title: "Client-Side Rendering",
    description: "Rendered entirely in the browser using JavaScript",
    accent: "text-blue-400",
    border: "hover:border-blue-400/50",
  },
  {
    href: "/ssr",
    label: "SSR",
    title: "Server-Side Rendering",
    description: "Rendered on the server for every request",
    accent: "text-purple-400",
    border: "hover:border-purple-400/50",
  },
  {
    href: "/ssg",
    label: "SSG",
    title: "Static Site Generation",
    description: "Pre-rendered at build time as static HTML",
    accent: "text-emerald-400",
    border: "hover:border-emerald-400/50",
  },
  {
    href: "/isr",
    label: "ISR",
    title: "Incremental Static Regeneration",
    description: "Static pages that revalidate after a set interval",
    accent: "text-amber-400",
    border: "hover:border-amber-400/50",
  },
  {
    href: "/ppr",
    label: "PPR",
    title: "Partial Pre-Rendering",
    description: "Combines static shell with dynamic streamed content",
    accent: "text-rose-400",
    border: "hover:border-rose-400/50",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">
        Next.js
      </p>
      <h1 className="text-3xl font-light tracking-tight sm:text-4xl mb-3">
        Rendering Strategies
      </h1>
      <p className="text-foreground/40 text-sm mb-16 text-center max-w-sm">
        Pick a strategy to see how it works.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
        {strategies.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`group rounded-xl border border-foreground/10 ${s.border} p-5 transition-all duration-200 hover:-translate-y-0.5`}
          >
            <span className={`text-[11px] font-mono font-medium ${s.accent}`}>
              {s.label}
            </span>
            <h2 className="text-sm font-medium mt-2 mb-1">{s.title}</h2>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {s.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
