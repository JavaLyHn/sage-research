"use client";

import { useMemo, useState } from "react";
import {
  CATEGORY_LABEL,
  STATUS_LABEL,
  type Product,
  type ProductCategory,
  type ProductStatus,
} from "@/lib/products";

type CategoryFilter = "all" | ProductCategory;
type StatusFilter = "all" | ProductStatus;

const CATEGORIES: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "sales", label: "销售" },
  { value: "marketing", label: "营销" },
  { value: "agent", label: "Agent 协作" },
  { value: "creative", label: "创意生成" },
  { value: "data", label: "数据分析" },
  { value: "dev", label: "AI 开发" },
];

const STATUSES: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "completed", label: "已完成" },
  { value: "in-progress", label: "进行中" },
  { value: "planned", label: "计划中" },
];

const STATUS_DOT: Record<ProductStatus, string> = {
  completed: "bg-emerald-500",
  "in-progress": "bg-amber-500",
  planned: "bg-zinc-400",
};

export default function ProductExplorer({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "all" || p.category === category) &&
          (status === "all" || p.status === status),
      ),
    [products, category, status],
  );

  return (
    <section id="products" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <div className="mb-10 flex flex-col gap-8">
        <FilterRow
          label="类别"
          options={CATEGORIES}
          value={category}
          onChange={setCategory}
        />
        <FilterRow
          label="状态"
          options={STATUSES}
          value={status}
          onChange={setStatus}
        />
        <div className="flex items-baseline justify-between border-b border-border pb-4">
          <p className="text-sm text-muted-foreground">
            共 <span className="text-foreground font-bold">{filtered.length}</span> 个产品
          </p>
          {(category !== "all" || status !== "all") && (
            <button
              onClick={() => {
                setCategory("all");
                setStatus("all");
              }}
              className="text-sm text-accent transition-colors hover:underline cursor-pointer"
              type="button"
            >
              清除筛选
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-card py-16 text-center">
          <p className="text-muted-foreground">该筛选下没有产品</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground min-w-[3rem]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                active
                  ? "border-primary bg-primary text-on-primary"
                  : "border-border bg-card text-foreground hover:border-foreground hover:bg-muted"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const reportDisabled = !product.reportPath || product.status === "planned";

  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="mb-4 flex items-start justify-between">
        <span className="font-serif text-3xl font-medium tabular-nums text-muted-foreground">
          {String(product.index).padStart(2, "0")}
        </span>
        <StatusBadge status={product.status} />
      </div>

      <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground">
        {product.name}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-secondary line-clamp-2">
        {product.positioning}
      </p>

      {product.note && (
        <p className="mt-3 rounded-md border-l-2 border-accent bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          {product.note}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-muted px-2 py-1 font-medium text-secondary">
          {CATEGORY_LABEL[product.category]}
        </span>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">{product.access}</span>
        {product.owner && (
          <>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">@{product.owner}</span>
          </>
        )}
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`访问 ${product.name} 官网`}
        >
          访问官网
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button
          type="button"
          disabled={reportDisabled}
          aria-label={`查看 ${product.name} 报告`}
          title={reportDisabled ? "报告暂未发布" : undefined}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-on-primary transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
        >
          查看报告
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-secondary">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`}
      />
      {STATUS_LABEL[status]}
    </span>
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
