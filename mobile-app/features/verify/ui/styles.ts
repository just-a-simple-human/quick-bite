import { DarkAppTheme } from "@/shared/consts/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    gap: 20,
  },
  text: {
    fontSize: 16,
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  resendLink: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  submitButton: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 16,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: DarkAppTheme.colors.text,
  },
});
