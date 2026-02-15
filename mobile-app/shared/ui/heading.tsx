import { StyleSheet, TextProps } from "react-native";
import { ThemedText } from "./themed";

const Heading = (props: TextProps) => {
  return (
    <ThemedText style={[styles.heading, props.style]}>
      {props.children}
    </ThemedText>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "600",
  },
});

export { Heading };
