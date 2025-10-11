import { CrossSvg } from "@/fsd-shared";
import { Reorder } from "motion/react";
import React from "react";

interface IProps {
  files: File[];
  onChange: (...event: any[]) => void;
}

function MenuItemImagesList({ files, onChange }: IProps) {
  if (!files.length) {
    return (
      <p className="min-w-128 aspect-[2/1] flex-3 flex justify-center items-center">
        Images will be shown here
      </p>
    );
  }
  return (
    <Reorder.Group
      className="min-w-128 aspect-[2/1] flex-3 grid grid-cols-4 grid-rows-2 gap-4"
      values={files}
      onReorder={onChange}
      as="ul"
      axis="x"
    >
      {files.map((file) => (
        <Reorder.Item
          as="li"
          key={file.name}
          value={file}
          className="overflow-clip rounded-lg relative col-span-1 row-span-1 aspect-square"
        >
          <button
            className="rounded-lg absolute right-0 top-0 bg-white border border-stone-400 **:fill-stone-400 transition-all duration-300 hover:bg-red-200 hover:border-red-400 hover:**:fill-red-400"
            onClick={() => {
              onChange(files.filter((item) => item.name !== file.name));
            }}
          >
            <CrossSvg />
          </button>
          <img
            className="w-full h-full aspect-square object-cover"
            src={window.URL.createObjectURL(file)}
            alt={file.name}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export { MenuItemImagesList };
