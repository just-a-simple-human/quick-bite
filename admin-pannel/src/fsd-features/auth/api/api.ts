import { api } from "@/fsd-shared";
import { ILoginDto, IRegisterDto } from "../types/dto";

export const authApi = {
  async register(data: IRegisterDto) {
    const response = await api.post("/auth/employee/register", data);
    return response;
  },
  async login(data: ILoginDto) {
    const response = await api.post("/auth/employee/login", data);
    return response;
  },
};
