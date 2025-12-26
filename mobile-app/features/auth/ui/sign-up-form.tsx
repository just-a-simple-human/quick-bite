import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Input } from "@/shared/ui/input/input";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { Checkbox } from "@/shared/ui/checkbox";
import { ThemedText } from "@/shared/ui/themed";
import { registerSubmitHandler, useRegisterForm } from "../model/form";
import { Controller } from "react-hook-form";

const SignUpForm = () => {
  const theme = useTheme();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useRegisterForm();

  return (
    <View style={styles.form}>
      <Controller
        name="email"
        control={control}
        render={({
          field: { value, onChange, name },
          fieldState: { error },
        }) => (
          <Input
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            value={value}
            onChangeText={onChange}
            name={name}
            error={error}
          />
        )}
      />

      <Controller
        name="username"
        control={control}
        render={({
          field: { value, onChange, name },
          fieldState: { error },
        }) => (
          <Input
            label="Username"
            placeholder="Enter your username"
            textContentType="username"
            autoComplete="username-new"
            value={value}
            onChangeText={onChange}
            name={name}
            error={error}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, name }, fieldState: { error } }) => (
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            autoComplete="new-password"
            textContentType="oneTimeCode"
            onChangeText={(text) => onChange(text)}
            name={name}
            error={error}
            inputMode="text"
          />
        )}
      />

      <View style={styles.checkboxContainer}>
        <Controller
          name="termsAndConditions"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox
              isChecked={value}
              toggleIsChecked={() => onChange(!value)}
            />
          )}
        />
        <ThemedText>I accept the terms and privacy policy</ThemedText>
      </View>

      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: theme.colors.primary }]}
        onPress={(e) => {
          handleSubmit(registerSubmitHandler)(e);
        }}
      >
        <Text style={styles.submitButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export { SignUpForm };
