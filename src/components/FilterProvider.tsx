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
        const parsed = JSON.parse(raw) as { id?: string }[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          // 用户在 localStorage 里只保留产品顺序(拖拽过的次序);其余字段
          // 始终从源数据 INITIAL_PRODUCTS 按 id 回填(自动适配 access 类型
          // 升级、文件夹改名、planned 删除等场景)。
          const sourceById = new Map(
            INITIAL_PRODUCTS.map((p) => [p.id, p]),
          );
          const migrated: Product[] = [];
          const seen = new Set<string>();
          for (const item of parsed) {
            const id = item?.id;
            if (!id || seen.has(id)) continue;
            const source = sourceById.get(id);
            if (source) {
              migrated.push(source);
              seen.add(id);
            }
          }
          // 补上 localStorage 里缺失的源数据条目(可能是新增的产品)
          for (const p of INITIAL_PRODUCTS) {
            if (!seen.has(p.id)) migrated.push(p);
          }
          setProducts(renumber(migrated));
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
