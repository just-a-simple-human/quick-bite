import { StyleSheet } from "react-native";

export const barStyle = StyleSheet.create({
  wrapper: {
    flexShrink: 0,
  },
  container: {
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});
