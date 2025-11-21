import { api } from "@/shared/api/api";
import { ILoginDto, IRegisterDto } from "../types/dto";

export const authApi = {
  async register(data: IRegisterDto) {
    const response = await api.post("/auth/customer/register", data);
    return response;
  },
  async login(data: ILoginDto) {
    const response = await api.post("/auth/customer/login", data);
    return response;
  },
};
