import { DarkAppTheme } from "@/shared/consts/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    gap: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  error: { fontSize: 14 },
  submitButton: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 16,
    position: "absolute",
    bottom: 0,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: DarkAppTheme.colors.text,
  },
  recoverPasswordText: {
    marginTop: "auto",
    fontSize: 16,
  },
  recoverPasswordLink: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});
