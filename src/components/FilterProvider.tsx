"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  products as ALL_PRODUCTS,
  type Product,
  type ProductCategory,
} from "@/lib/products";

export type CategoryFilter = "all" | ProductCategory;

interface FilterContextValue {
  category: CategoryFilter;
  setCategory: (v: CategoryFilter) => void;
  clear: () => void;
  filtered: Product[];
  categoryCounts: Record<ProductCategory, number>;
  isFiltered: boolean;
}

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<CategoryFilter>("all");

  const clear = useCallback(() => {
    setCategory("all");
  }, []);

  const filtered = useMemo(
    () =>
      ALL_PRODUCTS.filter(
        (p) => category === "all" || p.category === category,
      ),
    [category],
  );

  const categoryCounts = useMemo(() => {
    const acc = {} as Record<ProductCategory, number>;
    for (const p of ALL_PRODUCTS) {
      acc[p.category] = (acc[p.category] ?? 0) + 1;
    }
    return acc;
  }, []);

  const value: FilterContextValue = {
    category,
    setCategory,
    clear,
    filtered,
    categoryCounts,
    isFiltered: category !== "all",
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
