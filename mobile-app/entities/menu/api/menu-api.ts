import { api } from "@/shared/api/api";
import { IMenuItem } from "@/shared/types/entities";

export const menuApi = {
  async getAll({ offset }: { offset: number }) {
    const response = await api.get<IMenuItem[]>("menu", {
      params: {
        limit: 14,
        offset: offset,
      },
    });
    return response;
  },
};
