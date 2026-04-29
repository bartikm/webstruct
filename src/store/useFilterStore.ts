import { create } from "zustand";

interface FilterState {
  activeCategory: string | null;
  searchQuery: string;
  setCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  activeCategory: "All",
  searchQuery: "",
  setCategory: (category) => set({ activeCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () => set({ activeCategory: "All", searchQuery: "" }),
}));
