import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    gap: 16,

    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  tabBarButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarButtonActive: {
    borderColor: "transparent",
  },
  tabBarTitle: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export { styles };
