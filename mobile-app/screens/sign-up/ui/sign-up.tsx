import { SignUpForm } from "@/features/auth";
import { ThemedText } from "@/shared/ui/themed";
import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { styles } from "./styles";
import { Heading } from "@/shared/ui/heading";
import { FullScreen } from "@/shared/ui/full-screen";

const SignUp = () => {
  const theme = useTheme();
  return (
    <FullScreen>
      <Heading>Create account!</Heading>
      <SignUpForm />
      <ThemedText style={styles.bottomText}>
        Already have an account?{" "}
        <Link
          style={[styles.bottomLink, { color: theme.colors.primary }]}
          href={"/auth/sign-in"}
        >
          Sign In
        </Link>
      </ThemedText>
    </FullScreen>
  );
};

export { SignUp };
