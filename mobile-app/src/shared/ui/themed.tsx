import { useTheme } from "@react-navigation/native";
import { Text, TextProps } from "react-native";

const ThemedText = (props: TextProps) => {
  const theme = useTheme();
  return (
    <Text
      {...props}
      style={[{ color: theme.colors.text, fontSize: 16 }, props.style]}
    >
      {props.children}
    </Text>
  );
};

export { ThemedText };
