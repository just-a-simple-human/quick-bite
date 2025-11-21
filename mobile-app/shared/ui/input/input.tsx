import { View, TextInputProps, TextInput } from "react-native";
import { ReactNode } from "react";
import { ThemedText } from "../themed";
import { useTheme } from "@react-navigation/native";
import { styles } from "./styles";

interface IProps extends TextInputProps {
  label: string;
  bottomLink?: () => ReactNode;
}

const Input = ({ label, bottomLink, ...props }: IProps) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <TextInput
        {...props}
        placeholderTextColor={theme.colors.border}
        cursorColor={theme.colors.border}
        enterKeyHint={props.enterKeyHint || "enter"}
        style={[
          styles.inputField,
          {
            borderColor: theme.colors.border,
            color: theme.colors.text,
          },
        ]}
      />
      {bottomLink && bottomLink()}
    </View>
  );
};

export { Input };
