import { api } from "@/fsd-shared";
import { ILoginDto, IRegisterDto } from "../types/dto";

export const authApi = {
  async register(data: IRegisterDto) {
    const response = await api.post("/auth/employee/register", data);
    if (response.status === 200) {
      localStorage.setItem("auth_token", response.data.auth_token);
    }
    return response;
  },
  async login(data: ILoginDto) {
    const response = await api.post("/auth/employee/login", data, { data });
    if (response.status === 200) {
      localStorage.setItem("auth_token", response.data.auth_token);
    }
    return response;
  },
};
