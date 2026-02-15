import { View } from "react-native";
import { styles } from "./styles";
import { useForgotPasswordForm } from "../model/use-auth-form";
import { Input } from "@/shared/ui/input";
import { Controller } from "react-hook-form";
import { SubmitButton } from "@/shared/ui/submit-button";
import { router } from "expo-router";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "@/shared/ui/themed";

const ForgotPasswordForm = () => {
  const theme = useTheme();

  const {
    control,
    formState: { errors, isValid, isDirty, isSubmitted },
    handleSubmit,
  } = useForgotPasswordForm();

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
      <ThemedText>
        Might be in{" "}
        <ThemedText
          style={{
            color: theme.colors.primary,
            textDecorationLine: "underline",
          }}
        >
          spam
        </ThemedText>{" "}
        - take a look there!
      </ThemedText>
      <SubmitButton
        buttonText="Send code"
        error={errors.root?.message}
        onPress={(e) =>
          handleSubmit((data) =>
            router.push({
              pathname: "/verification/reset-password",
              params: { email: data.email },
            }),
          )(e)
        }
        isLoading={false}
        disabled={!isValid && !errors.root && (isDirty || isSubmitted)}
      />
    </View>
  );
};

export { ForgotPasswordForm };
