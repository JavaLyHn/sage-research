import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReportContent from "@/components/ReportContent";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products
    .filter((p) => p.reportPath)
    .map((p) => ({ slug: p.reportPath! }));
}

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.reportPath === slug);
  if (!product) return { title: "报告未找到" };
  return {
    title: `${product.name} 报告 — Sage Research`,
    description: product.positioning,
  };
}

function readReport(slug: string): string | null {
  const mdPath = path.join(
    process.cwd(),
    "public",
    "products",
    slug,
    "report.md",
  );
  try {
    return fs.readFileSync(mdPath, "utf-8");
  } catch {
    return null;
  }
}

export default async function ReportViewerPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.reportPath === slug);
  if (!product) notFound();

  const content = readReport(slug);

  return (
    <div className="flex flex-col">
      {/* Sticky toolbar */}
      <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur-md lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft className="h-3 w-3" />
            返回产品档案
          </Link>
          <div
            className="hidden h-4 w-px bg-border sm:block"
            aria-hidden="true"
          />
          <div className="hidden sm:block">
            <p className="font-serif text-sm font-semibold leading-tight text-foreground">
              {product.name}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              产品体验报告
            </p>
          </div>
        </div>
      </header>

      {/* Mobile product name (header太挤时单独一行) */}
      <div className="border-b border-border bg-card/40 px-4 py-2 sm:hidden">
        <p className="font-serif text-sm font-semibold text-foreground">
          {product.name} · 产品体验报告
        </p>
      </div>

      {/* Rendered Markdown */}
      {content ? (
        <ReportContent slug={slug} content={content} />
      ) : (
        <div className="mx-auto w-full max-w-4xl px-6 py-20 text-center">
          <p className="text-muted-foreground">
            报告文件未找到(public/products/{slug}/report.md)
          </p>
        </div>
      )}
    </div>
  );
}

function ArrowLeft({ className }: { className?: string }) {
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
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

