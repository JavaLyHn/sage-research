"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  products as INITIAL_PRODUCTS,
  type Product,
  type ProductCategory,
} from "@/lib/products";

export type CategoryFilter = "all" | ProductCategory;

interface FilterContextValue {
  // Data
  products: Product[];
  filtered: Product[];
  categoryCounts: Record<ProductCategory, number>;

  // Filter state
  category: CategoryFilter;
  setCategory: (v: CategoryFilter) => void;
  clear: () => void;
  isFiltered: boolean;

  // CRUD
  addProduct: (input: Omit<Product, "id" | "index">) => void;
  deleteProduct: (id: string) => void;
  moveProduct: (fromId: string, toId: string, position: "before" | "after") => void;
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

export function FilterProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage once on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Product[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProducts(parsed);
        }
      }
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  // Persist on every change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch {
      // ignore quota errors
    }
  }, [products, hydrated]);

  const clear = useCallback(() => setCategory("all"), []);

  const renumber = (list: Product[]): Product[] =>
    list.map((p, i) => ({ ...p, index: i + 1 }));

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

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => renumber(prev.filter((p) => p.id !== id)));
  }, []);

  const moveProduct = useCallback(
    (fromId: string, toId: string, position: "before" | "after") => {
      if (fromId === toId) return;
      setProducts((prev) => {
        const fromIdx = prev.findIndex((p) => p.id === fromId);
        const toIdx = prev.findIndex((p) => p.id === toId);
        if (fromIdx === -1 || toIdx === -1) return prev;
        const next = [...prev];
        const [moved] = next.splice(fromIdx, 1);
        // Recompute toIdx if it shifted from removing the source
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

  const filtered = useMemo(
    () =>
      products.filter((p) => category === "all" || p.category === category),
    [products, category],
  );

  const categoryCounts = useMemo(() => {
    const acc = {} as Record<ProductCategory, number>;
    for (const p of products) {
      acc[p.category] = (acc[p.category] ?? 0) + 1;
    }
    return acc;
  }, [products]);

  const value: FilterContextValue = {
    products,
    filtered,
    categoryCounts,
    category,
    setCategory,
    clear,
    isFiltered: category !== "all",
    addProduct,
    deleteProduct,
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
