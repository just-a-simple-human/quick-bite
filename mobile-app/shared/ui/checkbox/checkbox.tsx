import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";

interface IProps {
  isChecked: boolean;
  toggleIsChecked: () => void;
}

const Checkbox = ({ isChecked, toggleIsChecked }: IProps) => {
  const theme = useTheme();

  return (
    <Pressable
      style={[
        styles.checkbox,
        {
          borderColor: theme.colors.border,
        },
      ]}
      onPress={toggleIsChecked}
    >
      {isChecked && (
        <Image
          style={styles.icon}
          source={
            theme.dark
              ? require("./checkbox-icon-light.png")
              : require("./checkbox-icon-dark.png")
          }
        />
      )}
    </Pressable>
  );
};

export { Checkbox };
