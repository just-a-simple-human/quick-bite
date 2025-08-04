import React, { HTMLProps } from "react";
import { CheckboxSvg } from "../assets/icons";

interface IProps extends HTMLProps<HTMLInputElement> {
  isActive: boolean;
  toggleActive: () => void;
}

function Checkbox({ isActive, toggleActive, name }: IProps) {
  return (
    <div className="w-6 h-6 rounded-md flex justify-center items-center border border-stone-400 cursor-pointer">
      <input
        className="appearance-none invisible"
        type="checkbox"
        name={name}
        checked={isActive}
        onChange={toggleActive}
      />
      {isActive ? <CheckboxSvg /> : null}
    </div>
  );
}

export { Checkbox };
