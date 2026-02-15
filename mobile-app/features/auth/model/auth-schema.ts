import { boolean, object, ref, string } from "yup";

const authSchema = object({
  email: string().email("Invalid email").required("This field is required"),
  password: string()
    .min(8, "Password must contain at least 8 characters")
    .required("This field is required"),
});

const registerSchema = authSchema.concat(
  object({
    username: string().required("This field is required"),
    termsAndConditions: boolean()
      .required()
      .test(
        "termsAndConditions",
        "Please confirm your acceptance of the terms and conditions",
        (value) => value,
      ),
  }),
);

const forgotPasswordSchema = object({
  email: string().email("Invalid email").required("This field is required"),
});

const resetPasswordSchema = object({
  password: string()
    .min(8, "Password must contain at least 8 characters")
    .required("This field is required"),
  confirmPassword: string().oneOf(
    [ref("password")],
    "Please, confirm password",
  ),
});

export {
  authSchema,
  registerSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
};
