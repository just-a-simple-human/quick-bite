"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { IRoute } from "@/fsd-shared";
import { useAsideStore } from "../lib/store";

interface IProps {
  route: IRoute;
}

function AsideTab({ route }: IProps) {
  const { isOpened } = useAsideStore();
  const { href, title, Icon } = route;
  const pathname = usePathname();
  return (
    <li className="w-full px-6 h-fit">
      <Link
        className={classNames(
          "overflow-clip p-4 rounded-lg relative flex items-center gap-4 transition-all duration-300 text-base font-semibold",
          {
            "bg-orange-400 **:fill-white text-white":
              (pathname.startsWith(href) && href.length > "/".length) ||
              (href === pathname && href === "/"),
            "bg-white **:fill-stone-800 text-stone-800":
              !pathname.startsWith(href),
            "w-14": !isOpened,
            "w-52": isOpened,
          }
        )}
        href={href}
      >
        <Icon className="shrink-0" />
        {title}
      </Link>
    </li>
  );
}

export { AsideTab };
