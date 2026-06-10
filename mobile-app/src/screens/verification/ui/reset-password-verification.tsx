import { ResetPasswordVerificationForm } from "@/features/verify";
import { ThemedText } from "@/shared/ui/themed";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Heading } from "@/shared/ui/heading";
import { FullScreen } from "@/shared/ui/full-screen";
import { ProgressBar } from "@/shared/ui/progress-bar";

const ResetPasswordVerificationScreen = () => {
  const { email } = useLocalSearchParams();

  return (
    <FullScreen>
      <Heading textBreakStrategy="balanced">Please, check your email</Heading>
      <ThemedText textBreakStrategy="highQuality" style={{ fontSize: 18 }}>
        We have sent a verification code to{" "}
        <ThemedText style={{ fontWeight: "500", fontSize: 18 }}>
          {email}
        </ThemedText>
      </ThemedText>
      <ResetPasswordVerificationForm />
      <ProgressBar size={3} step={2} style={{ marginTop: "auto" }} />
    </FullScreen>
  );
};

export { ResetPasswordVerificationScreen };
