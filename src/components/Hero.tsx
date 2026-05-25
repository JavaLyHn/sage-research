export default function Hero() {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden border-b border-border"
    >
      {/* background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid bg-grid-mask"
      />
      {/* gradient orbs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="orb orb-1"
          style={{
            top: "-10%",
            left: "15%",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(37, 99, 235, 0.18), transparent 60%)",
          }}
        />
        <div
          className="orb orb-2"
          style={{
            bottom: "-20%",
            right: "10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.14), transparent 65%)",
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-16 pb-16 text-center lg:px-12 lg:pt-20 lg:pb-20">
        <LiveBadge />

        <h1 className="mt-7 font-serif text-[2.75rem] font-medium leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[4.75rem]">
          看 <em className="italic gradient-text">AI 员工</em>
          <br />
          长 什 么 样。
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-secondary">
          我们对市面上的 <strong className="text-foreground">AI 员工</strong> 与{" "}
          <strong className="text-foreground">Agent 产品</strong> 做了深度功能层体验调研 —— 覆盖销售、营销、协作、开发与创意生成多个垂类。本档案收录每款产品的定位、访问方式与体验结论。
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:gap-3 hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            浏览所有产品
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#methodology"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            看研究方法
          </a>
        </div>
      </div>
    </section>
  );
}

function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 py-1 pl-2 pr-4 text-xs font-medium text-secondary backdrop-blur-sm">
      <span className="relative inline-flex h-2 w-2 items-center justify-center">
        <span
          aria-hidden="true"
          className="pulse-dot inline-flex h-2 w-2 rounded-full bg-emerald-500 text-emerald-500"
        />
      </span>
      <span>持续更新 · AI 员工 / Agent 产品深度调研</span>
    </div>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
