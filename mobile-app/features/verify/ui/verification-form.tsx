import { SubmitButton } from "@/shared/ui/submit-button";
import { useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { OtpInput, OtpInputRef } from "react-native-otp-entry";
import { ThemedText } from "@/shared/ui/themed";
import React, { Ref } from "react";

interface IVerificationFormProps {
  ref: Ref<OtpInputRef>;
  error?: string;
  resendTimer: number;
  isLoading: boolean;
  disabled: boolean;
  onSubmit: () => void;
  onChange: (text: string) => void;
  resendCode: () => void;
}

const VerificationForm = ({
  ref,
  error,
  resendTimer,
  isLoading,
  disabled,
  onChange,
  onSubmit,
  resendCode,
}: IVerificationFormProps) => {
  const theme = useTheme();

  return (
    <View style={styles.form}>
      <OtpInput
        numberOfDigits={6}
        ref={ref}
        hideStick
        focusColor={theme.colors.primary}
        focusStickBlinkingDuration={500}
        theme={{
          pinCodeContainerStyle: { borderColor: theme.colors.border },
          pinCodeTextStyle: { color: theme.colors.text },
        }}
        textInputProps={{ caretHidden: true }}
        onTextChange={onChange}
      />
      <View style={styles.resendContainer}>
        <ThemedText style={styles.text}>Haven&apos;t received code?</ThemedText>
        {resendTimer <= 0 ? (
          <TouchableOpacity onPress={resendCode}>
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
        onPress={onSubmit}
        isLoading={isLoading}
        disabled={disabled}
      />
    </View>
  );
};

export { VerificationForm };
