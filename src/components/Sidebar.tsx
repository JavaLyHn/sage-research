"use client";

import { useState } from "react";
import {
  CATEGORY_LABEL,
  type ProductCategory,
} from "@/lib/products";
import { useFilter, type CategoryFilter } from "./FilterProvider";

const NAV_ITEMS = [
  { href: "#overview", label: "概览" },
  { href: "#products", label: "产品档案" },
  { href: "#methodology", label: "方法论" },
];

const CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: "sales", label: "销售" },
  { value: "marketing", label: "营销" },
  { value: "agent", label: "Agent 协作" },
  { value: "creative", label: "创意生成" },
  { value: "data", label: "数据分析" },
  { value: "dev", label: "AI 开发" },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/85 px-4 py-3 backdrop-blur-md lg:hidden">
        <a href="#overview" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-serif text-xs font-bold text-on-primary"
          >
            R
          </span>
          <span className="font-serif text-sm font-semibold tracking-tight">
            AI Employee Research
          </span>
        </a>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="切换目录"
          aria-expanded={mobileOpen}
          className="rounded-md border border-border bg-card p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
        >
          {mobileOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </header>

      {/* Mobile drawer backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-foreground/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-border bg-card/60 backdrop-blur-md transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <SidebarInner onNavigate={() => setMobileOpen(false)} />
      </aside>
    </>
  );
}

function SidebarInner({ onNavigate }: { onNavigate: () => void }) {
  const {
    category,
    setCategory,
    categoryCounts,
    isFiltered,
    clear,
  } = useFilter();

  return (
    <div className="flex h-full flex-col overflow-y-auto px-5 py-6">
      {/* Brand */}
      <a
        href="#overview"
        onClick={onNavigate}
        className="group flex items-center gap-2.5 focus-visible:outline-none"
      >
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold text-on-primary transition-transform duration-300 group-hover:rotate-[8deg]"
        >
          R
        </span>
        <span className="font-serif text-base font-semibold leading-tight tracking-tight">
          AI Employee
          <br />
          Research
        </span>
      </a>

      {/* Status row */}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="relative inline-flex h-2 w-2">
          <span className="pulse-dot inline-flex h-2 w-2 rounded-full bg-emerald-500 text-emerald-500" />
        </span>
        持续更新 · v0.1
      </div>

      {/* Nav */}
      <nav className="mt-8">
        <SectionTitle>目录</SectionTitle>
        <ul className="mt-3 flex flex-col gap-px">
          {NAV_ITEMS.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                onClick={onNavigate}
                className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-secondary transition-colors hover:bg-muted hover:text-foreground"
              >
                <span>{it.label}</span>
                <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Category filter */}
      <FilterGroup title="按类别筛选" className="mt-7">
        <FilterPill
          active={category === "all"}
          onClick={() => setCategory("all")}
          label="全部"
          count={Object.values(categoryCounts).reduce((a, b) => a + b, 0)}
        />
        {CATEGORIES.filter((c) => (categoryCounts[c.value] ?? 0) > 0).map(
          (c) => (
            <FilterPill
              key={c.value}
              active={category === c.value}
              onClick={() => setCategory(c.value as CategoryFilter)}
              label={c.label}
              count={categoryCounts[c.value] ?? 0}
            />
          ),
        )}
      </FilterGroup>

      {isFiltered && (
        <button
          type="button"
          onClick={clear}
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:underline cursor-pointer"
        >
          清除全部筛选
        </button>
      )}

      {/* Footer */}
      <div className="mt-auto pt-8">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          v0.1 · 2026-05-25
        </p>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </h3>
  );
}

function FilterGroup({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <SectionTitle>{title}</SectionTitle>
      <ul className="mt-3 flex flex-col gap-1">{children}</ul>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
  count,
  dot,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  dot?: string;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`group flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-1.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          active
            ? "bg-primary text-on-primary"
            : "text-secondary hover:bg-muted hover:text-foreground"
        }`}
      >
        <span className="flex items-center gap-2">
          {dot && (
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${dot}`}
            />
          )}
          {label}
        </span>
        <span
          className={`text-[10px] tabular-nums font-medium ${
            active ? "text-on-primary/70" : "text-muted-foreground"
          }`}
        >
          {count}
        </span>
      </button>
    </li>
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

function MenuIcon({ className }: { className?: string }) {
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
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
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
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
