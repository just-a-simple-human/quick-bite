import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { OtpInput, OtpInputRef } from "react-native-otp-entry";
import { ThemedText } from "@/shared/ui/themed";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import {
  useSendCodeMutation,
  useVerifyMutation,
} from "../model/use-verification-mutation";
import { SubmitButton } from "@/shared/ui/submit-button";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";

const VerificationForm = () => {
  const theme = useTheme();
  const params = useLocalSearchParams();
  const email = params.email as string;

  const inputRef = useRef<OtpInputRef>(null);
  const [code, setCode] = useState<string>("");
  const [isInitialSend, setIsInitialSend] = useState<boolean>(true);
  const [resendTimer, setResendTimer] = useState<number>(60);
  const [error, setError] = useState<string>();

  const verifyMutation = useVerifyMutation((err: string) => {
    setError(err);
  });

  const sendCodeMutation = useSendCodeMutation(setError, () =>
    setResendTimer(60),
  );

  useEffect(() => {
    if (isInitialSend) {
      sendCodeMutation.mutate(email);
      setIsInitialSend(false);
    }
  }, [email, isInitialSend, sendCodeMutation]);

  useEffect(() => {
    const id = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(id);
  });

  return (
    <View style={styles.form}>
      <OtpInput
        numberOfDigits={6}
        ref={inputRef}
        hideStick
        focusColor={theme.colors.primary}
        focusStickBlinkingDuration={500}
        theme={{
          pinCodeContainerStyle: { borderColor: theme.colors.border },
          pinCodeTextStyle: { color: theme.colors.text },
        }}
        textInputProps={{ caretHidden: true }}
        onTextChange={(text) => setCode(text)}
      />
      <View style={styles.resendContainer}>
        <ThemedText style={styles.text}>Haven&apos;t received code?</ThemedText>
        {resendTimer <= 0 ? (
          <TouchableOpacity
            onPress={() => {
              sendCodeMutation.mutate(email);
            }}
          >
            <Text style={[styles.resendLink, { color: theme.colors.primary }]}>
              Send again
            </Text>
          </TouchableOpacity>
        ) : (
          <Text>Send again in {resendTimer} seconds</Text>
        )}
      </View>
      <SubmitButton
        buttonText="Verify"
        error={error}
        onPress={() => verifyMutation.mutate({ email, code })}
        isLoading={verifyMutation.isPending}
        disabled={code.length < 6}
      />
    </View>
  );
};

export { VerificationForm };
