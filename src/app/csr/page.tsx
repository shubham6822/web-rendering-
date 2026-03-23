"use client";

import Link from "next/link";
import { useState } from "react";

const colors = [
  { name: "Rose", bg: "bg-rose-500", value: "#f43f5e" },
  { name: "Blue", bg: "bg-blue-500", value: "#3b82f6" },
  { name: "Amber", bg: "bg-amber-500", value: "#f59e0b" },
  { name: "Emerald", bg: "bg-emerald-500", value: "#10b981" },
  { name: "Violet", bg: "bg-violet-500", value: "#8b5cf6" },
];

export default function CSRPage() {
  const [selected, setSelected] = useState(colors[0]);
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <Link
        href="/"
        className="absolute top-6 left-6 text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
      >
        ← Back
      </Link>
      <span className="text-[11px] font-mono font-medium text-blue-400 mb-4">
        CSR
      </span>
      <h1 className="text-2xl font-light tracking-tight mb-2">
        Client-Side Rendering
      </h1>
      <p className="text-foreground/40 text-xs mb-6 text-center max-w-sm leading-relaxed">
        Everything below runs entirely in the browser. No server involved after
        the initial page load — state, interactions, and re-renders are all
        client-side.
      </p>

      {/* Interactive demo */}
      <div className="w-full max-w-sm space-y-6 mt-4">
        {/* Color picker */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-3">Pick a color</p>
          <div className="flex gap-2 mb-4">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelected(c)}
                className={`w-8 h-8 rounded-full ${c.bg} transition-all ${
                  selected.name === c.name
                    ? "ring-2 ring-offset-2 ring-offset-background ring-foreground/40 scale-110"
                    : "opacity-50 hover:opacity-80"
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-mono text-foreground/50">
            Selected:{" "}
            <span style={{ color: selected.value }}>{selected.name}</span>
          </p>
        </div>

        {/* Counter */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-3">Counter</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount((c) => c - 1)}
              className="w-8 h-8 rounded-lg border border-foreground/10 text-foreground/60 hover:border-foreground/30 transition-colors text-sm"
            >
              −
            </button>
            <span className="text-lg font-mono w-12 text-center">{count}</span>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="w-8 h-8 rounded-lg border border-foreground/10 text-foreground/60 hover:border-foreground/30 transition-colors text-sm"
            >
              +
            </button>
          </div>
        </div>

        {/* How it works */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs font-medium mb-2">How it works</p>
          <ul className="text-xs text-foreground/40 space-y-1.5 leading-relaxed">
            <li>• Server sends a minimal HTML shell + JS bundle</li>
            <li>• Browser downloads, parses, and executes JavaScript</li>
            <li>• React hydrates and renders the full UI on the client</li>
            <li>• All interactivity and state lives in the browser</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
