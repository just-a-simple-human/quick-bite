import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { styles } from "./styles";
import { FieldErrors } from "react-hook-form";
import { useTheme } from "@react-navigation/native";

interface IProps {
  errors: FieldErrors;
  onPress: (e: any) => void | Promise<void>;
  buttonText: string;
}

const SubmitButton = ({ errors, onPress, buttonText }: IProps) => {
  const theme = useTheme();
  const height = useSharedValue(56);
  const animatedStyle = useAnimatedStyle(() => ({
    height:
      height.value === 56
        ? withDelay(250, withSpring(height.value, { duration: 250 }))
        : withSpring(height.value, { duration: 250 }),
  }));

  useEffect(() => {
    height.value = errors.root ? 84 : 56;
  }, [errors.root]);

  return (
    <Animated.View style={animatedStyle}>
      {errors.root && (
        <Animated.Text
          entering={FadeInUp.duration(250).delay(250)}
          exiting={FadeOutUp.duration(250)}
          style={[styles.error, { color: theme.colors.notification }]}
        >
          {errors.root.message}
        </Animated.Text>
      )}
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: theme.colors.primary }]}
        onPress={(e) => onPress(e.nativeEvent)}
      >
        <Text style={styles.submitButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export { SubmitButton };
