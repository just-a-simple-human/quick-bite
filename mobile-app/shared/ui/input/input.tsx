import { TextInputProps, TextInput, Text } from "react-native";
import { forwardRef, ReactNode, useEffect } from "react";
import { ThemedText } from "../themed";
import { useTheme } from "@react-navigation/native";
import { styles } from "./styles";
import { FieldError } from "react-hook-form";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { View } from "react-native";

interface IProps extends TextInputProps {
  name: string;
  label: string;
  BottomLink?: () => ReactNode;
  error?: FieldError;
}

const Input = forwardRef<TextInput, IProps>(
  ({ label, BottomLink, error, ...props }, ref?) => {
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
    }, [error]);

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
  }
);

export { Input };
