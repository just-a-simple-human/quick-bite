import { MenuTable } from "@/fsd-entities/menu-item";
import React from "react";

function MenuPage() {
  return (
    <main className="box-border max-w-full h-full p-8 bg-stone-100 overflow-y-auto">
      <MenuTable />
    </main>
  );
}

export { MenuPage };
