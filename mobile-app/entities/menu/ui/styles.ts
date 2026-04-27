import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  card: {
    padding: 12,
    gap: 8,
    borderRadius: 12,
    alignItems: "center",
  },
  image: {
    width: "90%",
    aspectRatio: 1,
    borderRadius: 12,
  },
  title: {
    height: 40,
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 16,
    flexShrink: 1,
    lineHeight: 20,
  },
  footer: {
    height: 40,
    flexDirection: "row",
    gap: 8,
  },
  footerInfo: {
    height: 40,
    flex: 1,
    borderRadius: 12,
  },
  price: {
    fontSize: 18,
    lineHeight: 22,
  },
  size: {
    fontSize: 14,
    lineHeight: 18,
  },
  button: {
    width: 56,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
