import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBarButton } from "./tab-bar-button";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const TabBar = ({
  state: { routes },
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={[styles.tabBar, { backgroundColor: theme.colors.card }]}
    >
      {routes.map((route) => {
        const { options } = descriptors[route.key];
        return (
          <TabBarButton
            key={route.key}
            route={route}
            options={options}
            navigation={navigation}
          />
        );
      })}
    </SafeAreaView>
  );
};

export { TabBar };
