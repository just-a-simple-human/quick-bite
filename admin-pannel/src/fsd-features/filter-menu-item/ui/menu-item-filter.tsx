"use client";
import { useMenuTableStore } from "@/fsd-entities/menu-item";
import classNames from "classnames";
import React from "react";

function MenuItemFilter() {
  const isOpened = useMenuTableStore((state) => state.isFilterOpened);

  return (
    <div
      className={classNames(
        "overflow-hidden w-full px-6 rounded-2xl transition-all duration-300",
        {
          "h-0": !isOpened,
          "h-16 mb-4 py-3 bg-white border border-stone-400": isOpened,
        }
      )}
    ></div>
  );
}

export { MenuItemFilter };
