import { SearchSvg } from "@/fsd-shared";
import React from "react";

interface Props {}

function SearchBar({}: Props) {
  return (
    <div className="w-96 px-4 py-2 rounded-full flex items-center gap-2 border border-stone-400">
      <SearchSvg />
      <input
        name="search"
        className="flex-1 text-base focus:outline-0 text-stone-800 placeholder:text-stone-400"
        placeholder="Search"
      />
    </div>
  );
}

export { SearchBar };
