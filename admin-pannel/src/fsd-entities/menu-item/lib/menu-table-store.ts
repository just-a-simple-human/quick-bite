import { create } from "zustand";

interface IMenuTableState {
  currentPage: number;
  itemsPerPage: number;
}

interface IMenuTableAction {
  setCurrentPage: (page: number) => void;
}

const useMenuTableStore = create<IMenuTableState & IMenuTableAction>()(
  (set) => ({
    currentPage: 1,
    itemsPerPage: 5,
    setCurrentPage(page) {
      set(() => ({ currentPage: page }));
    },
  })
);

export { useMenuTableStore };
