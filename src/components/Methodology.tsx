import Reveal from "./Reveal";

const ITEMS = [
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

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="relative isolate overflow-hidden border-t border-border bg-muted/40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid bg-grid-mask opacity-60"
      />

      <div className="px-6 py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
                <span className="tabular-nums">06</span>
                <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
                <span>方法论</span>
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
              {ITEMS.map((it, i) => (
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
