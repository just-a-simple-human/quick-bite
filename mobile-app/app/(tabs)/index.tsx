import { ThemedText } from "@/shared/ui/themed";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  useEffect(() => {
    const id = setTimeout(() => router.push("/sign-up"), 2000);
    return () => clearTimeout(id);
  }, [router]);

  return (
    <View style={{ flex: 1 }}>
      <ThemedText>Home</ThemedText>
    </View>
  );
}
