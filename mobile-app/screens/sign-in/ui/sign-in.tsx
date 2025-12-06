import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "@/shared/ui/themed";
import { SignInForm } from "@/features/auth";
import { Link } from "expo-router";

const SignIn = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.signInScreen, { backgroundColor: theme.colors.card }]}
    >
      <ThemedText style={styles.title}>Hi, Welcome!</ThemedText>
      <SignInForm />
      <ThemedText style={styles.bottomText}>
        Are you new here?{" "}
        <Link
          style={[styles.bottomLink, { color: theme.colors.primary }]}
          href={"/sign-up"}
        >
          Sign Up
        </Link>
      </ThemedText>
    </SafeAreaView>
  );
};

export { SignIn };
