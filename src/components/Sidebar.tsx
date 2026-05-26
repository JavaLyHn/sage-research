"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
  matchPath: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "概览", matchPath: "/" },
  { href: "/products", label: "产品档案", matchPath: "/products" },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/85 px-4 py-3 backdrop-blur-md lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-serif text-xs font-bold text-on-primary"
          >
            R
          </span>
          <span className="font-serif text-sm font-semibold tracking-tight">
            AI Employee Research
          </span>
        </Link>
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
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col overflow-y-auto px-5 py-6">
      {/* Brand */}
      <Link
        href="/"
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
      </Link>

      {/* Status row */}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="relative inline-flex h-2 w-2">
          <span className="pulse-dot inline-flex h-2 w-2 rounded-full bg-emerald-500 text-emerald-500" />
        </span>
        持续更新 · v0.1
      </div>

      {/* Nav */}
      <nav className="mt-8">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          目录
        </h3>
        <ul className="mt-3 flex flex-col gap-px">
          {NAV_ITEMS.map((it) => {
            const active = pathname === it.matchPath;
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  onClick={onNavigate}
                  className={`group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-muted font-semibold text-foreground"
                      : "text-secondary hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-accent"
                      />
                    )}
                    {it.label}
                  </span>
                  <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          v0.1 · 2026-05-25
        </p>
      </div>
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
