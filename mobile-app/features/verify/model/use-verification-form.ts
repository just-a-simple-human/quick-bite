import { router } from "expo-router";
import { verificationApi } from "../api/verification-api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function sendCode() {
  const email = await AsyncStorage.getItem("account_email");
  if (!email) throw new Error();

  verificationApi.sendCode(email);
}

export async function verify(code: string) {
  const email = await AsyncStorage.getItem("account_email");
  if (!email) throw new Error();

  verificationApi.verify(email, code);

  router.replace("/");
}
