import React from "react";
import { CheckboxSvg } from "../assets/icons";

interface IProps {
  isActive: boolean;
  toggleActive: () => void;
}

function Checkbox({ isActive, toggleActive }: IProps) {
  return (
    <div
      className="w-6 h-6 rounded-md flex justify-center items-center border border-stone-400 cursor-pointer"
      onClick={toggleActive}
    >
      <input
        className="appearance-none invisible"
        type="checkbox"
        checked={isActive}
        onChange={toggleActive}
      />
      {isActive ? <CheckboxSvg /> : null}
    </div>
  );
}

export { Checkbox };
