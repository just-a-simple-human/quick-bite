import { RegisterForm } from "@/fsd-features/auth";
import Link from "next/link";
import React from "react";

function RegisterPage() {
  return (
    <div className="w-fit h-fit p-8 rounded-2xl flex flex-col items-center bg-white">
      <h1 className="font-nunito-sans text-3xl font-bold text-stone-800">
        Create an Account
      </h1>
      <p className="mt-2 font-nunito-sans text-lg font-semibold text-stone-800">
        Create a account to continue
      </p>
      <RegisterForm />
      <p className="mt-3 font-nunito-sans text-lg font-semibold text-stone-600 *:font-bold *:text-orange-400 *:underline">
        Already have an account? <Link href={"/login"}>Login</Link>
      </p>
    </div>
  );
}

export { RegisterPage };
