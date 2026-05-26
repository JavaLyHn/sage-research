"use client";

import { useState } from "react";
import {
  CATEGORY_LABEL,
  type Product,
} from "@/lib/products";
import { useFilter } from "./FilterProvider";
import ProductFormModal from "./ProductFormModal";

interface DragState {
  fromId: string | null;
  overId: string | null;
  position: "before" | "after" | null;
}

const EMPTY_DRAG: DragState = { fromId: null, overId: null, position: null };

export default function ProductGrid() {
  const {
    products,
    addProduct,
    deleteProduct,
    moveProduct,
    resetToDefaults,
  } = useFilter();

  const [modalOpen, setModalOpen] = useState(false);
  const [drag, setDrag] = useState<DragState>(EMPTY_DRAG);

  const openCreate = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = (values: Omit<Product, "id" | "index">) => {
    addProduct(values);
    closeModal();
  };

  const handleDelete = (p: Product) => {
    if (window.confirm(`确定删除「${p.name}」?此操作仅在本浏览器生效。`)) {
      deleteProduct(p.id);
    }
  };

  const handleReset = () => {
    if (window.confirm("重置为初始 24 款产品?你在本浏览器的所有改动会丢失。")) {
      resetToDefaults();
    }
  };

  // Drag handlers
  const onDragStart = (id: string) => (e: React.DragEvent<HTMLTableRowElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
    setDrag({ fromId: id, overId: null, position: null });
  };

  const onDragOver =
    (id: string) => (e: React.DragEvent<HTMLTableRowElement>) => {
      if (!drag.fromId || drag.fromId === id) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      const rect = e.currentTarget.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      const position: "before" | "after" = e.clientY < midY ? "before" : "after";
      if (drag.overId !== id || drag.position !== position) {
        setDrag((s) => ({ ...s, overId: id, position }));
      }
    };

  const onDrop = (id: string) => (e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    if (drag.fromId && drag.fromId !== id && drag.position) {
      moveProduct(drag.fromId, id, drag.position);
    }
    setDrag(EMPTY_DRAG);
  };

  const onDragEnd = () => setDrag(EMPTY_DRAG);

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

      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-[0_4px_14px_-4px_rgba(0,0,0,0.3)] transition-all hover:opacity-90 hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
          >
            <PlusIcon className="h-3.5 w-3.5" />
            新增产品
          </button>
          {products.length > 1 && (
            <span className="text-xs text-muted-foreground">
              ⓘ 拖动行可调整顺序
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-xs text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          title="清除本地改动,恢复初始 24 款"
        >
          重置为初始数据
        </button>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/40 py-20 text-center">
          <p className="text-muted-foreground">
            还没有产品,点上方「新增产品」开始
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <Th className="w-20 text-center">#</Th>
                  <Th className="w-48">产品</Th>
                  <Th>定位</Th>
                  <Th className="w-32">类别</Th>
                  <Th className="w-32">访问</Th>
                  <Th className="w-44 text-right">操作</Th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <ProductRow
                    key={p.id}
                    product={p}
                    drag={drag}
                    onDragStart={onDragStart(p.id)}
                    onDragOver={onDragOver(p.id)}
                    onDrop={onDrop(p.id)}
                    onDragEnd={onDragEnd}
                    onDelete={() => handleDelete(p)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <ProductFormModal
        open={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
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

function ProductRow({
  product,
  drag,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  onDelete,
}: {
  product: Product;
  drag: DragState;
  onDragStart: (e: React.DragEvent<HTMLTableRowElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLTableRowElement>) => void;
  onDrop: (e: React.DragEvent<HTMLTableRowElement>) => void;
  onDragEnd: () => void;
  onDelete: () => void;
}) {
  const reportDisabled = !product.reportPath;
  const isSource = drag.fromId === product.id;
  const isOverBefore = drag.overId === product.id && drag.position === "before";
  const isOverAfter = drag.overId === product.id && drag.position === "after";

  const dropIndicatorClass = isOverBefore
    ? "shadow-[inset_0_2px_0_var(--accent)]"
    : isOverAfter
      ? "shadow-[inset_0_-2px_0_var(--accent)]"
      : "";

  return (
    <tr
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={`group transition-all duration-150 hover:bg-muted/40 ${
        isSource ? "opacity-40" : ""
      } ${dropIndicatorClass}`}
    >
      <Td className="text-center">
        <div className="flex items-center justify-center gap-1.5">
          <span
            aria-hidden="true"
            className="cursor-grab text-muted-foreground opacity-0 transition-opacity group-hover:opacity-70 active:cursor-grabbing active:opacity-100"
            title="拖动调整顺序"
          >
            <GripIcon className="h-3.5 w-3.5" />
          </span>
          <span className="font-serif text-base font-medium tabular-nums text-muted-foreground transition-colors duration-200 group-hover:text-accent">
            {String(product.index).padStart(2, "0")}
          </span>
        </div>
      </Td>

      <Td>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          onClick={(e) => e.stopPropagation()}
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
        <span className="text-xs text-muted-foreground">{product.access}</span>
      </Td>

      <Td className="text-right">
        <div className="inline-flex items-center gap-1">
          <button
            type="button"
            onClick={onDelete}
            aria-label={`删除 ${product.name}`}
            title="删除"
            className="rounded-md p-1.5 text-muted-foreground opacity-0 transition-all hover:bg-red-50 hover:text-red-600 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-card group-hover:opacity-100 dark:hover:bg-red-950/50 dark:hover:text-red-400 cursor-pointer"
          >
            <TrashIcon className="h-3.5 w-3.5" />
          </button>
          {reportDisabled ? (
            <button
              type="button"
              disabled
              aria-label={`${product.name} 报告暂未发布`}
              title="报告暂未发布"
              className="ml-1 inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground cursor-not-allowed"
            >
              查看报告
              <ArrowRight className="h-3 w-3" />
            </button>
          ) : (
            <a
              href={`/products/${product.reportPath}/report.html`}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              onClick={(e) => e.stopPropagation()}
              aria-label={`查看 ${product.name} 报告`}
              className="ml-1 inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-on-primary transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              查看报告
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
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

function PlusIcon({ className }: { className?: string }) {
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
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
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
      <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" />
    </svg>
  );
}

function GripIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="9" cy="6" r="1.5" />
      <circle cx="9" cy="12" r="1.5" />
      <circle cx="9" cy="18" r="1.5" />
      <circle cx="15" cy="6" r="1.5" />
      <circle cx="15" cy="12" r="1.5" />
      <circle cx="15" cy="18" r="1.5" />
    </svg>
  );
}
