import { LoginForm } from "@/fsd-features/auth";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="w-fit h-fit p-8 rounded-2xl flex flex-col items-center bg-white">
      <h1 className="text-3xl font-bold text-stone-800">Login to Account</h1>
      <p className="mt-2 text-lg font-semibold text-stone-800">
        Please enter your email and password to continue
      </p>
      <LoginForm />
      <p className="mt-3 text-lg font-semibold text-stone-600 *:font-bold *:text-orange-400 *:underline">
        Don’t have an account? <Link href={"/register"}>Create Account</Link>
      </p>
    </div>
  );
}

export { LoginPage };
