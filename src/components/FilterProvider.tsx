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
  moveProduct: (
    fromId: string,
    toId: string,
    position: "before" | "after",
  ) => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

const STORAGE_KEY = "sage-research:products:v1";
const LEGACY_STORAGE_KEY = "ai-employee-research:products:v1";

const renumber = (list: Product[]): Product[] =>
  list.map((p, i) => ({ ...p, index: i + 1 }));

export function FilterProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      let raw = window.localStorage.getItem(STORAGE_KEY);
      // 品牌从 ai-employee-research 改名为 sage-research,迁移旧 key 数据
      if (!raw) {
        const legacy = window.localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacy) {
          raw = legacy;
          window.localStorage.setItem(STORAGE_KEY, legacy);
          window.localStorage.removeItem(LEGACY_STORAGE_KEY);
        }
      }
      if (raw) {
        const parsed = JSON.parse(raw) as Product[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          // 迁移 1: 旧 reportPath 带 "0X-" 数字前缀,文件夹改名后剥掉前缀
          // 迁移 2: 过滤掉无 report 的产品(早期数据可能含 8 个 planned 项)
          const migrated = parsed
            .filter((p) => !!p.reportPath)
            .map((p) => ({
              ...p,
              reportPath: p.reportPath!.replace(/^\d+-/, ""),
            }));
          if (migrated.length > 0) setProducts(migrated);
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

  const value: FilterContextValue = {
    products,
    moveProduct,
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
