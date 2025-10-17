"use client";
import { useMenuTableStore } from "@/fsd-entities/menu-item";
import { FilterSvg } from "@/fsd-shared";
import classNames from "classnames";
import React from "react";

function FilterMenuItemButton() {
  const isFilterOpened = useMenuTableStore((state) => state.isFilterOpened);
  const toggleFilter = useMenuTableStore((state) => state.toggleFilter);
  console.log(isFilterOpened);

  return (
    <button
      onClick={toggleFilter}
      className={classNames(
        "rounded-2xl col-span-1 flex justify-center items-center gap-2 border border-stone-400 text-lg font-medium transition-all duration-300",
        {
          "bg-orange-400 hover:bg-orange-500 active:bg-orange-400 text-white border-transparent **:fill-white":
            isFilterOpened,
          "bg-white hover:bg-stone-50 active:bg-stone-100 text-stone-800 **:fill-stone-800":
            !isFilterOpened,
        }
      )}
    >
      Filter
      <FilterSvg fill={"#292524"} />
    </button>
  );
}

export { FilterMenuItemButton };
