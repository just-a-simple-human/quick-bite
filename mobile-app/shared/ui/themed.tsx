import { useTheme } from "@react-navigation/native";
import { Text, TextProps, View, ViewProps } from "react-native";

const ThemedText = (props: TextProps) => {
  const theme = useTheme();
  return (
    <Text {...props} style={[props.style, { color: theme.colors.text }]}>
      {props.children}
    </Text>
  );
};

const ThemedCard = (props: ViewProps) => {
  const theme = useTheme();
  return (
    <View
      {...props}
      style={[props.style, { backgroundColor: theme.colors.card }]}
    >
      {props.children}
    </View>
  );
};

export { ThemedText };
