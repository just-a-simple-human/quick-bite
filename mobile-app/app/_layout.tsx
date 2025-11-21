import { Stack } from "expo-router";
import "react-native-reanimated";
import { SystemBars } from "react-native-edge-to-edge";
import { Header } from "@/widgets/header";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
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
      <Stack initialRouteName="(tabs)">
        <Stack.Screen
          name="(tabs)"
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <SystemBars
        style={{ statusBar: "auto", navigationBar: "auto" }}
        hidden={{ navigationBar: false, statusBar: false }}
      />
    </ThemeProvider>
  );
}
