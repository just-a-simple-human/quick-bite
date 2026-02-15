import { AxiosError, isAxiosError } from "axios";
import type { UseFormSetError } from "react-hook-form";

export function handleServerErrors<T extends UseFormSetError<any>>(
  error: AxiosError<any>,
  setError: T,
) {
  const errorData = error.response?.data;
  if (!errorData) {
    setError("root", { message: "Something went wrong!" });
  } else {
    for (let key in errorData) {
      setError(key, { message: errorData[key] });
    }
  }
}
