import { api } from "@/shared/api/api";

export const verificationApi = {
  async sendCode(email: string) {
    return await api.post("/verification/send-code", { email });
  },
  async verifyRegistration(email: string, code: string) {
    return await api.post("/verification/registration", { email, code });
  },
  async verifyResetPassword(email: string, code: string) {
    return await api.post("/verification/reset-password", { email, code });
  },
};
