import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Input } from "@/shared/ui/input/input";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "@/shared/ui/themed";
import { Link } from "expo-router";
import { loginSubmitHandler, useLoginForm } from "../model/form";
import { Controller } from "react-hook-form";
import { serverErrorHandler } from "@/shared/utils/server-error-handler";
import { SubmitButton } from "./submit-button";

const SignInForm = () => {
  const theme = useTheme();

  const {
    control,
    formState: { errors },
    setError,
    clearErrors,
    handleSubmit,
  } = useLoginForm();

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
        name="password"
        control={control}
        render={({ field: { onChange, name, ref }, fieldState: { error } }) => (
          <Input
            ref={ref}
            onChangeText={onChange}
            label="Password"
            placeholder="Enter your password"
            textContentType="password"
            secureTextEntry
            BottomLink={() => (
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
            )}
            name={name}
            error={error}
          />
        )}
      />

      <SubmitButton
        errors={errors}
        buttonText="Sign In"
        onPress={(e) =>
          handleSubmit(
            loginSubmitHandler((error) =>
              serverErrorHandler<typeof errors>(error, setError, clearErrors)
            )
          )(e)
        }
      />
    </View>
  );
};

export { SignInForm };
