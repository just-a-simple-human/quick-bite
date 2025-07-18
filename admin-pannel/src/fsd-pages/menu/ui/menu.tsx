import { ReactQueryProvider } from "@/fsd-shared/lib/react-query-provider";
import { MenuTable } from "@/fsd-widgets/menu-item-table";
import React from "react";

function MenuPage() {
  return (
    <main className="box-border max-w-full h-full p-8 bg-stone-100 overflow-y-auto">
      <ReactQueryProvider>
        <MenuTable />
      </ReactQueryProvider>
    </main>
  );
}

export { MenuPage };
