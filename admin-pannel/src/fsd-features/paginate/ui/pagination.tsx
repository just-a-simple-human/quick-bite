"use client";
import { useMenuTableStore } from "@/fsd-entities/menu-item";
import { usePagination } from "@/fsd-features/paginate";
import classNames from "classnames";
import React from "react";

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  maxPage: number;
  buttonCount: number;
}

function Pagination({
  currentPage,
  setCurrentPage,
  maxPage,
  buttonCount,
}: IPaginationProps) {
  const buttons = usePagination({ maxPage, buttonCount, currentPage });
  return (
    <ul className="w-fit px-4 py-2 mx-auto mt-4 rounded-2xl list-none flex gap-3 bg-white border border-stone-400">
      {buttons.map((page, i) => (
        <li
          key={`${i}${page}`}
          className="w-10 h-10 flex justify-center items-center align-middle"
        >
          {page === 0 ? (
            "\u22C5\u22C5\u22C5"
          ) : (
            <button
              className={classNames(
                "w-full h-full rounded-3xl text-stone-800 hover:bg-stone-200 active:bg-stone-300 transition-all duration-300",
                {
                  "bg-orange-400 text-white border-0 hover:bg-orange-500! active:bg-orange-400!":
                    page === currentPage,
                }
              )}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export { Pagination };
