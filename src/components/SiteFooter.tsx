export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-6 py-12 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sage Research · Built with Next.js on Vercel
          </p>
          <p className="text-xs text-muted-foreground">
            研究即作品 — 我们持续追踪 AI 员工形态的演化。
          </p>
        </div>
      </div>
    </footer>
  );
}
