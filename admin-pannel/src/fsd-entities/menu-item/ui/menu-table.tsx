"use client";

import React from "react";
import Link from "next/link";
import { MoreVertSvg, RefreshSvg, IMenuItem } from "@/fsd-shared";

function MenuTableHeader() {
  return (
    <thead className="w-full not-[last-child]:border-b not-[last-child]:border-b-stone-400">
      <tr className="w-full px-6 py-2 flex items-center gap-16">
        {/* <th className="w-16 h-16 flex justify-center items-center text-xl font-semibold text-stone-800">
          Image
        </th> */}
        <th className="min-w-32 max-w-64 flex flex-1 items-center text-xl font-semibold text-stone-800">
          Name
        </th>
        <th className="min-w-32 max-w-64 flex flex-1 items-center text-xl font-semibold text-stone-800">
          Category
        </th>
        <th className="w-24 h-16 flex items-center text-xl font-semibold text-stone-800">
          Price
        </th>
        <th className="min-w-32 max-w-64 flex flex-1 items-center text-xl font-semibold text-stone-800">
          Tumbnail
        </th>
        <th className="w-fit h-fit">
          <button className="p-2 rounded-2xl bg-stone-100 border border-stone-400">
            <RefreshSvg />
          </button>
        </th>
      </tr>
    </thead>
  );
}

function MenuTableTextCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="min-w-32 max-w-64 flex flex-1 items-center">{children}</td>
  );
}

function MenuTableRow({ menuItem }: { menuItem: IMenuItem }) {
  return (
    <tr
      className="
        w-full px-6 py-3 flex items-center gap-16 not-[:last-child]:border-b not-[:last-child]:border-b-stone-400
      "
    >
      {/* <td className="w-16 h-16 rounded-2xl shrink-0 bg-stone-400">
        <img src={menuItem.image} alt="" />
      </td> */}

      <MenuTableTextCell>
        <span className="text-base text-stone-800">{menuItem.name}</span>
      </MenuTableTextCell>

      <MenuTableTextCell>
        <Link
          className="text-base text-stone-800"
          href={`/category/${menuItem.category.id}`}
        >
          {menuItem.category.name}
        </Link>
      </MenuTableTextCell>

      <td className="w-24 flex items-center">
        <span className="text-base text-stone-800">
          {Intl.NumberFormat(undefined, { currency: "USD" }).format(
            menuItem.price
          )}
        </span>
      </td>

      <MenuTableTextCell>
        <span className="text-base text-stone-800">{menuItem.thumbnail}</span>
      </MenuTableTextCell>

      <td>
        <button className="p-2 rounded-2xl bg-stone-100 border border-stone-400">
          <MoreVertSvg />
        </button>
      </td>
    </tr>
  );
}

export { MenuTableHeader, MenuTableRow };
