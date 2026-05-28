import { useCallback, useEffect, useMemo } from "react";
import type { IUseScrollParams } from "./types";

/**
 * Custom hook to synchronize list scrolling with external state.
 *
 * @param {IUseScrollParams} params - Parameters for the useScroll hook.
 * See {@link IUseScrollParams} interface.
 *
 * @return Functions to handle scrolling errors and UI active item changes.
 */
export function useScroll<Control, Item extends Control>({
  items,
  compare,
  scrollToItem,
  targetControl,
  setActiveControl,
  scrollMode,
  setScrollMode,
  loadNextPage,
}: IUseScrollParams<Control, Item>) {
  const targetItem = useMemo(() => {
    return items.find((item) => targetControl && compare(item, targetControl));
  }, [targetControl, compare, items]);

  const scrollToTargetItem = useCallback(() => {
    if (targetItem) {
      scrollToItem(targetItem);
    }
  }, [scrollToItem, targetItem]);

  const onScrollFailed = useCallback(() => {
    setTimeout(() => scrollToTargetItem(), 0);
  }, [scrollToTargetItem]);

  const handleVisibleItemChange = useCallback(
    (item?: Item) => {
      if (item && scrollMode === "manual") {
        setActiveControl(item);
      }
    },
    [setActiveControl, scrollMode],
  );

  useEffect(() => {
    if (!targetItem && loadNextPage) {
      loadNextPage();
    }
  }, [loadNextPage, targetItem]);

  useEffect(() => {
    if (targetItem && scrollMode === "target") {
      scrollToTargetItem();
      setScrollMode("manual");
    }
  }, [targetItem, scrollMode, scrollToTargetItem, setScrollMode]);

  return { onScrollFailed, handleVisibleItemChange };
}
