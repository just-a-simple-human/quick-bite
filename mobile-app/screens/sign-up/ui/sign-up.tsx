import { useTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ThemedText } from "@/shared/ui/themed";
import { Input } from "@/shared/ui/input/input";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { SignUpForm } from "@/features/auth";
import { Link } from "expo-router";

const SignUp = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.signUpScreen, { backgroundColor: theme.colors.card }]}
    >
      <ThemedText style={styles.title}>Create new account!</ThemedText>
      <SignUpForm />
      <ThemedText style={styles.bottomText}>
        Already have an account?{" "}
        <Link
          style={[styles.bottomLink, { color: theme.colors.primary }]}
          href={"/sign-in"}
        >
          Sign In
        </Link>
      </ThemedText>
    </SafeAreaView>
  );
};

export { SignUp };
