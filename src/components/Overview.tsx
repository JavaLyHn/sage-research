import {
  CATEGORY_LABEL,
  products,
  type ProductCategory,
} from "@/lib/products";
import Reveal from "./Reveal";

const CATEGORY_DESCRIPTIONS: Record<ProductCategory, string> = {
  sales:
    "AI BDR / SDR / 电话销售,覆盖潜客发掘到约见的销售自动化链路",
  marketing:
    "AI 营销 Agent / 内容生成 / 海外社媒,围绕 Campaign 全流程",
  agent:
    "通用 Agent 平台 + 协作工作流,Connectors 与 Skills 的组装能力",
  creative: "AI 视频与图像生成,创意素材的端到端产出",
  data: "数据分析与情报型工具,Crypto / B2B / 社媒等垂直场景",
};

export default function Overview() {
  return (
    <>
      <WhyWeDoThis />
      <WhatWeDo />
      <AudienceValue />
      <Coverage />
    </>
  );
}

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
      <span className="tabular-nums">{n}</span>
      <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
      <span>{text}</span>
    </p>
  );
}

function WhyWeDoThis() {
  return (
    <section
      id="why"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 lg:px-12 lg:py-28">
        <Reveal>
          <SectionLabel n="02" text="为什么做这件事" />
          <h2 className="font-serif text-3xl font-medium leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            AI 员工不再是科幻名词,
            <br />
            但「能不能真正干活」没有公开答案。
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
            <p className="text-[15px] leading-7 text-secondary">
              过去 12 个月,以
              <strong className="text-foreground"> AI BDR / AI CMO / AI Agent </strong>
              为名的产品从零密集涌到上百款。绝大多数官网只讲愿景,不讲交付边界 —— 什么场景能跑通、什么情况下需要人介入、付费跨过去能拿到什么。
            </p>
            <p className="text-[15px] leading-7 text-secondary">
              我们替读者跑一遍每款产品的真实路径,把
              <strong className="text-foreground">能力声明</strong>
              、<strong className="text-foreground">关键路径</strong>、
              <strong className="text-foreground">盲区与风险</strong>
              三件事分开摆在桌面上,而不是被合成的 marketing narrative 遮盖。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const items = [
    {
      n: "①",
      title: "深度功能评测",
      body: "每款产品按 44 个主测点 + 4 个递归背景测点跑完真实路径:从首屏 narrative,到注册/付费,到 dashboard 真实交付物。",
    },
    {
      n: "②",
      title: "结构化产物",
      body: "每份报告含 Executive Summary、整体兑现度、风险与机会 Top 3、Quick Wins,以及综合评分(5 分制 × 6 维度)。",
    },
    {
      n: "③",
      title: "持续跟踪",
      body: "Skill 自动化执行,版本号 v1.20。当前覆盖 16 款,下一批在排期。每款新增产品都按相同方法学评测,可横向对照。",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative border-t border-border bg-muted/40"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <Reveal>
          <SectionLabel n="03" text="我们做什么" />
          <h2 className="max-w-3xl font-serif text-3xl font-medium leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            一组可复现的产品体验调研。
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 100}>
              <div className="group flex h-full flex-col bg-card p-7 transition-colors duration-300 hover:bg-muted">
                <span className="font-serif text-3xl font-medium text-accent tabular-nums">
                  {it.n}
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold leading-tight tracking-tight text-foreground">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-secondary">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceValue() {
  const audiences = [
    {
      role: "产品经理 / Builder",
      need: "在做或准备做 AI Agent 产品",
      value:
        "可复用的定位框架、能力声明的常见模板、对手在哪些边界含糊其辞 —— 作为差异化设计的输入。",
    },
    {
      role: "销售 / 营销负责人",
      need: "评估某款 AI 工具进入采购",
      value:
        "在销售/付费谈判前就掌握功能层尽职调查清单,避开「愿景采购」陷阱,知道哪些能力需要二次验证。",
    },
    {
      role: "投资人 / 行业分析师",
      need: "判断 AI Employee 赛道公司成熟度",
      value:
        "横向对照同档位产品(BDR vs BDR、Agent 平台 vs Agent 平台),用结构化评分而不是 PR 稿做判断。",
    },
    {
      role: "研究者 / 学生",
      need: "在做 AI 应用层综述",
      value:
        "可复现的样本集与方法论,每份报告标注测点 ID,引用即用。",
    },
  ];

  return (
    <section
      id="audience"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <Reveal>
          <SectionLabel n="04" text="给谁看" />
          <h2 className="max-w-3xl font-serif text-3xl font-medium leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            四类读者,各取所需。
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.role} delay={i * 80}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)]">
                <h3 className="font-serif text-xl font-semibold leading-tight tracking-tight text-foreground">
                  {a.role}
                </h3>
                <p className="mt-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                  {a.need}
                </p>
                <div
                  className="mt-5 h-px w-12 bg-border transition-colors duration-300 group-hover:bg-accent"
                  aria-hidden="true"
                />
                <p className="mt-5 text-sm leading-7 text-secondary">
                  {a.value}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const counts = products.reduce<Record<ProductCategory, number>>(
    (acc, p) => {
      acc[p.category] = (acc[p.category] ?? 0) + 1;
      return acc;
    },
    {} as Record<ProductCategory, number>,
  );

  const orderedCategories = (
    Object.keys(CATEGORY_LABEL) as ProductCategory[]
  ).sort((a, b) => (counts[b] ?? 0) - (counts[a] ?? 0));

  return (
    <section
      id="coverage"
      className="relative border-t border-border bg-muted/40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid bg-grid-mask opacity-40"
      />
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <Reveal>
          <SectionLabel n="05" text="覆盖范围" />
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-3xl font-serif text-3xl font-medium leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              五个垂类,
              <span className="tabular-nums">{products.length}</span> 款产品。
            </h2>
            <p className="text-sm text-muted-foreground">
              覆盖 AI 员工 / Agent 类产品的主要赛道
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {orderedCategories.map((cat, i) => (
            <Reveal key={cat} delay={i * 60}>
              <div className="group flex h-full flex-col justify-between bg-card p-7 transition-colors duration-300 hover:bg-muted">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl font-semibold leading-tight tracking-tight text-foreground">
                      {CATEGORY_LABEL[cat]}
                    </h3>
                    <span className="font-serif text-3xl font-medium tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                      {counts[cat] ?? 0}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-secondary">
                    {CATEGORY_DESCRIPTIONS[cat]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
