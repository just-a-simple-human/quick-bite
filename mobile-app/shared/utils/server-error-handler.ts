import { AxiosError } from "axios";
import {
  ErrorOption,
  FieldErrors,
  UseFormClearErrors,
  UseFormSetError,
} from "react-hook-form";

export function serverErrorHandler<Errors extends FieldErrors>(
  error: AxiosError,
  setError: UseFormSetError<Errors>,
  clearErrors: UseFormClearErrors<Errors>
) {
  clearErrors();
  const data = error.response?.data as Record<keyof Errors, string>;
  for (let name in data) {
    if (data[name]) {
      setError(name, { message: data[name] }, { shouldFocus: true });
    }
  }
  throw error;
}
