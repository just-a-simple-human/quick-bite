import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { DarkAppTheme } from "@/shared/consts/colors";

interface IProps {
  error?: string;
  onPress: (e: any) => void | Promise<void>;
  buttonText: string;
  isLoading: boolean;
  disabled?: boolean;
}

const SubmitButton = ({
  error,
  onPress,
  buttonText,
  isLoading,
  disabled = false,
}: IProps) => {
  const theme = useTheme();
  const height = useSharedValue(56);
  const animatedStyle = useAnimatedStyle(() => ({
    height:
      height.value === 56
        ? withDelay(250, withSpring(height.value, { duration: 250 }))
        : withSpring(height.value, { duration: 250 }),
  }));

  useEffect(() => {
    height.value = error ? 84 : 56;
  }, [error, height]);

  return (
    <Animated.View style={animatedStyle}>
      {error && (
        <Animated.Text
          entering={FadeInUp.duration(250).delay(250)}
          exiting={FadeOutUp.duration(250)}
          style={{ fontSize: 14, color: theme.colors.notification }}
        >
          {error}
        </Animated.Text>
      )}
      <TouchableOpacity
        style={[
          styles.submitButton,
          {
            backgroundColor: disabled
              ? theme.colors.border
              : theme.colors.primary,
          },
        ]}
        onPress={(e) => onPress(e.nativeEvent)}
        disabled={disabled || isLoading}
      >
        <Text style={styles.submitButtonText}>{buttonText}</Text>
        {isLoading && <ActivityIndicator color={DarkAppTheme.colors.text} />}
      </TouchableOpacity>
    </Animated.View>
  );
};

export { SubmitButton };

const styles = StyleSheet.create({
  submitButton: {
    width: "100%",
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 16,
    position: "absolute",
    bottom: 0,
    transitionProperty: "backgroundColor",
    transitionDuration: "0.3s",
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: DarkAppTheme.colors.text,
  },
});
