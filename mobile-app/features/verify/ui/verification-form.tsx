import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { OtpInput, OtpInputRef } from "react-native-otp-entry";
import { ThemedText } from "@/shared/ui/themed";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { sendCode, verify } from "../model/use-verification-form";

const VerificationForm = () => {
  const theme = useTheme();
  const inputRef = useRef<OtpInputRef>(null);
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    sendCode();
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
        <ThemedText style={styles.text}>I didn’t receive a code </ThemedText>
        <TouchableOpacity
          onPress={() => {
            sendCode();
          }}
        >
          <Text style={[styles.resendLink, { color: theme.colors.primary }]}>
            Send again
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: theme.colors.primary }]}
        onPress={() => verify(code)}
      >
        <Text style={styles.submitButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export { VerificationForm };
