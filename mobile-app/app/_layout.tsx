import { Stack } from "expo-router";
import { SystemBars } from "react-native-edge-to-edge";
import { Header } from "@/widgets/header";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { DarkAppTheme, LightAppTheme } from "@/shared/consts/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

const client = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkAppTheme : LightAppTheme}
    >
      <QueryClientProvider client={client}>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ header: () => <Header /> }} />
          <Stack.Screen name="auth/sign-up" options={{ headerShown: false }} />
          <Stack.Screen name="auth/sign-in" options={{ headerShown: false }} />
          <Stack.Screen
            name="auth/reset-password"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="auth/forgot-password"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="verification/registration"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="verification/reset-password"
            options={{ headerShown: false }}
          />
        </Stack>
      </QueryClientProvider>
      <SystemBars
        style={{ statusBar: "auto", navigationBar: "auto" }}
        hidden={{ navigationBar: false, statusBar: false }}
      />
    </ThemeProvider>
  );
}
