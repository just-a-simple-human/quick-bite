import { RegistrationVerificationForm } from "@/features/verify";
import { ThemedText } from "@/shared/ui/themed";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const RegistrationVerificationScreen = () => {
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
      <RegistrationVerificationForm />
    </SafeAreaView>
  );
};

export { RegistrationVerificationScreen };
