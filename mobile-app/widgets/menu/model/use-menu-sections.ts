import { useMenuGetAllQuery } from "@/entities/menu";
import { useMenuNavigationStore } from "@/features/navigate-menu";
import { useScroll } from "@/shared/lib/use-scroll";
import { useScrollToItem } from "@/shared/lib/use-scroll/use-scroll-to-item";
import { ICategory, IMenuItem } from "@/shared/types/entities";
import { useCallback, useMemo } from "react";

export interface IMenuSection extends ICategory {
  items: IMenuItem[];
}

export function useMenu() {
  const { listRef: menuListRef, scrollToItem } = useScrollToItem<IMenuSection>({
    offset: 16,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useMenuGetAllQuery();

  const loadNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const sections = useMemo(() => {
    if (!data?.length) {
      return [];
    }
    const groups: IMenuSection[] = [];
    let currentSection: IMenuSection | undefined;
    for (const item of data) {
      if (!currentSection || item.category.id !== currentSection.id) {
        if (currentSection) groups.push(currentSection);
        currentSection = {
          ...item.category,
          items: [item],
        };
      } else {
        currentSection.items.push(item);
      }
    }
    if (currentSection) groups.push(currentSection);
    return groups;
  }, [data]);

  const { setActiveControl, targetControl, scrollMode, setScrollMode } =
    useMenuNavigationStore();

  const { onScrollFailed, handleVisibleItemChange } = useScroll<
    ICategory,
    IMenuSection
  >({
    items: sections,
    compare(section, category) {
      return section.id === category.id;
    },
    scrollToItem,
    targetControl,
    setActiveControl,
    scrollMode,
    setScrollMode,
    loadNextPage,
  });

  return {
    loadNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    menuListRef,
    sections,
    onScrollFailed,
    handleVisibleItemChange,
  };
}
