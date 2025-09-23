import { FilterMenuItemButton } from "@/fsd-features/filter-menu-item";
import { PlusSvg, SearchSvg } from "@/fsd-shared";
import Link from "next/link";

function MenuItemManageBar() {
  return (
    <div className="h-18 mb-4 px-6 py-3 rounded-xl grid grid-cols-6 gap-6 bg-white border border-stone-400">
      <h1 className="col-span-1 flex items-center text-3xl font-semibold">
        Menu
      </h1>
      <div className="max-w-md col-span-3 px-4 py-2 rounded-full flex items-center gap-2 border border-stone-400">
        <SearchSvg />
        <input
          name="menu-item-search"
          className="flex-1 text-base focus:outline-0 text-stone-800 placeholder:text-stone-400"
          placeholder="Search"
        />
      </div>
      <FilterMenuItemButton />
      <Link
        href={"/menu-item/add"}
        className="rounded-2xl col-span-1 flex justify-center items-center gap-2 bg-white border border-stone-400 text-lg font-medium text-stone-800 transition-all duration-300 hover:bg-stone-50 active:bg-stone-100"
      >
        Add new
        <PlusSvg fill="#292524" />
      </Link>
    </div>
  );
}

export { MenuItemManageBar };
