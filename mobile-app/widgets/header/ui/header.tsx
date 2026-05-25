import { TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { AccountIcon, Logo } from "../assets/icons";
import { styles } from "./style";

const Header = () => {
  const theme = useTheme();

  return (
    <View
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
            borderRadius: 8,
            padding: 8,
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <AccountIcon style={theme.dark ? "light" : "dark"} />
      </TouchableOpacity>
    </View>
  );
};

export { Header };
