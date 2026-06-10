import { api } from "@/shared/api/api";
import { ICategory } from "@/shared/types/entities";

export const categoryApi = {
  async getAll() {
    const response = await api.get<ICategory[]>("category");
    return response;
  },
};
