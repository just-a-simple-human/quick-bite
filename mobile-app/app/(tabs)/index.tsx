import { ThemedText } from "@/shared/ui/themed";
import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ThemedText>Home</ThemedText>
      <Link href={"/sign-in"} replace>
        sign-in
      </Link>
      <Link href={"/sign-up"} replace>
        sign-up
      </Link>
      <Link href={"/verification"}>verification</Link>
    </View>
  );
}
