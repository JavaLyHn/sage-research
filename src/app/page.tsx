import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductExplorer from "@/components/ProductExplorer";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Featured />
        <ProductExplorer products={products} />
        <Methodology />
      </main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#top"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold text-on-primary transition-transform duration-300 group-hover:rotate-[8deg]"
          >
            R
          </span>
          <span className="font-serif text-base font-semibold tracking-tight">
            AI Employee Research
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-secondary md:flex">
          <a href="#featured" className="transition-colors hover:text-foreground">
            精选
          </a>
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

function Methodology() {
  const items = [
    {
      n: "01",
      title: "功能层为锚",
      body: "聚焦产品功能层的可理解性与完整性,不评 UI 美学。",
    },
    {
      n: "02",
      title: "多 Agent 测点",
      body: "44 个主测点(含 4 个递归背景测点),跨越产品意图、能力声明、关键路径与盲区。",
    },
    {
      n: "03",
      title: "结构化产物",
      body: "每款产品产出 Executive Summary、整体兑现度、风险机会、Quick Wins 等可执行结论。",
    },
    {
      n: "04",
      title: "可复现",
      body: "基于 product-audit Skill 自动化执行,模板 multi-agent / standard 深度档位。",
    },
  ];

  return (
    <section
      id="methodology"
      className="relative isolate overflow-hidden border-t border-border bg-muted/40"
    >
      {/* subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid bg-grid-mask opacity-60"
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                方法论
              </p>
              <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                如何评一款
                <br />
                AI 员工产品。
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-secondary">
                我们关心的是「这款产品在它声明的能力里,能不能让用户真正抵达」。
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-px w-12 bg-border" aria-hidden="true" />
                product-audit · v1.13
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ol className="relative grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it.n} delay={i * 100} as="li">
                  <div className="group relative h-full bg-card p-7 transition-colors duration-300 hover:bg-muted">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-3xl font-medium text-accent tabular-nums">
                        {it.n}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-border transition-all duration-300 group-hover:scale-150 group-hover:bg-accent" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      {it.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer id="about" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-6">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold text-on-primary"
              >
                R
              </span>
              <p className="font-serif text-xl font-semibold tracking-tight">
                AI Employee Research
              </p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              An ongoing audit of AI Employee &amp; Agent products. 持续更新中。
            </p>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              导航
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="#featured"
                  className="text-secondary transition-colors hover:text-foreground"
                >
                  精选
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-secondary transition-colors hover:text-foreground"
                >
                  产品列表
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-secondary transition-colors hover:text-foreground"
                >
                  方法论
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              档案
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li className="text-secondary">v0.1 · 2026-05-25</li>
              <li className="text-muted-foreground">22 款产品</li>
              <li className="text-muted-foreground">6 个垂类</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI Employee Research · Built with Next.js on Vercel
          </p>
          <p className="text-xs text-muted-foreground">
            研究即作品 — 我们持续追踪 AI 员工形态的演化。
          </p>
        </div>
      </div>
    </footer>
  );
}
