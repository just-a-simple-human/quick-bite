import React from "react";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "@/shared/ui/themed";
import { SignInForm } from "@/features/auth";
import { Link } from "expo-router";
import { Heading } from "@/shared/ui/heading";
import { FullScreen } from "@/shared/ui/full-screen";

const SignIn = () => {
  const theme = useTheme();

  return (
    <FullScreen>
      <Heading>Hi, Welcome!</Heading>
      <SignInForm />
      <ThemedText style={styles.bottomText}>
        Are you new here?{" "}
        <Link
          style={[styles.bottomLink, { color: theme.colors.primary }]}
          href={"/auth/sign-up"}
        >
          Sign Up
        </Link>
      </ThemedText>
    </FullScreen>
  );
};

export { SignIn };
