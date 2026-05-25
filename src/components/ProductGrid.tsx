"use client";

import {
  CATEGORY_LABEL,
  stats,
  type Product,
} from "@/lib/products";
import { useFilter } from "./FilterProvider";

export default function ProductGrid() {
  const { filtered, isFiltered, clear, category } = useFilter();

  return (
    <section id="products" className="px-6 py-16 lg:px-12 lg:py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
            产品档案
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
            {stats.total} 款产品收录,逐个解构。
          </h2>
        </div>
        <div className="flex items-baseline gap-3">
          {isFiltered && (
            <ActiveFilterChips category={category} onClear={clear} />
          )}
          <p className="text-sm text-muted-foreground">
            匹配 <span className="font-bold text-foreground tabular-nums">{filtered.length}</span> 个
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/40 py-20 text-center">
          <p className="text-muted-foreground">该筛选下没有匹配的产品</p>
          <button
            type="button"
            onClick={clear}
            className="mt-3 text-sm text-accent hover:underline cursor-pointer"
          >
            清除筛选
          </button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <Th className="w-14 text-center">#</Th>
                  <Th className="w-48">产品</Th>
                  <Th>定位</Th>
                  <Th className="w-32">类别</Th>
                  <Th className="w-32">访问</Th>
                  <Th className="w-28 text-right">操作</Th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <ProductRow key={p.id} product={p} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

function Th({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      scope="col"
      className={`sticky top-0 z-10 border-b border-border bg-muted/60 px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-sm ${className}`}
    >
      {children}
    </th>
  );
}

function ProductRow({ product }: { product: Product }) {
  const reportDisabled = !product.reportPath;

  return (
    <tr className="group transition-colors duration-150 hover:bg-muted/40">
      <Td className="text-center">
        <span className="font-serif text-base font-medium tabular-nums text-muted-foreground transition-colors duration-200 group-hover:text-accent">
          {String(product.index).padStart(2, "0")}
        </span>
      </Td>

      <Td>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/name inline-flex items-center gap-1.5 font-serif text-base font-semibold text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          {product.name}
          <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover/name:translate-x-0 group-hover/name:opacity-100" />
        </a>
      </Td>

      <Td>
        <p className="text-sm leading-snug text-secondary line-clamp-2">
          {product.positioning}
        </p>
        {product.note && (
          <p className="mt-1 text-xs leading-snug text-muted-foreground line-clamp-2">
            {product.note}
          </p>
        )}
      </Td>

      <Td>
        <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-secondary">
          {CATEGORY_LABEL[product.category]}
        </span>
      </Td>

      <Td>
        <span className="text-xs text-muted-foreground">
          {product.access}
        </span>
      </Td>

      <Td className="text-right">
        <button
          type="button"
          disabled={reportDisabled}
          aria-label={`查看 ${product.name} 报告`}
          title={reportDisabled ? "报告暂未发布" : undefined}
          className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-on-primary transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
        >
          查看报告
          <ArrowRight className="h-3 w-3" />
        </button>
      </Td>
    </tr>
  );
}

function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`border-b border-border px-4 py-3.5 align-middle ${className}`}>
      {children}
    </td>
  );
}

function ActiveFilterChips({
  category,
  onClear,
}: {
  category: string;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {category !== "all" && (
        <Chip label={CATEGORY_LABEL[category as keyof typeof CATEGORY_LABEL]} />
      )}
      <button
        type="button"
        onClick={onClear}
        className="text-xs text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
      >
        清除
      </button>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-on-primary">
      {label}
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
      strokeWidth="2.4"
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
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
