"use client";

import React, { MouseEventHandler } from "react";
import Link from "next/link";
import { MoreVertSvg, RefreshSvg, IMenuItem } from "@/fsd-shared";

function MenuTableHeader({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <thead className="w-full not-[last-child]:border-b not-[last-child]:border-b-stone-400">
      <tr className="w-full px-6 py-3 flex items-center gap-8">
        <th className="w-24 flex items-center text-xl font-semibold text-stone-800">
          Image
        </th>
        <th className="min-w-16 max-w-48 flex flex-1 items-center text-xl font-semibold text-stone-800">
          Name
        </th>
        <th className="min-w-32 flex flex-1 items-center text-xl font-semibold text-stone-800">
          Categories
        </th>
        <th className="w-16 flex justify-center items-center text-xl font-semibold text-stone-800">
          Price
        </th>
        <th className="w-fit h-fit">
          <button
            onClick={onClick}
            className="p-2 rounded-2xl bg-stone-100 border border-stone-400"
          >
            <RefreshSvg />
          </button>
        </th>
      </tr>
    </thead>
  );
}

function MenuTableRow({
  menuItem,
  isSelected,
}: {
  menuItem: IMenuItem;
  isSelected: boolean;
}) {
  return (
    <tr
      className="
        w-full px-6 py-2 flex items-center gap-8 not-last:border-b not-last:border-b-stone-400
      "
    >
      <td className="w-24 h-24 rounded-2xl shrink-0 flex justify-center items-center bg-stone-200 text-lg text-stone-600">
        <img
          src={
            menuItem.image?.sm ||
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/hamburger.jpg`
          }
          alt="No image"
        />
      </td>

      <td className="min-w-16 max-w-48 flex flex-1 items-center font-medium text-lg text-stone-800">
        {menuItem.name}
      </td>

      <td className="min-w-32 flex flex-1 items-center gap-4 text-base text-stone-800">
        {menuItem.categories.length
          ? menuItem.categories.map((category) => (
              <Link
                key={category.id}
                className="block px-3 py-1 rounded-lg border border-stone-400 text-base text-stone-800"
                href={`/category/${category?.id}`}
              >
                {category.name}
              </Link>
            ))
          : "No category"}
      </td>

      <td className="w-16 flex justify-center items-center text-base text-stone-800">
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          currencySign: "standard",
        }).format(menuItem.price)}
      </td>

      <td>
        <button className="p-2 rounded-2xl bg-stone-100 border border-stone-400">
          <MoreVertSvg />
        </button>
      </td>
    </tr>
  );
}

export { MenuTableHeader, MenuTableRow };
