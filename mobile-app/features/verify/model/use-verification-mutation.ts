import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { router } from "expo-router";
import { verificationApi } from "../api/verification-api";

export function useVerifyRegistrationMutation(setError: any) {
  return useMutation<unknown, AxiosError, { email: string; code: string }>({
    mutationFn: async ({ email, code }) => {
      await verificationApi.verifyRegistration(email, code);
    },
    onError: (error) => {
      setError(error.message);
    },
    onSuccess: () => router.replace("/(tabs)/cart"),
  });
}

export function useVerifyResetPasswordMutation(setError: any) {
  return useMutation<unknown, AxiosError, { email: string; code: string }>({
    mutationFn: async ({ email, code }) => {
      await verificationApi.verifyResetPassword(email, code);
    },
    onError: (error) => {
      setError(error.message);
    },
    onSuccess: () => {
      router.replace("/reset-password");
    },
  });
}

export function useSendCodeMutation(
  setError: any,
  updateResendTimer: () => void,
) {
  return useMutation<unknown, AxiosError, string>({
    mutationFn: async (email) => await verificationApi.sendCode(email),
    onError: (error) => setError(error.message),
    onSuccess: updateResendTimer,
  });
}
