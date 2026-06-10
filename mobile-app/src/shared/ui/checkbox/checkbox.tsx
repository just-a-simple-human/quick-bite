import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

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

export const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export { Checkbox };
