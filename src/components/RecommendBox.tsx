"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORY_LABEL, products, type Product } from "@/lib/products";

const QUICK_PROMPTS = [
  "SaaS 销售总监,要 AI 帮我做电话约见",
  "做企业内部知识管理 + Agent 工作流",
  "海外社媒投放,需要内容生成 + 投放管理",
  "出海公司,想要 AI 团队覆盖战略到执行",
];

interface MockRecommendation {
  productId: string;
  reason: string;
}

// Hardcoded demo recommendations — same response regardless of input.
const MOCK_RESULTS: MockRecommendation[] = [
  {
    productId: "artisan",
    reason:
      "你的「主动外联 + 约见」场景是 Artisan 的核心定位 —— 它把自己定义成 AI BDR,声称覆盖找客户、个性化外联、异议处理、约会议四步全链路,有具体的 credit 计费模型可量化资源消耗。注意它对 CRM 集成与发件人审批边界的说明较模糊,采购前需要二次验证。",
  },
  {
    productId: "11x",
    reason:
      "11x 同样定位 AI 销售员工(SDR + 电话销售双形态),客户名单显著,适合做横向对照。但访问门槛是「联系销售」,无法走自助试用,需要先评估你的预算和团队规模。",
  },
  {
    productId: "kuse",
    reason:
      "如果你需要的不止销售自动化,还想覆盖整个 GTM 工作流,Kuse 是更通用的备选 —— 它是产品平台层,Junior 是其上的人格化销售员工形态。免费可注册,适合先跑通看实际能力。",
  },
];

export default function RecommendBox() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<
    { product: Product; reason: string }[]
  >([]);
  const [lastQuery, setLastQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLastQuery(query.trim());
    setLoading(true);
    setSubmitted(true);
    // Demo: simulate latency, then return mock recommendations.
    setTimeout(() => {
      const matched = MOCK_RESULTS.map((r) => ({
        product: products.find((p) => p.id === r.productId)!,
        reason: r.reason,
      })).filter((r) => r.product);
      setResults(matched);
      setLoading(false);
    }, 900);
  };

  const reset = () => {
    setSubmitted(false);
    setQuery("");
    setLastQuery("");
    setResults([]);
  };

  const useQuickPrompt = (prompt: string) => {
    setQuery(prompt);
  };

  return (
    <section
      id="recommend"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-12 lg:py-24">
        {!submitted ? (
          <InputState
            query={query}
            setQuery={setQuery}
            onSubmit={handleSubmit}
            onQuickPrompt={useQuickPrompt}
          />
        ) : (
          <ResultState
            query={lastQuery}
            loading={loading}
            results={results}
            onReset={reset}
          />
        )}
      </div>
    </section>
  );
}

function InputState({
  query,
  setQuery,
  onSubmit,
  onQuickPrompt,
}: {
  query: string;
  setQuery: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onQuickPrompt: (p: string) => void;
}) {
  return (
    <>
      <div className="mb-8 text-center">
        <p className="mb-3 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
          <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
          <span>选型助手</span>
          <span
            className="inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300"
            title="目前是展示用 Demo,实际推荐逻辑暂未接通"
          >
            Demo
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
          不知道从哪一款看起?
        </h2>
        <p className="mt-3 text-[15px] leading-7 text-secondary">
          描述你的角色或场景,我们推荐 3 款匹配的产品。
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="group relative rounded-2xl border border-border bg-card transition-all duration-300 focus-within:border-foreground focus-within:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] hover:border-foreground/60">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="比如:我是 SaaS 销售总监,要 AI 帮我做电话约见..."
            rows={3}
            className="w-full resize-none rounded-2xl bg-transparent px-5 py-4 text-[15px] leading-7 text-foreground placeholder:text-muted-foreground focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                onSubmit(e);
              }
            }}
          />
          <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              ⌘ + Enter 提交
            </span>
            <button
              type="submit"
              disabled={!query.trim()}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card cursor-pointer"
            >
              找产品
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground">快速尝试:</span>
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => onQuickPrompt(prompt)}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-secondary transition-colors hover:border-foreground hover:bg-muted hover:text-foreground cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      </form>
    </>
  );
}

function ResultState({
  query,
  loading,
  results,
  onReset,
}: {
  query: string;
  loading: boolean;
  results: { product: Product; reason: string }[];
  onReset: () => void;
}) {
  return (
    <>
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
            <span>基于你的描述</span>
            <span
              className="inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300"
              title="展示用 Demo,实际推荐逻辑暂未接通"
            >
              Demo
            </span>
          </p>
          <p className="text-sm leading-6 text-secondary">
            <span className="text-muted-foreground">「</span>
            {query}
            <span className="text-muted-foreground">」</span>
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground hover:bg-muted cursor-pointer"
        >
          <Refresh className="h-3 w-3" />
          换个描述
        </button>
      </div>

      {loading ? (
        <LoadingCards />
      ) : (
        <ol className="flex flex-col gap-4">
          {results.map(({ product, reason }, idx) => (
            <li key={product.id}>
              <RecommendCard rank={idx + 1} product={product} reason={reason} />
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

function RecommendCard({
  rank,
  product,
  reason,
}: {
  rank: number;
  product: Product;
  reason: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.12)] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/0 blur-2xl transition-all duration-700 group-hover:bg-accent/12"
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex w-full flex-col sm:w-32">
          <span className="font-serif text-3xl font-medium tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-accent">
            {String(rank).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground">
            {product.name}
          </h3>
          <span className="mt-2 inline-flex w-fit items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-secondary">
            {CATEGORY_LABEL[product.category]}
          </span>
        </div>
        <div className="relative flex-1 sm:border-l sm:border-border sm:pl-6">
          <p className="text-sm leading-7 text-secondary">{reason}</p>
          {product.reportPath ? (
            <Link
              href={`/products/${product.reportPath}`}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:underline"
            >
              查看完整报告
              <ArrowRight className="h-3 w-3" />
            </Link>
          ) : (
            <p className="mt-5 text-xs text-muted-foreground">
              报告暂未发布
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function LoadingCards() {
  return (
    <div className="flex flex-col gap-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-2xl border border-border bg-card p-6 sm:p-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex w-full flex-col sm:w-32">
              <div className="h-8 w-12 animate-pulse rounded bg-muted" />
              <div className="mt-3 h-7 w-3/4 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-5 w-16 animate-pulse rounded bg-muted" />
            </div>
            <div className="flex-1 space-y-2 sm:border-l sm:border-border sm:pl-6">
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      ))}
      <p className="mt-2 text-center text-xs text-muted-foreground">
        正在分析你的需求...
      </p>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Refresh({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 019-9 9 9 0 016.4 2.6L21 8M21 3v5h-5M21 12a9 9 0 01-9 9 9 9 0 01-6.4-2.6L3 16M3 21v-5h5" />
    </svg>
  );
}
