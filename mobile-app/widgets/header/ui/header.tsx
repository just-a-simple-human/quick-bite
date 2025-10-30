import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { AccountIcon, Logo } from "../assets/icons";
import { styles } from "./style";
import { Image } from "expo-image";

function Header() {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.header,
        {
          backgroundColor: theme.colors.card,
        },
      ]}
    >
      <Logo style={theme.dark ? "light" : "dark"} />
      <TouchableOpacity
        style={[
          {
            width: 48,
            height: 48,
            borderRadius: 8,
            padding: 8,
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <AccountIcon style={theme.dark ? "light" : "dark"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export { Header };
