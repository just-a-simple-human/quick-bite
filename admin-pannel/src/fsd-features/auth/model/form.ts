import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "../types/login";
import { IRegisterForm } from "../types/register";
import { authApi } from "../api/api";
import { redirect } from "next/navigation";

function useLoginForm() {
  return useForm<ILoginForm>({
    defaultValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
    mode: "onSubmit",
  });
}

function useRegisterForm() {
  return useForm<IRegisterForm>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      termsAndConditions: false,
    },
    mode: "onSubmit",
  });
}

const loginSubmitHandler: SubmitHandler<ILoginForm> = async (data) => {
  const response = await authApi.login({
    email: data.email,
    password: data.password,
  });
  if (response.status === 201) {
    window.localStorage.setItem("auth_token", response.data.auth_token);
    redirect("/");
  }
};

const registerSubmitHandler: SubmitHandler<IRegisterForm> = async (data) => {
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
