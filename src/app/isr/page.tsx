import Link from "next/link";

export const revalidate = 30;

const quotes = [
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  { text: "Less is more.", author: "Ludwig Mies van der Rohe" },
  {
    text: "Good design is as little design as possible.",
    author: "Dieter Rams",
  },
  {
    text: "Perfection is achieved when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames",
  },
];

export default function ISRPage() {
  const now = new Date();
  const generatedAt = now.toLocaleTimeString();
  const quoteIndex = Math.floor(now.getTime() / 1000 / 30) % quotes.length;
  const quote = quotes[quoteIndex];

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <Link
        href="/"
        className="absolute top-6 left-6 text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
      >
        ← Back
      </Link>
      <span className="text-[11px] font-mono font-medium text-amber-400 mb-4">
        ISR
      </span>
      <h1 className="text-2xl font-light tracking-tight mb-2">
        Incremental Static Regeneration
      </h1>
      <p className="text-foreground/40 text-xs mb-6 text-center max-w-sm leading-relaxed">
        This page is statically generated but automatically regenerates in the
        background every 30 seconds. The quote below rotates with each
        revalidation.
      </p>

      <div className="w-full max-w-sm space-y-6 mt-4">
        {/* Quote card */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-3">Quote of the moment</p>
          <blockquote className="text-sm text-foreground/70 italic leading-relaxed">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <p className="text-xs text-foreground/30 mt-2">— {quote.author}</p>
        </div>

        {/* Revalidation info */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-2">Revalidation status</p>
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-foreground/30">Generated at</span>
              <span className="text-xs font-mono text-foreground/60">
                {generatedAt}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-foreground/30">
                Revalidate every
              </span>
              <span className="text-xs font-mono text-foreground/60">30s</span>
            </div>
          </div>
          <p className="text-[11px] text-foreground/25 mt-3">
            Refresh after 30s — the quote and timestamp will update.
          </p>
        </div>

        {/* How it works */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs font-medium mb-2">How it works</p>
          <ul className="text-xs text-foreground/40 space-y-1.5 leading-relaxed">
            <li>• Page is statically generated like SSG at first</li>
            <li>
              • After the revalidation window, next request triggers a
              background rebuild
            </li>
            <li>• Stale page is served instantly while new one generates</li>
            <li>• Subsequent visitors get the freshly regenerated page</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
