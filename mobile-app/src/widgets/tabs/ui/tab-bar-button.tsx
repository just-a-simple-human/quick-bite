import { Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  NavigationHelpers,
  NavigationRoute,
  ParamListBase,
  useTheme,
} from "@react-navigation/native";
import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { styles } from "./styles";
import { useSegments } from "expo-router";
import { DarkAppTheme } from "@/shared/consts/colors";

interface IProps {
  route: NavigationRoute<ParamListBase, string>;
  options: BottomTabNavigationOptions;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TabBarButton = ({ route, options, navigation }: IProps) => {
  const theme = useTheme();

  const pathName = useSegments();
  const isActive =
    pathName[1] === route.name || (!pathName[1] && route.name === "index");
  return (
    <TouchableOpacity
      style={[
        styles.tabBarButton,
        isActive && {
          backgroundColor: theme.colors.primary,
          borderWidth: 0,
        },
      ]}
      onPress={() => navigation.navigate(route.name)}
    >
      {options.tabBarIcon &&
        options.tabBarIcon({
          focused: isActive,
          color: "",
          size: 24,
        })}
      <Text
        style={[
          styles.tabBarTitle,
          {
            color: isActive ? DarkAppTheme.colors.text : theme.colors.text,
          },
        ]}
      >
        {options.title}
      </Text>
    </TouchableOpacity>
  );
};

export { TabBarButton };
