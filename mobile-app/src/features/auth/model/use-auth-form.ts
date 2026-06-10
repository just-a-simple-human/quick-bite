import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  authSchema,
  forgotPasswordSchema,
  registerSchema,
  resetPasswordSchema,
} from "./auth-schema";

function useLoginForm() {
  return useForm({
    resolver: yupResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });
}

function useRegisterForm() {
  return useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      termsAndConditions: false,
    },
    mode: "all",
  });
}

function useForgotPasswordForm() {
  return useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
    mode: "all",
  });
}

function useResetPasswordForm() {
  return useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });
}

export {
  useLoginForm,
  useRegisterForm,
  useForgotPasswordForm,
  useResetPasswordForm,
};
