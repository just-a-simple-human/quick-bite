import { api, IMenuItem } from "@/fsd-shared";

export async function getMenuItemAll({ page }: { page: number }) {
  const { data } = await api.get<IMenuItem[]>(
    `/menu-item?page=${page}&perPage=5`,
    {
      withCredentials: true,
    }
  );
  return data;
}
