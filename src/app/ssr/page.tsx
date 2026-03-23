import Link from "next/link";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "Unknown";
  const now = new Date();

  const requestInfo = {
    time: now.toLocaleTimeString(),
    date: now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    browser: userAgent.includes("Chrome")
      ? "Chrome"
      : userAgent.includes("Firefox")
        ? "Firefox"
        : userAgent.includes("Safari")
          ? "Safari"
          : "Other",
    platform: userAgent.includes("Mac")
      ? "macOS"
      : userAgent.includes("Windows")
        ? "Windows"
        : userAgent.includes("Linux")
          ? "Linux"
          : "Unknown",
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <Link
        href="/"
        className="absolute top-6 left-6 text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
      >
        ← Back
      </Link>
      <span className="text-[11px] font-mono font-medium text-purple-400 mb-4">
        SSR
      </span>
      <h1 className="text-2xl font-light tracking-tight mb-2">
        Server-Side Rendering
      </h1>
      <p className="text-foreground/40 text-xs mb-6 text-center max-w-sm leading-relaxed">
        This page is rendered fresh on the server for every request. The data
        below was read from your request headers at render time.
      </p>

      <div className="w-full max-w-sm space-y-6 mt-4">
        {/* Request snapshot */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-3">Request snapshot</p>
          <div className="space-y-2">
            {Object.entries(requestInfo).map(([key, val]) => (
              <div key={key} className="flex justify-between items-baseline">
                <span className="text-xs text-foreground/30 capitalize">
                  {key}
                </span>
                <span className="text-xs font-mono text-foreground/70">
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Raw user-agent */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs text-foreground/40 mb-2">User-Agent</p>
          <p className="text-[11px] font-mono text-foreground/40 break-all leading-relaxed">
            {userAgent}
          </p>
        </div>

        {/* How it works */}
        <div className="rounded-xl border border-foreground/10 p-5">
          <p className="text-xs font-medium mb-2">How it works</p>
          <ul className="text-xs text-foreground/40 space-y-1.5 leading-relaxed">
            <li>• Server receives the request and runs the component</li>
            <li>• Data (headers, DB, APIs) is fetched at request time</li>
            <li>• Full HTML is generated and sent to the client</li>
            <li>• Every refresh triggers a new server render</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
