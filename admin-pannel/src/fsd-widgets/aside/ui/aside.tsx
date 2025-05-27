import React from "react";
import { AsideTabBar } from "@/fsd-features/navigate";
import { asideRoutes } from "../model/routes";
import { Logo } from "../assets/logo";

function Aside() {
  return (
    <aside
      className={`
        w-fit h-full py-6 flex flex-col items-center gap-8 bg-white border-r border-r-stone-400 transition-all duration-500
      `}
    >
      <Logo />
      <AsideTabBar routes={asideRoutes} />
    </aside>
  );
}

export { Aside };
