import { useCallback } from "react";
import { useVerificationForm } from "../model/use-verification-form";
import {
  useSendCodeMutation,
  useVerifyResetPasswordMutation,
} from "../model/use-verification-mutation";
import { VerificationForm } from "./verification-form";

const ResetPasswordVerificationForm = () => {
  const state = useVerificationForm();
  const mutation = useVerifyResetPasswordMutation(state.setError);
  const sendCodeMutation = useSendCodeMutation(state.setError, () =>
    state.setResendTimer(60),
  );

  const onSubmit = useCallback(() => {
    mutation.mutate({
      email: state.email,
      code: state.code,
    });
  }, [state.email, state.code, mutation]);

  return (
    <VerificationForm
      ref={state.ref}
      error={state.error}
      disabled={state.code.length < 6}
      isLoading={mutation.isPending}
      resendTimer={state.resendTimer}
      onChange={(text) => state.setCode(text)}
      onSubmit={onSubmit}
      resendCode={() => sendCodeMutation.mutate(state.email)}
    />
  );
};

export { ResetPasswordVerificationForm };
