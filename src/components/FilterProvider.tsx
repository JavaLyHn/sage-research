"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  products as INITIAL_PRODUCTS,
  type Product,
} from "@/lib/products";

interface FilterContextValue {
  products: Product[];
  addProduct: (input: Omit<Product, "id" | "index">) => void;
  moveProduct: (
    fromId: string,
    toId: string,
    position: "before" | "after",
  ) => void;
  resetToDefaults: () => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

const STORAGE_KEY = "ai-employee-research:products:v1";

function slugifyId(name: string, existing: Set<string>): string {
  const base =
    name
      .toLowerCase()
      .replace(/[^a-z0-9一-龥]+/g, "-")
      .replace(/^-+|-+$/g, "") || "product";
  if (!existing.has(base)) return base;
  let i = 2;
  while (existing.has(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}

const renumber = (list: Product[]): Product[] =>
  list.map((p, i) => ({ ...p, index: i + 1 }));

export function FilterProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Product[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          // v1.20 migration: 旧 reportPath 带 "0X-" 数字前缀(如 "01-artisan-co"),
          // 文件夹改名后剥掉前缀(→ "artisan-co")。新增产品的自定义路径不受影响。
          const migrated = parsed.map((p) =>
            p.reportPath
              ? { ...p, reportPath: p.reportPath.replace(/^\d+-/, "") }
              : p,
          );
          setProducts(migrated);
        }
      }
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch {
      // ignore quota errors
    }
  }, [products, hydrated]);

  const addProduct = useCallback(
    (input: Omit<Product, "id" | "index">) => {
      setProducts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const id = slugifyId(input.name, existingIds);
        return renumber([...prev, { ...input, id, index: prev.length + 1 }]);
      });
    },
    [],
  );

  const moveProduct = useCallback(
    (fromId: string, toId: string, position: "before" | "after") => {
      if (fromId === toId) return;
      setProducts((prev) => {
        const fromIdx = prev.findIndex((p) => p.id === fromId);
        const toIdx = prev.findIndex((p) => p.id === toId);
        if (fromIdx === -1 || toIdx === -1) return prev;
        const next = [...prev];
        const [moved] = next.splice(fromIdx, 1);
        let targetIdx = next.findIndex((p) => p.id === toId);
        if (position === "after") targetIdx += 1;
        next.splice(targetIdx, 0, moved);
        return renumber(next);
      });
    },
    [],
  );

  const resetToDefaults = useCallback(() => {
    setProducts(INITIAL_PRODUCTS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value: FilterContextValue = {
    products,
    addProduct,
    moveProduct,
    resetToDefaults,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return ctx;
}
