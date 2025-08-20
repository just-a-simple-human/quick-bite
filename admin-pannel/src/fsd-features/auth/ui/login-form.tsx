"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { loginSubmitHandler, useLoginForm } from "../model/form";
import { Input } from "@/fsd-shared";
import { Checkbox } from "@/fsd-shared/ui/checkbox";

function LoginForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useLoginForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(loginSubmitHandler)(e);
      }}
      className="w-fit h-fit mt-6 flex flex-col gap-3"
    >
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange, name } }) => (
          <Input
            name={name}
            value={value}
            onChange={onChange}
            label="Email address"
            placeholder="Enter your email..."
            errors={errors}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange, name } }) => (
          <Input
            name={name}
            value={value}
            onChange={onChange}
            label="Password"
            placeholder="Enter your password..."
            isPassword
            errors={errors}
          />
        )}
      />

      <Controller
        name="rememberPassword"
        control={control}
        render={({ field: { value, onChange, name } }) => (
          <label className="flex items-center gap-3 font-nunito-sans text-lg font-semibold text-stone-600 select-none">
            <Checkbox
              name={name}
              isActive={!!value}
              toggleActive={() => onChange(!value)}
            />
            Remember Password
          </label>
        )}
      />

      <button
        type="submit"
        className="w-md py-3 mx-auto mt-3 rounded-lg flex justify-center bg-orange-400 font-nunito-sans text-xl font-bold text-white"
      >
        Sign In
      </button>
    </form>
  );
}

export { LoginForm };
