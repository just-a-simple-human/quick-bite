"use client";
import { Input } from "@/fsd-shared";
import { Checkbox } from "@/fsd-shared/ui/checkbox";
import React from "react";
import { registerSubmitHandler, useRegisterForm } from "../model/form";
import { Controller } from "react-hook-form";

function RegisterForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useRegisterForm();

  return (
    <form
      className="w-fit h-fit mt-6 flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(registerSubmitHandler)(e);
      }}
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
        name="username"
        control={control}
        render={({ field: { value, onChange, name } }) => (
          <Input
            name={name}
            value={value}
            onChange={onChange}
            label="Username"
            placeholder="Enter your username..."
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
        name="termsAndConditions"
        control={control}
        rules={{
          value: true,
        }}
        render={({ field: { value, onChange, name } }) => (
          <label className="flex items-center gap-3 font-nunito-sans text-lg font-semibold text-stone-600 select-none">
            <Checkbox
              name={name}
              isActive={!!value}
              toggleActive={() => onChange(!value)}
            />
            I accept terms and conditions
          </label>
        )}
      />

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
