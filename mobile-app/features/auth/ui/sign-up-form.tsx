import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input/input";
import { ThemedText } from "@/shared/ui/themed";
import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { useRegisterForm } from "../model/use-auth-form";
import { useRegisterMutation } from "../model/use-auth-mutation";
import { styles } from "./styles";
import { SubmitButton } from "./submit-button";

const SignUpForm = () => {
  const {
    control,
    setError,
    formState: { errors, isValid, isDirty, isSubmitted },
    handleSubmit,
  } = useRegisterForm();

  const mutation = useRegisterMutation(setError);

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
        name="username"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            label="Username"
            placeholder="Enter your username"
            textContentType="username"
            autoComplete="username-new"
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
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            autoComplete="new-password"
            textContentType="newPassword"
            ref={field.ref}
            onChangeText={(text) => field.onChange(text)}
            name={field.name}
            error={fieldState.error}
            inputMode="text"
          />
        )}
      />

      <View style={styles.checkboxContainer}>
        <Controller
          name="termsAndConditions"
          control={control}
          render={({ field }) => (
            <Checkbox
              isChecked={field.value}
              toggleIsChecked={() => field.onChange(!field.value)}
            />
          )}
        />
        <ThemedText>I accept the terms and privacy policy</ThemedText>
      </View>

      <SubmitButton
        errors={errors}
        buttonText="Sign Up"
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

export { SignUpForm };
