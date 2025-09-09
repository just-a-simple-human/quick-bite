import { useCallback, useMemo } from "react";

interface IPaginationOptions {
  maxPage: number;
  buttonCount: number;
  currentPage: number;
}

function usePagination({
  maxPage,
  buttonCount,
  currentPage,
}: IPaginationOptions): number[] {
  const formArray = useCallback((start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => i + start);
  }, []);

  if (maxPage <= buttonCount) {
    return formArray(1, buttonCount);
  }

  const halfLength = useMemo(() => Math.ceil(buttonCount / 2), [buttonCount]);

  const dots = useMemo(() => {
    return {
      left: currentPage > halfLength,
      right: currentPage + halfLength - 1 < maxPage,
    };
  }, [currentPage, halfLength]);

  if (!dots.left && dots.right) {
    return [...formArray(1, halfLength + 2), 0, maxPage];
  }
  if (dots.left && dots.right) {
    return [
      1,
      0,
      ...formArray(currentPage - halfLength + 3, currentPage + halfLength - 3),
      0,
      maxPage,
    ];
  }
  if (dots.left && !dots.right) {
    return [1, 0, ...formArray(halfLength + 1, maxPage)];
  }

  return [];
}

export { usePagination };
