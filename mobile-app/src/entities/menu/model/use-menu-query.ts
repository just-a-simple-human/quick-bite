import { useInfiniteQuery } from "@tanstack/react-query";
import { menuApi } from "../api/menu-api";
import { AxiosError } from "axios";
import { IMenuItem } from "@/shared/types/entities";

function useMenuGetAllQuery() {
  return useInfiniteQuery<
    IMenuItem[],
    AxiosError,
    IMenuItem[],
    unknown[],
    number
  >({
    queryKey: ["menu"],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await menuApi.getAll({ page: pageParam });
      return data;
    },
    getNextPageParam: (lastPage, _, prev) => {
      return lastPage?.length === 14 ? prev + 1 : undefined;
    },
    initialPageParam: 1,
    select: (data) => data.pages.flat(),
  });
}

export { useMenuGetAllQuery };
