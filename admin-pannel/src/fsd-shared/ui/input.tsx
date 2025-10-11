"use client";
import classNames from "classnames";
import Link from "next/link";
import { HTMLProps } from "react";
import { FieldErrors } from "react-hook-form";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

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
  className,
}: InputProps) {
  return (
    <motion.div
      layout
      initial={{ paddingBottom: 0 }}
      animate={name && errors[name] && { paddingBottom: 28 }}
      className={classNames(className, "relative flex flex-col gap-2")}
    >
      <label
        htmlFor={name}
        className="w-full flex justify-between text-lg text-stone-800"
      >
        {label}
        {isPassword && (
          <Link href={"/recover-paswword"} className="text-lg text-stone-400">
            Forget Password?
          </Link>
        )}
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
      <AnimatePresence>
        {name && errors[name] && (
          <motion.span
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            className="absolute left-0 bottom-0 text-sm text-red-400 opacity-0"
          >
            {errors[name].message?.toString()}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export { Input };
