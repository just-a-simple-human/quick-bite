import { FlatList } from "react-native";
import { MenuTabButton } from "./menu-tab-button";
import { useTheme } from "@react-navigation/native";
import { useCategoryGetAllQuery } from "@/entities/category";
import { useScrollToItem, useScroll } from "@/shared/lib/use-scroll";
import { ICategory } from "@/shared/types/entities";
import { useMenuNavigationStore } from "../model/use-menu-navigation-store";
import { barStyle } from "./styles";

const MenuTabs = () => {
  const theme = useTheme();
  const { data } = useCategoryGetAllQuery();
  const { activeControl, setActiveControl } = useMenuNavigationStore();
  const { listRef, scrollToItem } = useScrollToItem<ICategory>({ offset: 12 });

  const { onScrollFailed } = useScroll<ICategory, ICategory>({
    items: data,
    compare(target, category) {
      return target.id === category.id;
    },
    scrollMode: "target",
    setScrollMode() {},
    setActiveControl,
    targetControl: activeControl,
    scrollToItem,
  });

  return (
    <FlatList
      ref={listRef}
      data={data}
      renderItem={({ item }) => <MenuTabButton category={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[
        barStyle.wrapper,
        {
          backgroundColor: theme.colors.card,
        },
      ]}
      contentContainerStyle={barStyle.container}
      onScrollToIndexFailed={onScrollFailed}
    />
  );
};

export { MenuTabs };
