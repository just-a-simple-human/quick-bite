import { Image } from "expo-image";

export const AccountIcon = ({ style }: { style: "dark" | "light" }) => {
  return (
    <Image
      style={{ width: 32, height: 32 }}
      source={
        style === "light"
          ? require("./account-icon-light.png")
          : require("./account-icon-dark.png")
      }
    />
  );
};

export const Logo = ({ style }: { style: "dark" | "light" }) => {
  return (
    <Image
      style={{
        width: 156,
        height: 48,
      }}
      source={
        style === "light"
          ? require("../assets/logo-light.png")
          : require("../assets/logo-dark.png")
      }
    />
  );
};
