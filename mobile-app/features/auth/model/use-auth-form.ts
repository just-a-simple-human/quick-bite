import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema, registerSchema } from "./auth-schema";

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

export { useLoginForm, useRegisterForm };
