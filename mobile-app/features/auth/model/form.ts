import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema, registerSchema } from "../types/schema";
import { InferType } from "yup";
import { authApi } from "../api/auth";
import { verificationApi } from "@/features/verify";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { AxiosError, isAxiosError } from "axios";

function useLoginForm() {
  return useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(authSchema),
  });
}

function useRegisterForm() {
  return useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      termsAndConditions: false,
    },
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });
}

const loginSubmitHandler = (onError: (error: AxiosError) => void) => {
  const submitHandler: SubmitHandler<InferType<typeof authSchema>> = async (
    data
  ) => {
    try {
      const response = await authApi.login(
        {
          email: data.email,
          password: data.password,
        },
        onError
      );
      if (!response) return;
      await SecureStore.setItemAsync("auth_token", response.data["auth_token"]);
      router.push("/");
    } catch (error) {}
  };
  return submitHandler;
};

const registerSubmitHandler = (onError: (error: AxiosError) => void) => {
  const submitHandler: SubmitHandler<InferType<typeof registerSchema>> = async (
    data
  ) => {
    try {
      await authApi.register(
        {
          email: data.email,
          name: data.username,
          password: data.password,
        },
        onError
      );

      await AsyncStorage.setItem("account-email", data.email);

      await verificationApi.sendCode(data.email);
      router.push("/verification");
    } catch (e) {}
  };
  return submitHandler;
};

export {
  useLoginForm,
  useRegisterForm,
  loginSubmitHandler,
  registerSubmitHandler,
};
