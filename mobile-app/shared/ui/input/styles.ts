import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "transparent",
    gap: 8,
  },
  header: { height: 28 },
  label: {
    fontSize: 18,

    fontWeight: "500",
  },
  inputField: {
    paddingHorizontal: 16,
    height: 56,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "400",
  },
  error: {
    fontSize: 14,
  },
  errorContainer: { height: 20 },
  footer: {
    height: 24,
    position: "absolute",
    bottom: 0,
  },
});
