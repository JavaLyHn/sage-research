import { CATEGORY_LABEL, products } from "@/lib/products";
import Reveal from "./Reveal";

const FEATURED_IDS = ["artisan", "monday", "11x"] as const;

const SUBTITLES: Record<string, string> = {
  artisan:
    "对 AI BDR 赛道的开创者展开完整链路体验,验证「AI 销售员工」从招募到出单的兑现度。",
  monday:
    "企业协作场景里 AI Workflow 的代表,看它如何把 Agent 嵌入既有团队工作流。",
  "11x":
    "AI SDR + AI 电话销售双形态,评估销售型 Agent 在真实潜客触达的可用边界。",
};

export default function Featured() {
  const items = FEATURED_IDS.map(
    (id) => products.find((p) => p.id === id)!,
  ).filter(Boolean);

  return (
    <section id="featured" className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                精选案例
              </p>
              <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
                三个值得细读的样本。
              </h2>
            </div>
            <a
              href="#products"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              查看全部 22 个
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
                {/* hover accent gradient */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/15"
                />

                <div className="relative flex items-start justify-between">
                  <span className="font-serif text-5xl font-medium tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                    {String(p.index).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-secondary backdrop-blur-sm">
                    {CATEGORY_LABEL[p.category]}
                  </span>
                </div>

                <h3 className="relative mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground">
                  {p.name}
                </h3>

                <p className="relative mt-2 text-sm font-medium text-secondary">
                  {p.positioning}
                </p>

                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {SUBTITLES[p.id] ?? ""}
                </p>

                <div className="relative mt-8 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.owner ? `负责人 · ${p.owner}` : "调研中"}
                  </span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-accent"
                    aria-label={`访问 ${p.name} 官网`}
                  >
                    访问
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
