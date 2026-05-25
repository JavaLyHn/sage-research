import ProductExplorer from "@/components/ProductExplorer";
import { products, stats } from "@/lib/products";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProductExplorer products={products} />
        <Methodology />
      </main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#top"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold text-on-primary"
          >
            R
          </span>
          <span className="font-serif text-base font-semibold tracking-tight">
            AI Employee Research
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-secondary md:flex">
          <a href="#products" className="transition-colors hover:text-foreground">
            产品列表
          </a>
          <a href="#methodology" className="transition-colors hover:text-foreground">
            方法论
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            关于
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-7xl px-6 pt-20 pb-12 lg:px-12 lg:pt-28 lg:pb-16">
      <div className="flex flex-col gap-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-secondary">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          AI 员工 / Agent 类产品深度调研
        </div>

        <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          看 <em className="italic text-accent">AI 员工</em>
          <br />
          长什么样。
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-secondary">
          我们对市面上的 AI 员工与 Agent 产品做了深度功能层体验调研 ——
          覆盖销售、营销、协作、开发与创意生成多个垂类。本档案收录每款产品的定位、访问方式与体验结论。
        </p>

        <div className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="收录产品" value={stats.total} />
          <Stat label="已完成" value={stats.completed} accent="emerald" />
          <Stat label="进行中" value={stats.inProgress} accent="amber" />
          <Stat label="计划中" value={stats.planned} accent="zinc" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  accent = "default",
}: {
  label: string;
  value: number;
  accent?: "default" | "emerald" | "amber" | "zinc";
}) {
  const accentBar: Record<typeof accent, string> = {
    default: "bg-foreground",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    zinc: "bg-zinc-400",
  };
  return (
    <div className="flex flex-col gap-1.5 border-l-2 border-border pl-3">
      <div className={`h-0.5 w-8 ${accentBar[accent]}`} aria-hidden="true" />
      <span className="font-serif text-4xl font-semibold tabular-nums text-foreground">
        {value}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Methodology() {
  const items = [
    {
      n: "01",
      title: "功能层为锚",
      body: "聚焦产品功能层的可理解性与完整性，不评 UI 美学。",
    },
    {
      n: "02",
      title: "多 Agent 测点",
      body: "44 个主测点（含 4 个递归背景测点），跨越产品意图、能力声明、关键路径与盲区。",
    },
    {
      n: "03",
      title: "结构化产物",
      body: "每款产品产出 Executive Summary、整体兑现度、风险机会、Quick Wins 等可执行结论。",
    },
    {
      n: "04",
      title: "可复现",
      body: "基于 product-audit Skill 自动化执行，模板 multi-agent / standard 深度档位。",
    },
  ];
  return (
    <section
      id="methodology"
      className="border-t border-border bg-muted/40"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
            方法论
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
            如何评一款 AI 员工产品。
          </h2>
          <p className="mt-5 text-base leading-relaxed text-secondary">
            我们关心的是「这款产品在它声明的能力里，能不能让用户真正抵达」。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.n} className="flex flex-col gap-3">
              <span className="font-serif text-2xl font-medium text-accent tabular-nums">
                {it.n}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer id="about" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-semibold tracking-tight">
              AI Employee Research
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              An ongoing audit of AI Employee &amp; Agent products.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Built with Next.js on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
