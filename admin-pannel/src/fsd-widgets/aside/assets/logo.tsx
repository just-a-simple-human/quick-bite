"use client";

import React from "react";
import { useAsideStore } from "@/fsd-features/navigate";
import logo from "@/fsd-shared/assets/quick-bite-logo.png";

function Logo() {
  const { isOpened } = useAsideStore();
  return (
    <span className="h-[22px]">
      <img src={logo.src} hidden={!isOpened} />
    </span>
  );
}

export { Logo };
