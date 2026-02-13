import { useTheme } from "@react-navigation/native";
import { forwardRef, ReactNode, useEffect } from "react";
import { FieldError } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { ThemedText } from "./themed";

interface IProps extends TextInputProps {
  name: string;
  label: string;
  BottomLink?: () => ReactNode;
  error?: FieldError;
}

const Input = forwardRef<TextInput, IProps>(function InputComponent(
  { label, BottomLink, error, ...props },
  ref?,
) {
  const theme = useTheme();
  const height = useSharedValue(BottomLink ? 124 : 92);
  const animatedStyle = useAnimatedStyle(() => ({
    height:
      height.value === 92 || height.value === 124
        ? withDelay(250, withSpring(height.value, { duration: 250 }))
        : withSpring(height.value, { duration: 250 }),
  }));

  useEffect(() => {
    if (BottomLink) {
      height.value = error ? 152 : 124;
    } else {
      height.value = error ? 120 : 92;
    }
  }, [error, BottomLink, height]);

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        { paddingBottom: BottomLink ? 32 : 0 },
      ]}
    >
      <View style={styles.header}>
        <ThemedText style={styles.label}>{label}</ThemedText>
      </View>

      <TextInput
        {...props}
        ref={ref}
        placeholderTextColor={theme.colors.border}
        cursorColor={theme.colors.border}
        style={[
          styles.inputField,
          {
            borderColor: theme.colors.border,
            color: theme.colors.text,
          },
        ]}
      />
      {error && (
        <Animated.View
          entering={FadeInUp.duration(250).delay(250)}
          exiting={FadeOutUp.duration(250)}
        >
          <Text style={[styles.error, { color: theme.colors.notification }]}>
            {error?.message}
          </Text>
        </Animated.View>
      )}
      {BottomLink && (
        <View style={styles.footer}>
          <BottomLink />
        </View>
      )}
    </Animated.View>
  );
});

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "transparent",
    gap: 8,
  },
  header: { height: 28 },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
  inputField: {
    paddingHorizontal: 16,
    height: 56,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "400",
  },
  errorContainer: { height: 20 },
  error: { fontSize: 14 },
  footer: {
    height: 24,
    position: "absolute",
    bottom: 0,
  },
});

export { Input };
