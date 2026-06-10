import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "../api/category-api";

export function useCategoryGetAllQuery() {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await categoryApi.getAll();
      return data;
    },
    initialData: [],
  });
}
