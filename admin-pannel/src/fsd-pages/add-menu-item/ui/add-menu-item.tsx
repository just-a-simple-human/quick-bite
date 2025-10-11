import { AddMenuItemForm } from "@/fsd-features/add-menu-item";
import React from "react";

function AddMenuItem() {
  return (
    <main className="max-w-full flex-1 p-8 bg-stone-100 overflow-y-auto">
      <AddMenuItemForm />
    </main>
  );
}

export { AddMenuItem };
