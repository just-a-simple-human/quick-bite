import { api } from "@/shared/api/api";
import { IMenuItem } from "@/shared/types/entities";

export const menuApi = {
  async getAll({ page }: { page: number }) {
    const response = await api.get<IMenuItem[]>("menu", {
      params: {
        itemsPerPage: 14,
        page: page,
      },
    });
    return response;
  },
};
