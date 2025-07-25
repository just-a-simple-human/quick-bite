"use client";
import { Input } from "@/fsd-shared";
import { Checkbox } from "@/fsd-shared/ui/checkbox";
import React from "react";

function RegisterForm() {
  return (
    <form className="w-fit h-fit mt-6 flex flex-col gap-3">
      <Input label="Email address" placeholder="Enter your email..." />
      <Input label="Username" placeholder="Enter your username..." />
      <Input label="Password" placeholder="Enter your password..." />
      <label
        htmlFor=""
        className="flex items-center gap-3 font-nunito-sans text-lg font-semibold text-stone-600"
      >
        <Checkbox isActive={true} toggleActive={() => {}} />I accept terms and
        conditions
      </label>
      <button
        type="submit"
        className="w-md py-3 mx-auto mt-3 rounded-lg flex justify-center bg-orange-400 font-nunito-sans text-xl font-bold text-white"
      >
        Sign Up
      </button>
    </form>
  );
}

export { RegisterForm };
