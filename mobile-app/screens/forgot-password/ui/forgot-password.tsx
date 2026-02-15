import { ForgotPasswordForm } from "@/features/auth";
import { FullScreen } from "@/shared/ui/full-screen";
import { Heading } from "@/shared/ui/heading";
import { ProgressBar } from "@/shared/ui/progress-bar";
import { ThemedText } from "@/shared/ui/themed";

const ForgotPasswordScreen = () => {
  return (
    <FullScreen>
      <Heading>Forgot password?</Heading>
      <ThemedText textBreakStrategy="balanced" style={{ fontSize: 18 }}>
        Don&apos;t worry! Enter your email address and we&apos;ll send you a
        6-digit code to reset your password.
      </ThemedText>
      <ForgotPasswordForm />
      <ProgressBar size={3} step={1} style={{ marginTop: "auto" }} />
    </FullScreen>
  );
};

export { ForgotPasswordScreen };
