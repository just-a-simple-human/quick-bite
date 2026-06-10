import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBarButton } from "./tab-bar-button";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

const TabBar = ({
  state: { routes },
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.tabBar, { backgroundColor: theme.colors.card }]}>
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
    </View>
  );
};

export { TabBar };
