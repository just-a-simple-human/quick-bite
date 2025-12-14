import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input } from "@/shared/ui/input/input";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { Checkbox } from "@/shared/ui/checkbox";
import { ThemedText } from "@/shared/ui/themed";
import { Link } from "expo-router";
import { useLoginForm } from "../model/form";
import { Controller } from "react-hook-form";

const SignInForm = () => {
  const theme = useTheme();
  const { control } = useLoginForm();

  return (
    <View style={styles.form}>
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            inputMode="email"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            label="Password"
            placeholder="Enter your password"
            textContentType="newPassword"
            secureTextEntry
            bottomLink={() => (
              <View>
                <ThemedText style={styles.recoverPasswordText}>
                  Forgot your password?{" "}
                  <Link
                    style={[
                      styles.recoverPasswordLink,
                      { color: theme.colors.primary },
                    ]}
                    href={"/recover-password"}
                  >
                    Recover now
                  </Link>
                </ThemedText>
              </View>
            )}
          />
        )}
      />

      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: theme.colors.primary }]}
      >
        <Text style={styles.submitButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export { SignInForm };
