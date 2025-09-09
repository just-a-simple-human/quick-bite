"use client";
import classNames from "classnames";
import Link from "next/link";
import { HTMLProps } from "react";
import { FieldErrors } from "react-hook-form";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  isPassword?: boolean;
  errors: FieldErrors<any>;
}

function Input({
  value,
  onChange,
  name,
  placeholder,
  label,
  isPassword,
  errors,
}: InputProps) {
  return (
    <div
      className={classNames(
        "w-lg relative flex flex-col gap-2 transition-all duration-300",
        {
          "pb-7": name && errors[name],
        }
      )}
    >
      <label htmlFor={name} className="w-full text-lg text-stone-800">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        autoComplete={"on"}
        className="w-full px-4 py-2 rounded-lg border border-stone-400 outline-0 text-base text-stone-800 placeholder:text-stone-400"
      />
      {isPassword ? (
        <Link
          href={"/recover-paswword"}
          className="absolute right-0 top-0 text-lg text-stone-400"
        >
          Forget Password?
        </Link>
      ) : null}
      {name && errors[name] && (
        <span
          className={classNames(
            "absolute left-0 bottom-0 text-sm text-red-400 opacity-0",
            { "animate-fade-in": name && errors[name] }
          )}
        >
          {errors[name].message?.toString()}
        </span>
      )}
    </div>
  );
}

export { Input };
