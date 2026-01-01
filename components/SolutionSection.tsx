import React from "react";

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      {/* Decorative side lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-neon uppercase mb-4 font-display">
            The Protocol
          </h2>

          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 font-display uppercase">
            Enter{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">
              SentinelStack
            </span>
          </h3>

          <p className="text-xl text-slate-400 leading-relaxed font-light">
            A modular security testing suite built for real-world abuse paths —
            not checklist scanning.
          </p>
        </div>

        {/* TERMINAL WINDOW */}
        <div className="relative mx-auto max-w-5xl">
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon via-white to-neon opacity-20 blur-xl rounded-xl" />

          {/* Terminal frame */}
          <div className="relative rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl overflow-hidden">
            {/* Terminal Header (FIXED) */}
            <div className="bg-[#111] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <div className="font-mono text-xs text-slate-500">
                admin@sentinel-blade: ~/scans/juice-shop
              </div>

              <div className="w-16" />
            </div>

            {/* TERMINAL BODY (SCROLLABLE VIEWPORT) */}
            <div
              className="
                font-mono
                text-xs md:text-sm
                text-slate-300
                bg-[#050505]
                h-[480px]
                overflow-y-auto
                px-6 py-4
                leading-tight
                scrollbar-thin
                scrollbar-thumb-neon/30
                scrollbar-track-transparent
              "
            >
              {/* REAL CLI SCREENSHOTS */}
              <div className="space-y-4">
                <img
                  src="/cli/cli-01.png"
                  alt="SentinelStack scan initialization and progress"
                  className="w-full rounded border border-white/10"
                />
                <img
                  src="/cli/cli-02.png"
                  alt="SentinelStack vulnerability findings"
                  className="w-full rounded border border-white/10"
                />
                <img
                  src="/cli/cli-03.png"
                  alt="SentinelStack report generation"
                  className="w-full rounded border border-white/10"
                />
              </div>
            </div>

            {/* STATUS BADGE (FIXED, NON-SCROLLING) */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur border border-neon/40 px-4 py-2 text-xs font-mono text-neon">
              STATUS: 22 VULNERABILITIES CONFIRMED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
