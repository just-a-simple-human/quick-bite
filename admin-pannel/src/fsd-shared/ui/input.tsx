"use client";
import Link from "next/link";
import { HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  isPassword?: boolean;
}

function Input({
  value,
  onChange,
  name,
  placeholder,
  label,
  isPassword,
}: InputProps) {
  return (
    <div className="w-lg relative flex flex-col gap-2">
      <label
        htmlFor={name}
        className="w-full font-nunito-sans text-lg text-stone-800"
      >
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
        className="w-full px-4 py-2 rounded-lg border border-stone-400 outline-0 font-nunito-sans text-base text-stone-800 placeholder:text-stone-400"
      />
      {isPassword ? (
        <Link
          href={"/recover-paswword"}
          className="absolute right-0 top-0 font-nunito-sans text-lg text-stone-400"
        >
          Forget Password?
        </Link>
      ) : null}
    </div>
  );
}

export { Input };
