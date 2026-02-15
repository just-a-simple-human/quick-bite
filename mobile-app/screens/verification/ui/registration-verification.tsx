import { RegistrationVerificationForm } from "@/features/verify";
import { ThemedText } from "@/shared/ui/themed";
import React from "react";
import { Heading } from "@/shared/ui/heading";
import { FullScreen } from "@/shared/ui/full-screen";

const RegistrationVerificationScreen = () => {
  const email = "afanasovkonstantin2005@gmail.com";
  return (
    <FullScreen>
      <Heading textBreakStrategy="balanced">Please, check your email</Heading>
      <ThemedText textBreakStrategy="highQuality" style={{ fontSize: 18 }}>
        We have sent a verification code to{" "}
        <ThemedText style={{ fontWeight: "500" }}>{email}</ThemedText>
      </ThemedText>
      <RegistrationVerificationForm />
    </FullScreen>
  );
};

export { RegistrationVerificationScreen };
