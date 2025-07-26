import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "../types/login";
import { IRegisterForm } from "../types/register";

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
  console.log(data);
};

const registerSubmitHandler: SubmitHandler<IRegisterForm> = (data) => {
  console.log(data);
};

export {
  useLoginForm,
  useRegisterForm,
  loginSubmitHandler,
  registerSubmitHandler,
};
