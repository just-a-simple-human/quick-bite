import { IMenuItem } from "@/shared/types/entities";
import { create } from "zustand";

interface IMenuInfoModalState {
  isOpened: boolean;
  currentItem?: IMenuItem;
  open(item: IMenuItem): void;
  close(): void;
}

export const useMenuItemModalStore = create<IMenuInfoModalState>((set) => ({
  isOpened: false,
  open(item) {
    set({ isOpened: true, currentItem: item });
  },
  close() {
    set({ isOpened: false });
  },
}));
