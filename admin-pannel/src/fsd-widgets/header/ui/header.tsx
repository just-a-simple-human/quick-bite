import React from "react";
import { ToggleAsideButton } from "./toggle-aside-button";
import { SearchBar } from "@/fsd-features/search";

function Header() {
  return (
    <header className="w-full h-fit px-8 py-2 flex justify-between">
      <div className="flex items-center gap-8">
        <ToggleAsideButton />
        <SearchBar />
      </div>
      <div></div>
    </header>
  );
}

export { Header };
