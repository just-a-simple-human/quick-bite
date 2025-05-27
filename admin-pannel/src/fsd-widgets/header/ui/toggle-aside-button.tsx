"use client";

import { useAsideStore } from "@/fsd-features/navigate";
import { MenuBurgerSvg } from "@/fsd-shared";
import React from "react";

function ToggleAsideButton() {
  const { toggle } = useAsideStore();
  return (
    <button onClick={toggle}>
      <MenuBurgerSvg />
    </button>
  );
}

export { ToggleAsideButton };
