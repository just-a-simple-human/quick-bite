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

export const modalStyles = StyleSheet.create({
  modal: {
    minHeight: "100%",
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  image: {
    marginHorizontal: "auto",
    width: 192,
    borderRadius: 16,
    aspectRatio: 1,
  },
  title: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
  },
  description: { marginTop: 12 },
  nutriotion: { width: "100%", marginTop: 12, gap: 8 },
  nutriotionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  nutriotionList: { flexDirection: "row", gap: 12 },
  nutriotionItem: {
    flex: 1,
  },
  nutriotionSubtitle: { fontSize: 14 },
  nutriotionText: { fontSize: 16, fontWeight: "500", opacity: 0.7 },
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
