import { products, CATEGORY_LABEL } from "@/lib/products";

export default function Marquee() {
  return (
    <section
      aria-label="所有产品快速浏览"
      className="marquee group relative overflow-hidden border-b border-border bg-card/40 py-5"
    >
      {/* fade edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />

      <div className="marquee-track flex w-max">
        <MarqueeRow />
        <MarqueeRow ariaHidden />
      </div>
    </section>
  );
}

function MarqueeRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {products.map((p) => (
        <li key={p.id} className="flex shrink-0 items-center gap-3 text-sm">
          <span className="font-serif text-base font-medium tabular-nums text-muted-foreground">
            {String(p.index).padStart(2, "0")}
          </span>
          <span className="font-serif text-lg font-semibold text-foreground whitespace-nowrap">
            {p.name}
          </span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            {CATEGORY_LABEL[p.category]}
          </span>
          <span aria-hidden="true" className="text-border">
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}
