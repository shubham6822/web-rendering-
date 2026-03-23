import Link from "next/link";
import { Suspense } from "react";

async function DynamicWeather() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const conditions = [
    { icon: "☀️", temp: "24°C", desc: "Sunny" },
    { icon: "🌤", temp: "19°C", desc: "Partly cloudy" },
    { icon: "🌧", temp: "14°C", desc: "Light rain" },
    { icon: "⛈", temp: "11°C", desc: "Thunderstorm" },
    { icon: "❄️", temp: "-2°C", desc: "Snowing" },
  ];
  const now = new Date();
  const pick = conditions[now.getSeconds() % conditions.length];
  const time = now.toLocaleTimeString();

  return (
    <div className="rounded-xl border border-rose-400/20 bg-rose-400/5 p-5">
      <p className="text-xs text-foreground/40 mb-3">
        Dynamic — streamed via Suspense
      </p>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{pick.icon}</span>
        <div>
          <p className="text-sm font-medium">
            {pick.temp} · {pick.desc}
          </p>
          <p className="text-[11px] font-mono text-foreground/30">
            Fetched at {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PPRPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <Link
        href="/"
        className="absolute top-6 left-6 text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
      >
        ← Back
      </Link>
      <span className="text-[11px] font-mono font-medium text-rose-400 mb-4">
        PPR
      </span>
      <h1 className="text-2xl font-light tracking-tight mb-2">
        Partial Pre-Rendering
      </h1>
      <p className="text-foreground/40 text-xs mb-6 text-center max-w-sm leading-relaxed">
        The static shell loads instantly while dynamic content streams in.
        Notice the skeleton below before the weather data appears.
      </p>

      <div className="w-full max-w-sm space-y-6 mt-4">
        {/* Static section */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-3">
            Static — pre-rendered at build time
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed">
            This section is part of the static shell. It loads immediately
            without waiting for any data.
          </p>
        </div>

        {/* Dynamic section with Suspense */}
        <Suspense
          fallback={
            <div className="rounded-xl border border-rose-400/20 bg-rose-400/5 p-5">
              <p className="text-xs text-foreground/40 mb-3">
                Dynamic — streamed via Suspense
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-foreground/10 animate-pulse" />
                <div className="space-y-1.5">
                  <div className="h-3 w-28 rounded bg-foreground/10 animate-pulse" />
                  <div className="h-2 w-20 rounded bg-foreground/10 animate-pulse" />
                </div>
              </div>
            </div>
          }
        >
          <DynamicWeather />
        </Suspense>

        {/* How it works */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs font-medium mb-2">How it works</p>
          <ul className="text-xs text-foreground/40 space-y-1.5 leading-relaxed">
            <li>
              • Static shell is pre-rendered and served instantly from CDN
            </li>
            <li>• Dynamic parts are wrapped in Suspense boundaries</li>
            <li>• Browser shows a skeleton/fallback for dynamic sections</li>
            <li>• Server streams the dynamic HTML as it becomes ready</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
