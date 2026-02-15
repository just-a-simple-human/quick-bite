import { View } from "react-native";
import { useResetPasswordForm } from "../model/use-auth-form";
import { styles } from "./styles";
import { Controller } from "react-hook-form";
import { Input } from "@/shared/ui/input";
import { SubmitButton } from "@/shared/ui/submit-button";
import { useResetPasswordMutation } from "../model/use-auth-mutation";
import { getItem } from "expo-secure-store";

const ResetPasswordForm = () => {
  const {
    control,
    formState: { errors, isValid, isDirty, isSubmitted },
    setError,
    handleSubmit,
  } = useResetPasswordForm();

  const mutation = useResetPasswordMutation(setError);
  const token = getItem("reset_token") || "";

  return (
    <View style={styles.form}>
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            ref={field.ref}
            onChangeText={field.onChange}
            label="Password"
            placeholder="Enter your password"
            textContentType="newPassword"
            secureTextEntry
            name={field.name}
            error={fieldState.error}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            ref={field.ref}
            onChangeText={field.onChange}
            label="Confirm password"
            placeholder="Enter your password again"
            textContentType="newPassword"
            secureTextEntry
            name={field.name}
            error={fieldState.error}
          />
        )}
      />
      <SubmitButton
        error={errors.root?.message}
        buttonText="Sign In"
        onPress={(e) =>
          handleSubmit((data) => {
            mutation.mutate({ newPassword: data.password, reset_token: token });
          })(e)
        }
        isLoading={mutation.isPending}
        disabled={!isValid && !errors.root && (isDirty || isSubmitted)}
      />
    </View>
  );
};

export { ResetPasswordForm };
