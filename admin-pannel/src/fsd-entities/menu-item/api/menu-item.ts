import { api, IMenuItem } from "@/fsd-shared";
import { ICreateMenuItemDto } from "../types/dto";

export const menuItemApi = {
  async getAll({ page }: { page: number }) {
    const token = localStorage.getItem("auth_token");
    const { data } = await api.get(`/menu-item?page=${page}&perPage=5`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
  async create(menuItem: ICreateMenuItemDto) {
    const token = localStorage.getItem("auth_token");
    const { data } = await api.post("/menu-item", menuItem, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
