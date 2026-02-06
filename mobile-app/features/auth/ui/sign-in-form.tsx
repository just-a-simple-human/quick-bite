import { Input } from "@/shared/ui/input/input";
import { ThemedText } from "@/shared/ui/themed";
import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { useLoginForm } from "../model/use-auth-form";
import { useLoginMutation } from "../model/use-auth-mutation";
import { styles } from "./styles";
import { SubmitButton } from "./submit-button";

const SignInForm = () => {
  const theme = useTheme();

  const {
    control,
    formState: { errors, isValid, isDirty, isSubmitted },
    setError,
    handleSubmit,
  } = useLoginForm();

  const mutation = useLoginMutation(setError);

  return (
    <View style={styles.form}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            value={field.value}
            onChangeText={field.onChange}
            name={field.name}
            error={fieldState.error}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            ref={field.ref}
            onChangeText={field.onChange}
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
            name={field.name}
            error={fieldState.error}
          />
        )}
      />

      <SubmitButton
        errors={errors}
        buttonText="Sign In"
        onPress={(e) =>
          handleSubmit((data) => {
            mutation.mutate(data);
          })(e)
        }
        isLoading={mutation.isPending}
        disabled={!isValid && !errors.root && (isDirty || isSubmitted)}
      />
    </View>
  );
};

export { SignInForm };
