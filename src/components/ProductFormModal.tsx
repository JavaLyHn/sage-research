"use client";

import { useEffect, useRef, useState } from "react";
import {
  CATEGORY_LABEL,
  STATUS_LABEL,
  type Product,
  type ProductCategory,
  type ProductStatus,
} from "@/lib/products";

const CATEGORY_OPTIONS = Object.entries(CATEGORY_LABEL) as [
  ProductCategory,
  string,
][];
const STATUS_OPTIONS = Object.entries(STATUS_LABEL) as [ProductStatus, string][];

type FormValues = Omit<Product, "id" | "index">;

const EMPTY: FormValues = {
  name: "",
  positioning: "",
  url: "",
  access: "开放",
  status: "completed",
  category: "agent",
  note: "",
  reportPath: "",
};

interface Props {
  open: boolean;
  mode: "create" | "edit";
  initial?: Product | null;
  onClose: () => void;
  onSubmit: (values: FormValues) => void;
}

export default function ProductFormModal({
  open,
  mode,
  initial,
  onClose,
  onSubmit,
}: Props) {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {},
  );
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  // Reset form when opening
  useEffect(() => {
    if (!open) return;
    if (initial) {
      const { id: _id, index: _index, ...rest } = initial;
      setValues({ ...EMPTY, ...rest });
    } else {
      setValues(EMPTY);
    }
    setErrors({});
    // Focus first input shortly after the modal appears
    const t = setTimeout(() => firstInputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open, initial]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const handleField =
    <K extends keyof FormValues>(key: K) =>
    (value: FormValues[K]) =>
      setValues((v) => ({ ...v, [key]: value }));

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) next.name = "产品名不能为空";
    if (!values.positioning.trim()) next.positioning = "定位不能为空";
    if (!values.url.trim()) {
      next.url = "URL 不能为空";
    } else {
      try {
        new URL(values.url);
      } catch {
        next.url = "URL 格式不合法";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Trim & coerce empty optional fields
    onSubmit({
      ...values,
      name: values.name.trim(),
      positioning: values.positioning.trim(),
      url: values.url.trim(),
      access: values.access.trim() || "—",
      note: values.note?.trim() || undefined,
      reportPath: values.reportPath?.trim() || undefined,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <h3
            id="product-modal-title"
            className="font-serif text-xl font-semibold tracking-tight text-foreground"
          >
            {mode === "create" ? "新增产品" : "编辑产品"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭"
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="产品名" required error={errors.name} className="sm:col-span-2">
              <input
                ref={firstInputRef}
                type="text"
                value={values.name}
                onChange={(e) => handleField("name")(e.target.value)}
                placeholder="例如:Artisan AI"
                className={inputClass(!!errors.name)}
              />
            </Field>

            <Field label="一句话定位" required error={errors.positioning} className="sm:col-span-2">
              <input
                type="text"
                value={values.positioning}
                onChange={(e) => handleField("positioning")(e.target.value)}
                placeholder="例如:AI 销售员工(AI BDR)"
                className={inputClass(!!errors.positioning)}
              />
            </Field>

            <Field label="产品 URL" required error={errors.url} className="sm:col-span-2">
              <input
                type="url"
                value={values.url}
                onChange={(e) => handleField("url")(e.target.value)}
                placeholder="https://..."
                className={inputClass(!!errors.url)}
              />
            </Field>

            <Field label="类别" required>
              <select
                value={values.category}
                onChange={(e) =>
                  handleField("category")(e.target.value as ProductCategory)
                }
                className={inputClass(false)}
              >
                {CATEGORY_OPTIONS.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="状态">
              <select
                value={values.status}
                onChange={(e) =>
                  handleField("status")(e.target.value as ProductStatus)
                }
                className={inputClass(false)}
              >
                {STATUS_OPTIONS.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="访问方式" className="sm:col-span-2">
              <input
                type="text"
                value={values.access}
                onChange={(e) => handleField("access")(e.target.value)}
                placeholder="开放 / 联系销售 / 注册即用 ..."
                className={inputClass(false)}
              />
            </Field>

            <Field
              label="报告路径"
              hint="对应 audits 文件夹名,如 15-octok-com。留空代表暂未发布报告"
              className="sm:col-span-2"
            >
              <input
                type="text"
                value={values.reportPath ?? ""}
                onChange={(e) => handleField("reportPath")(e.target.value)}
                placeholder="15-octok-com"
                className={inputClass(false)}
              />
            </Field>

            <Field label="备注" hint="可选,显示在卡片小灰条里" className="sm:col-span-2">
              <textarea
                value={values.note ?? ""}
                onChange={(e) => handleField("note")(e.target.value)}
                rows={2}
                placeholder="例如:与 Kuse 同公司,Kuse 是系统、Junior 是人格化 AI 员工"
                className={`${inputClass(false)} resize-y`}
              />
            </Field>
          </div>
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-border bg-muted/30 px-6 py-4">
          <p className="text-xs text-muted-foreground">
            ⓘ 改动暂存在本地浏览器,刷新不会丢
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card cursor-pointer"
            >
              取消
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card cursor-pointer"
            >
              {mode === "create" ? "新增" : "保存"}
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
    hasError ? "border-red-500" : "border-border hover:border-foreground"
  }`;
}

function Field({
  label,
  required,
  error,
  hint,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>
      {children}
      {error ? (
        <span className="text-xs text-red-500">{error}</span>
      ) : hint ? (
        <span className="text-xs text-muted-foreground">{hint}</span>
      ) : null}
    </label>
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
