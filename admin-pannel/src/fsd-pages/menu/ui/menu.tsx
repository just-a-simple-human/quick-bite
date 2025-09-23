import { MenuItemFilter } from "@/fsd-features/filter-menu-item";
import { ReactQueryProvider } from "@/fsd-shared/lib/react-query-provider";
import { MenuItemManageBar } from "@/fsd-widgets/menu-item-manage-bar";
import { MenuTable } from "@/fsd-widgets/menu-item-table";
import React from "react";

function MenuPage() {
  return (
    <main className="max-w-full flex-1 p-8 bg-stone-100 overflow-y-auto">
      <MenuItemManageBar />
      <MenuItemFilter />
      <ReactQueryProvider>
        <MenuTable />
      </ReactQueryProvider>
    </main>
  );
}

export { MenuPage };
