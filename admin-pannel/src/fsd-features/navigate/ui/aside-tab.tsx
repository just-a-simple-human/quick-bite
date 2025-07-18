"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
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
        className={classNames(
          "p-4 w-52 rounded-lg relative flex items-center gap-4",
          {
            "bg-orange-400 **:fill-white": pathname.startsWith(href),
            "bg-white **:fill-stone-800": !pathname.startsWith(href),
            opened: isOpened,
            closed: !isOpened,
          }
        )}
        href={href}
      >
        <Icon className="shrink-0" />
        <span
          className={classNames("text-base font-semibold", {
            "text-white": pathname.startsWith(href),
            "text-stone-800": !pathname.startsWith(href),
          })}
          hidden={!isOpened}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}

export { AsideTab };
