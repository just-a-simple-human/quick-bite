import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { router } from "expo-router";
import { verificationApi } from "../api/verification-api";
import { IVerificationDto, IVerificationError } from "./verification-dto";
import { setItem } from "expo-secure-store";

export function useVerifyRegistrationMutation(setError: any) {
  return useMutation<unknown, AxiosError<IVerificationError>, IVerificationDto>(
    {
      mutationFn: verificationApi.verifyRegistration,
      onError: (error) => {
        setError(error.response?.data.message || "Something went wrong!");
      },
      onSuccess: () => router.replace("/(tabs)/cart"),
    },
  );
}

export function useVerifyResetPasswordMutation(setError: any) {
  return useMutation<
    AxiosResponse<{ reset_token: string }>,
    AxiosError<IVerificationError>,
    IVerificationDto
  >({
    mutationFn: verificationApi.verifyResetPassword,
    onError: (error) => {
      setError(error.response?.data.message || "Something went wrong!");
    },
    onSuccess: (data) => {
      setItem("reset_token", data.data.reset_token);
      router.push("/auth/reset-password");
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
