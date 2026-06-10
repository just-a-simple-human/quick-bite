import { useRef } from "react";
import { FlatList } from "react-native";

interface IParams {
  offset?: number;
}

export function useScrollToItem<T>(params?: IParams) {
  const listRef = useRef<FlatList<T>>(null);

  function scrollToItem(item: T) {
    listRef.current?.scrollToItem({
      item,
      animated: true,
      viewOffset: params?.offset,
    });
  }

  return { listRef, scrollToItem };
}
