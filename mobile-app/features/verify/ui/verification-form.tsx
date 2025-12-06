import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { OtpInput, OtpInputRef } from "react-native-otp-entry";
import { ThemedText } from "@/shared/ui/themed";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";

const VerificationForm = () => {
  const theme = useTheme();
  const inputRef = useRef<OtpInputRef>(null);
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
      />
      <View style={styles.resendContainer}>
        <ThemedText style={styles.text}>I didn’t receive a code </ThemedText>
        <TouchableOpacity>
          <Text style={[styles.resendLink, { color: theme.colors.primary }]}>
            Send again
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: theme.colors.primary }]}
      >
        <Text style={styles.submitButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export { VerificationForm };
