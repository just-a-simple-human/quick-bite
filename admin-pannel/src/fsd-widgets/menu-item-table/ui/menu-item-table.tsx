"use client";
import {
  IGetMenuItemAllDto,
  menuItemApi,
  MenuTableHeader,
  MenuTableRow,
  useMenuTableStore,
} from "@/fsd-entities/menu-item";
import { Pagination } from "@/fsd-features/paginate";
import { IMenuItem, Table } from "@/fsd-shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { MoonLoader } from "react-spinners";

function MenuTable() {
  const { currentPage, itemsPerPage, setCurrentPage } = useMenuTableStore(
    (state) => state
  );
  const { data, error, isPlaceholderData, refetch, isPending, isRefetching } =
    useQuery<IGetMenuItemAllDto, AxiosError>({
      queryKey: ["menu-item", `page=${currentPage}`],
      queryFn: () => menuItemApi.getAll({ page: currentPage }),
      placeholderData: keepPreviousData,
    });

  if (error?.status === 401) redirect("/login");
  if (error?.status) {
    return (
      <div className="w-full h-full pb-24 flex justify-center items-center">
        <span className="text-3xl font-semibold text-stone-800">
          Something went wrong!
        </span>
      </div>
    );
  }

  if (isPending || !data?.resources) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <MoonLoader color="#ff8904" size={64} />
      </div>
    );
  }

  return (
    <>
      <Table
        Header={() => <MenuTableHeader onClick={() => refetch()} />}
        data={data.resources}
        renderRow={(menuItem: IMenuItem) => (
          <MenuTableRow
            key={menuItem.id}
            menuItem={menuItem}
            isSelected={false}
          />
        )}
        isLoading={isPlaceholderData || isRefetching}
      />
      <Pagination
        currentPage={currentPage}
        buttonCount={9}
        maxPage={Math.ceil(data.count / itemsPerPage)}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export { MenuTable };
