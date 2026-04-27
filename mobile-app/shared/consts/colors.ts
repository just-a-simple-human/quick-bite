import { DefaultTheme, Theme } from "@react-navigation/native";

const LightAppTheme: Theme = {
  colors: {
    background: "#F5F5F4",
    border: "#79716B",
    card: "#ffffff",
    notification: "#ef4444",
    primary: "#f59e0b",
    text: "#292524",
  },
  dark: false,
  fonts: DefaultTheme.fonts,
};

const DarkAppTheme: Theme = {
  colors: {
    background: "#57534D",
    border: "#79716B",
    card: "#292524",
    notification: "#ef4444",
    primary: "#6366f1",
    text: "#ffffff",
  },
  dark: true,
  fonts: DefaultTheme.fonts,
};

export { LightAppTheme, DarkAppTheme };
