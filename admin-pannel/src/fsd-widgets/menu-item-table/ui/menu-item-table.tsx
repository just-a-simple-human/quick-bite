"use client";
import {
  menuItemApi,
  MenuTableHeader,
  MenuTableRow,
  useMenuTableStore,
} from "@/fsd-entities/menu-item";
import { IMenuItem } from "@/fsd-shared";
import { Table } from "@/fsd-shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

function MenuTable() {
  const page = useMenuTableStore((state) => state.currentPage);
  const { data, error, isPending, isPlaceholderData } = useQuery({
    queryKey: ["menu-item"],
    queryFn: () => menuItemApi.getAll({ page }),
    placeholderData: keepPreviousData,
    initialData: [],
  });

  if (isPending) return <span>Loading...</span>;

  return (
    <Table
      Header={MenuTableHeader}
      data={data}
      renderRow={(menuItem: IMenuItem) => (
        <MenuTableRow key={menuItem.id} menuItem={menuItem} />
      )}
      isLoading={isPlaceholderData}
    />
  );
}

export { MenuTable };
