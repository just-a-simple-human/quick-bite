import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

export function useVerificationForm() {
  const params = useLocalSearchParams();
  const email = params.email as string;
  const ref = useRef(null);
  const [code, setCode] = useState<string>("");
  const [resendTimer, setResendTimer] = useState<number>(60);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const id = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(id);
  });

  return {
    email,
    ref,
    code,
    setCode,
    error,
    setError,
    resendTimer,
    setResendTimer,
  };
}
