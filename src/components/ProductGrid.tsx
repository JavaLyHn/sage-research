import Link from "next/link";
import {
  ACCESS_LABEL,
  CATEGORY_LABEL,
  products,
  type AccessType,
  type Product,
} from "@/lib/products";

const ACCESS_CHIP: Record<AccessType, string> = {
  open: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900",
  freemium:
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900",
  application:
    "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900",
  sales:
    "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800/60 dark:text-zinc-300 dark:border-zinc-700",
};

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProductGrid() {
  return (
    <section id="products" className="px-6 py-16 lg:px-12 lg:py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
            产品档案
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
            {products.length} 款产品收录,逐个解构。
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          共 <span className="font-bold text-foreground tabular-nums">{products.length}</span> 款
        </p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/40 py-20 text-center">
          <p className="text-muted-foreground">没有产品可显示</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <Th className="w-14 text-center">#</Th>
                  <Th className="w-44">产品</Th>
                  <Th className="w-44">官网</Th>
                  <Th>定位</Th>
                  <Th className="w-28">类别</Th>
                  <Th className="w-28">访问</Th>
                  <Th className="w-36 text-right">操作</Th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
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
  const domain = getDomain(product.url);

  return (
    <tr className="group transition-colors duration-150 hover:bg-muted/40">
      <Td className="text-center">
        <span className="font-serif text-base font-medium tabular-nums text-muted-foreground transition-colors duration-200 group-hover:text-accent">
          {String(product.index).padStart(2, "0")}
        </span>
      </Td>

      <Td>
        <span className="font-serif text-base font-semibold leading-tight text-foreground">
          {product.name}
        </span>
      </Td>

      <Td>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/url inline-flex items-center gap-1 font-mono text-xs text-accent transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          {domain}
          <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover/url:translate-x-0 group-hover/url:opacity-100" />
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
        <span
          className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${ACCESS_CHIP[product.access]}`}
        >
          {ACCESS_LABEL[product.access]}
        </span>
      </Td>

      <Td className="text-right">
        {reportDisabled ? (
          <button
            type="button"
            disabled
            aria-label={`${product.name} 报告暂未发布`}
            title="报告暂未发布"
            className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground cursor-not-allowed"
          >
            查看报告
            <ArrowRight className="h-3 w-3" />
          </button>
        ) : (
          <Link
            href={`/products/${product.reportPath}`}
            aria-label={`查看 ${product.name} 报告`}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-on-primary transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            查看报告
            <ArrowRight className="h-3 w-3" />
          </Link>
        )}
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
