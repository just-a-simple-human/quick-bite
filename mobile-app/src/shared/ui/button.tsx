import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";
import { DarkAppTheme } from "../consts/colors";
import { ReactNode } from "react";
import { useTheme } from "@react-navigation/native";

interface IProps {
  text: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?(event: GestureResponderEvent): void;
  renderLeftIcon?(): ReactNode;
  renderRightIcon?(): ReactNode;
}

export function Button({
  text,
  buttonStyle,
  textStyle,
  renderLeftIcon,
  renderRightIcon,
  onPress,
}: IProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: theme.colors.primary },
        buttonStyle,
      ]}
    >
      {renderLeftIcon && renderLeftIcon()}
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {renderRightIcon && renderRightIcon()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 16,
    transitionProperty: "backgroundColor",
    transitionDuration: "0.3s",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: DarkAppTheme.colors.text,
  },
});
