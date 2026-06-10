import { useTheme } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const client = new QueryClient();

export function AppWrapper({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.card }}>
      <GestureHandlerRootView>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
