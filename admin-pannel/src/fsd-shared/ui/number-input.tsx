import React from "react";
import { MinusSvg, PlusSvg } from "../assets/icons";

interface IProps {
  value: number;
  setValue: (value: number) => void;
}

function NumberInput({ value, setValue }: IProps) {
  return (
    <div className="max-w-full h-fit flex items-center gap-2">
      <button
        className="h-full aspect-square p-2 rounded-lg flex justify-center items-center bg-orange-400 text-lg font-semibold text-white"
        onClick={() => setValue(Math.round((value - 1) * 100) / 100)}
        disabled={value - 1 <= 0}
      >
        <MinusSvg className="**:fill-white" />
      </button>
      <input
        className="w-full h-fit px-4 py-2 rounded-lg border border-stone-400 outline-0 text-base text-stone-800"
        type="number"
        value={value}
        onChange={(e) => {
          if (Number.isNaN(parseFloat(e.target.value))) {
            setValue(value);
            return;
          }
          setValue(parseFloat(e.target.value));
        }}
        onBlur={() => {
          if (!value) {
            setValue(1);
            return;
          }
          setValue(parseFloat(value.toFixed(2)));
        }}
      />
      <button
        className="h-full aspect-square p-2 rounded-lg flex justify-center items-center bg-orange-400 text-lg font-semibold text-white"
        onClick={() => setValue(value + 1)}
      >
        <PlusSvg className="**:fill-white" />
      </button>
    </div>
  );
}

export { NumberInput };
