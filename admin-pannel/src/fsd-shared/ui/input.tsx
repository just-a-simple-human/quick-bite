"use client";
import Link from "next/link";
import { HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}

function Input({ value, onChange, placeholder, label, children }: InputProps) {
  return (
    <div className="w-lg relative flex flex-col gap-2">
      <label className="w-full font-nunito-sans text-lg text-stone-800">
        {label}
      </label>
      <input
        className="w-full px-4 py-2 rounded-lg border border-stone-400 outline-0 font-nunito-sans text-base text-stone-800 placeholder:text-stone-400"
        value={value}
        onChange={onChange}
        type="password"
        placeholder={placeholder}
      />
      {children}
    </div>
  );
}

export { Input };
