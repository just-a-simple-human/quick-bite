import { create } from "zustand";

interface IAsideState {
  isOpened: boolean;
  toggle: () => void;
}

const useAsideStore = create<IAsideState>()((set) => ({
  isOpened: true,
  toggle: () => set((state) => ({ isOpened: !state.isOpened })),
}));

export { useAsideStore };
