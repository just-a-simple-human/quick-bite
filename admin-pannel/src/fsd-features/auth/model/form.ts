import { SubmitHandler, useForm } from "react-hook-form";
import { authApi } from "../api/api";
import { redirect } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../types/schema";
import { InferType } from "yup";

function useLoginForm() {
  return useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
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

const loginSubmitHandler: SubmitHandler<InferType<typeof loginSchema>> = async (
  data
) => {
  const response = await authApi.login({
    email: data.email,
    password: data.password,
  });
  if (response.status === 201) {
    window.localStorage.setItem("auth_token", response.data.auth_token);
    redirect("/");
  }
};

const registerSubmitHandler: SubmitHandler<
  InferType<typeof registerSchema>
> = async (data) => {
  const response = await authApi.register({
    email: data.email,
    username: data.username,
    password: data.password,
  });
  if (response.status === 201) {
    window.localStorage.setItem("auth_token", response.data.auth_token);
    redirect("/");
  }
};

export {
  useLoginForm,
  useRegisterForm,
  loginSubmitHandler,
  registerSubmitHandler,
};
