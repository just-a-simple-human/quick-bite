"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IRoute } from "@/fsd-shared";
import { useAsideStore } from "../lib/store";
import "./animation.css";

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
        className={`p-4 w-52 rounded-lg relative flex items-center gap-4 
          ${
            pathname.startsWith(href)
              ? "bg-orange-400 **:fill-white"
              : "bg-white **:fill-stone-800"
          } 
          ${isOpened ? "opened" : "closed"}
        `}
        href={href}
      >
        <Icon className="shrink-0" />
        <span
          className={`
            text-base font-semibold
            ${pathname.startsWith(href) ? "text-white" : "text-stone-800"}
          `}
          hidden={!isOpened}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}

export { AsideTab };
