import { DefaultTheme, Theme } from "@react-navigation/native";

const LightAppTheme: Theme = {
  colors: {
    background: "#E7E5E4",
    border: "#f5f5f4",
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
    border: "#f5f5f4",
    card: "#292524",
    notification: "#ef4444",
    primary: "#f59e0b",
    text: "#ffffff",
  },
  dark: true,
  fonts: DefaultTheme.fonts,
};

export { LightAppTheme, DarkAppTheme };
