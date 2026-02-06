import { api } from "@/shared/api/api";
import { IAuthResponse, ILoginDto, IRegisterDto } from "../model/auth-dto";

export const authApi = {
  async register(data: IRegisterDto) {
    const response = await api.post<IAuthResponse>("/auth/customer/register", {
      email: data.email,
      name: data.username,
      password: data.password,
    });
    return response;
  },
  async login(data: ILoginDto) {
    const response = await api.post<IAuthResponse>(
      "/auth/customer/login",
      data,
    );
    return response;
  },
};
