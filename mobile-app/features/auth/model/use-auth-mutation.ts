import { handleServerErrors } from "@/shared/lib/handle-server-errors";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { authApi } from "../api/auth-api";
import {
  IAuthResponse,
  ILoginDto,
  IRegisterDto,
  IResetPasswordDto,
} from "./auth-dto";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

function useLoginMutation(setError: any) {
  return useMutation<AxiosResponse<IAuthResponse>, AxiosError<any>, ILoginDto>({
    mutationKey: ["auth"],
    mutationFn: authApi.login,
    onError: (error) => {
      handleServerErrors(error, setError);
    },
    onSuccess: (data) => {
      SecureStore.setItem("auth_token", data.data.auth_token);
      router.replace("/(tabs)");
    },
  });
}

function useRegisterMutation(setError: any) {
  return useMutation<
    AxiosResponse<IAuthResponse>,
    AxiosError<Record<string, string>>,
    IRegisterDto
  >({
    mutationKey: ["auth"],
    mutationFn: authApi.register,
    onError: (error) => {
      handleServerErrors(error, setError);
    },
    onSuccess: (data) => {
      SecureStore.setItem("auth_token", data.data.auth_token);
      router.push({
        pathname: "/verification/registration",
        params: { email: data.data.email },
      });
    },
  });
}

function useResetPasswordMutation(setError: any) {
  return useMutation<
    AxiosResponse<IAuthResponse>,
    AxiosError<Record<string, string>>,
    IResetPasswordDto
  >({
    mutationFn: authApi.resetPassword,
    onError: (error) => {
      handleServerErrors(error, setError);
    },
    onSuccess: (data) => {
      SecureStore.setItem("auth_token", data.data.auth_token);
      router.replace("/(tabs)");
    },
  });
}

export { useLoginMutation, useRegisterMutation, useResetPasswordMutation };
