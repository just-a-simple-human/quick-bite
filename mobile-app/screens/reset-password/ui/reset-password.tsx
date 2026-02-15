import { ResetPasswordForm } from "@/features/auth";
import { FullScreen } from "@/shared/ui/full-screen";
import { Heading } from "@/shared/ui/heading";
import { ProgressBar } from "@/shared/ui/progress-bar";

const ResetPasswordScreen = () => {
  return (
    <FullScreen>
      <Heading>Create your new password!</Heading>
      <ResetPasswordForm />
      <ProgressBar size={3} step={3} style={{ marginTop: "auto" }} />
    </FullScreen>
  );
};

export { ResetPasswordScreen };
