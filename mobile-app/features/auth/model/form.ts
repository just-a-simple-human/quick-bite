import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema, registerSchema } from "../types/schema";
import { InferType } from "yup";
import { authApi } from "../api/auth";

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

const loginSubmitHandler: SubmitHandler<InferType<typeof authSchema>> = async (
  data
) => {
  const response = await authApi.login({
    email: data.email,
    password: data.password,
  });
  if (response.status === 201) {
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
  }
};

export {
  useLoginForm,
  useRegisterForm,
  loginSubmitHandler,
  registerSubmitHandler,
};
