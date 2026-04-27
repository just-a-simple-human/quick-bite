import {
  IScrollModeState,
  IActiveControlState,
  ITargetControlState,
} from "@/shared/lib/use-scroll";
import { ICategory } from "@/shared/types/entities";
import { create } from "zustand";

interface IMenuNavigationState
  extends
    IScrollModeState,
    IActiveControlState<ICategory>,
    ITargetControlState<ICategory> {
  setTargetControl(category: ICategory): void;
}

export const useMenuNavigationStore = create<IMenuNavigationState>((set) => ({
  setActiveControl(category) {
    set({ activeControl: category });
  },
  setTargetControl(category) {
    set({ targetControl: category });
  },
  scrollMode: "manual",
  setScrollMode(value) {
    set({ scrollMode: value });
  },
}));
