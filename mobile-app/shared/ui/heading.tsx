import { StyleSheet, TextProps } from "react-native";
import { ThemedText } from "./themed";

export const Heading = (props: TextProps) => {
  return (
    <ThemedText style={[styles.heading, props.style]}>
      {props.children}
    </ThemedText>
  );
};

export const SubHeading = (props: TextProps) => {
  return (
    <ThemedText style={[styles.subheading, props.style]}>
      {props.children}
    </ThemedText>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "600",
  },
  subheading: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "700",
  },
});
