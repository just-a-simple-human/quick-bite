import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input } from "@/shared/ui/input/input";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { Checkbox } from "@/shared/ui/checkbox";
import { ThemedText } from "@/shared/ui/themed";

const SignUpForm = () => {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.form}>
      <Input
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        textContentType="emailAddress"
        inputMode="email"
      />
      <Input
        label="Username"
        placeholder="Enter your username"
        keyboardType="default"
        textContentType="username"
        autoComplete="username-new"
        contextMenuHidden
        disableKeyboardShortcuts
        inputMode="text"
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        textContentType="newPassword"
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          isChecked={isChecked}
          toggleIsChecked={() => setIsChecked((prev) => !prev)}
        />
        <ThemedText>I accept the terms and privacy policy</ThemedText>
      </View>
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: theme.colors.primary }]}
      >
        <Text style={styles.submitButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export { SignUpForm };
