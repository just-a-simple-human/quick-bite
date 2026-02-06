import { Tabs } from "expo-router";
import React from "react";
import { TabBar, CartIcon, MenuBookIcon, LocationIcon } from "@/widgets/tabs";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <LocationIcon
              style={colorScheme === "dark" || focused ? "light" : "dark"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Menu",
          tabBarIcon: ({ focused }) => (
            <MenuBookIcon
              style={
                colorScheme === "dark" ? "light" : focused ? "light" : "dark"
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <CartIcon
              style={
                colorScheme === "dark" ? "light" : focused ? "light" : "dark"
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
