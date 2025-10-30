import { useTheme } from "@react-navigation/native";
import { Text, TextProps } from "react-native";

function ThemedText(props: TextProps) {
  const theme = useTheme();
  return (
    <Text {...props} style={[props.style, { color: theme.colors.text }]}>
      {props.children}
    </Text>
  );
}

export { ThemedText };
