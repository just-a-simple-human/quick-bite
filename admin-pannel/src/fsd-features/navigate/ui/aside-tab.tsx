"use client";

import React, { useState } from "react";
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
        className={`p-4 w-52 rounded-lg relative flex items-center gap-4 text-sm font-semibold 
          ${
            pathname.startsWith(href)
              ? "bg-orange-400 text-white **:fill-white"
              : "bg-white text-stone-800 **:fill-stone-800"
          } 
          animate-[${isOpened ? "open" : "close"}_300ms_forwards]
        `}
        href={href}
      >
        <Icon className="shrink-0" />
        {isOpened ? title : <></>}
      </Link>
    </li>
  );
}

export default AsideTab;
