import { router } from "expo-router";
import { verificationApi } from "../api/verification";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const verify = async (code: string) => {
  try {
    const email = await AsyncStorage.getItem("account-email");
    if (!email) throw new Error();

    verificationApi.verify(email, code);

    router.replace("/");
  } catch (error) {}
};
