import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "../types/login";
import { IRegisterForm } from "../types/register";
import { authApi } from "../api/api";

function useLoginForm() {
  return useForm<ILoginForm>({
    defaultValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
    mode: "all",
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
    mode: "all",
  });
}

const loginSubmitHandler: SubmitHandler<ILoginForm> = (data) => {
  authApi.login({
    email: data.email,
    password: data.password,
  });
};

const registerSubmitHandler: SubmitHandler<IRegisterForm> = (data) => {
  authApi.register({
    email: data.email,
    username: data.username,
    password: data.password,
  });
};

export {
  useLoginForm,
  useRegisterForm,
  loginSubmitHandler,
  registerSubmitHandler,
};
