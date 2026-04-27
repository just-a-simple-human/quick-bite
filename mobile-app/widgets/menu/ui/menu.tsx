import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { MenuSection } from "./section";
import { useTheme } from "@react-navigation/native";
import { MenuTabs } from "@/features/navigate-menu";
import { useMenu } from "../model/use-menu-sections";
import { menuStyles } from "./styles";

const Menu = () => {
  const theme = useTheme();

  const {
    sections,
    menuListRef,
    loadNextPage,
    isFetchingNextPage,
    hasNextPage,
    isPending,
    onScrollFailed,
    handleVisibleItemChange,
  } = useMenu();

  const { width } = Dimensions.get("window");
  const cardWidth =
    (width -
      (menuStyles.wrapper.paddingHorizontal * 2 +
        menuStyles.columnWrapper.gap)) /
    2;

  if (isPending && !isFetchingNextPage) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator color={theme.colors.primary} size={48} />
      </View>
    );
  }

  return (
    <>
      <MenuTabs />
      <FlatList
        ref={menuListRef}
        showsVerticalScrollIndicator={false}
        data={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuSection section={item} cardWidth={cardWidth} />
        )}
        onEndReachedThreshold={0.3}
        onEndReached={() => loadNextPage()}
        ListFooterComponent={
          isFetchingNextPage && hasNextPage ? (
            <ActivityIndicator color={theme.colors.primary} size={"large"} />
          ) : null
        }
        contentContainerStyle={{
          gap: 16,
          paddingVertical: 16,
        }}
        style={menuStyles.wrapper}
        onScrollToIndexFailed={onScrollFailed}
        viewabilityConfig={{
          minimumViewTime: 100,
          itemVisiblePercentThreshold: 50,
        }}
        onViewableItemsChanged={(e) => {
          handleVisibleItemChange(e.viewableItems[0]?.item);
        }}
      />
    </>
  );
};

export { Menu };
