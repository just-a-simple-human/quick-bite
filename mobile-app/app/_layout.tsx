import { useColorScheme } from "react-native";
import "react-native-reanimated";
import { Stack } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import { AppWrapper } from "@/global/ui/app-wrapper";
import { Header } from "@/widgets/header";
import { MenuItemModal } from "@/entities/menu";
import { DarkAppTheme, LightAppTheme } from "@/shared/consts/colors";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkAppTheme : LightAppTheme}
    >
      <AppWrapper>
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
        <MenuItemModal />
      </AppWrapper>
    </ThemeProvider>
  );
}
