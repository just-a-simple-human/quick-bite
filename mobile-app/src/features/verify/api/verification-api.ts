import { api } from "@/shared/api/api";
import { IVerificationDto } from "../model/verification-dto";

export const verificationApi = {
  async sendCode(email: string) {
    return await api.post("/verification/send-code", { email });
  },
  async verifyRegistration(dto: IVerificationDto) {
    return await api.post("/verification/registration", dto);
  },
  async verifyResetPassword(dto: IVerificationDto) {
    return await api.post("/verification/reset-password", dto);
  },
};
