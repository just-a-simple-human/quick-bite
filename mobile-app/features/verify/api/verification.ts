import { api } from "@/shared/api/api";

export const verificationApi = {
  async sendCode(email: string) {
    return await api.post("/verification/send-code", { email });
  },
  async verify(email: string, code: string) {
    return await api.post("/verification", { email, code });
  },
};
