import { IRoute } from "@/fsd-shared";
import React from "react";
import { AsideTab } from "./aside-tab";

interface IProps {
  routes: IRoute[];
}

function AsideTabBar({ routes }: IProps) {
  return (
    <nav className="w-full">
      <ul className="w-full flex flex-col">
        {routes.map((route) => (
          <AsideTab key={route.href} route={route} />
        ))}
      </ul>
    </nav>
  );
}

export { AsideTabBar };
