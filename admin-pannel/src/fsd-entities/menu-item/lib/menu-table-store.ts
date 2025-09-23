import { create } from "zustand";

interface IMenuTableState {
  currentPage: number;
  itemsPerPage: number;
  isFilterOpened: boolean;
}

interface IMenuTableAction {
  setCurrentPage: (page: number) => void;
  toggleFilter: () => void;
}

const useMenuTableStore = create<IMenuTableState & IMenuTableAction>()(
  (set) => ({
    isFilterOpened: false,
    currentPage: 1,
    itemsPerPage: 5,
    setCurrentPage(page) {
      set(() => ({ currentPage: page }));
    },
    toggleFilter() {
      set((state) => ({ isFilterOpened: !state.isFilterOpened }));
    },
  })
);

export { useMenuTableStore };
