import { api } from "@/shared/api/api";
import { ILoginDto, IRegisterDto } from "../types/dto";
import { AxiosError } from "axios";

export const authApi = {
  async register(data: IRegisterDto, onError: (error: AxiosError) => void) {
    const response = await api
      .post("/auth/customer/register", data)
      .catch(onError);
    return response;
  },
  async login(data: ILoginDto, onError: (error: AxiosError) => void) {
    const response = await api
      .post("/auth/customer/login", data)
      .catch(onError);
    return response;
  },
};
