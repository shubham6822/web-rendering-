import Link from "next/link";

const glossary = [
  {
    term: "SSG",
    definition:
      "Pages are generated once at build time and served as static files from a CDN.",
  },
  {
    term: "Build Time",
    definition:
      "The moment when `next build` runs. All static pages are pre-rendered here.",
  },
  {
    term: "CDN",
    definition:
      "Content Delivery Network — serves cached static files from edge locations worldwide.",
  },
  {
    term: "TTFB",
    definition:
      "Time to First Byte — extremely fast with SSG since no server computation is needed.",
  },
];

export default function SSGPage() {
  const builtAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <Link
        href="/"
        className="absolute top-6 left-6 text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
      >
        ← Back
      </Link>
      <span className="text-[11px] font-mono font-medium text-emerald-400 mb-4">
        SSG
      </span>
      <h1 className="text-2xl font-light tracking-tight mb-2">
        Static Site Generation
      </h1>
      <p className="text-foreground/40 text-xs mb-6 text-center max-w-sm leading-relaxed">
        This entire page was pre-rendered at build time. The content below never
        changes between builds — it&apos;s served as a static HTML file.
      </p>

      <div className="w-full max-w-sm space-y-6 mt-4">
        {/* Build stamp */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-1">Generated at build</p>
          <p className="text-xs font-mono text-foreground/60">{builtAt}</p>
          <p className="text-[11px] text-foreground/25 mt-2">
            Refresh the page — this value won&apos;t change.
          </p>
        </div>

        {/* Glossary */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-3">Static glossary</p>
          <div className="space-y-3">
            {glossary.map((item) => (
              <div key={item.term}>
                <p className="text-xs font-medium text-emerald-400/80">
                  {item.term}
                </p>
                <p className="text-[11px] text-foreground/40 leading-relaxed mt-0.5">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs font-medium mb-2">How it works</p>
          <ul className="text-xs text-foreground/40 space-y-1.5 leading-relaxed">
            <li>
              • Pages are rendered once during{" "}
              <code className="text-foreground/50">next build</code>
            </li>
            <li>• Output is plain HTML + JSON — no runtime server needed</li>
            <li>• Served directly from CDN for instant load times</li>
            <li>• Perfect for content that rarely changes (docs, blogs)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
