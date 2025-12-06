import React from "react";
import { VerificationForm } from "@/features/verify";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "@/shared/ui/themed";
import { Link } from "expo-router";

const VerificationScreen = () => {
  const theme = useTheme();
  const email = "afanasovkonstantin2005@gmail.com";
  return (
    <SafeAreaView
      style={[
        styles.verificationScreen,
        { backgroundColor: theme.colors.card },
      ]}
    >
      <ThemedText style={styles.title}>Please check your email</ThemedText>
      <ThemedText textBreakStrategy="highQuality" style={styles.text}>
        We have sent a verification code to{" "}
        <ThemedText style={{ fontWeight: "500" }}>{email}</ThemedText>
      </ThemedText>
      <VerificationForm />
      <ThemedText
        style={[styles.text, { textAlign: "center", marginTop: "auto" }]}
      >
        Remember password?{" "}
        <Link
          style={[styles.link, { color: theme.colors.primary }]}
          href={"/sign-in"}
        >
          Sign In
        </Link>
      </ThemedText>
    </SafeAreaView>
  );
};

export { VerificationScreen };
