import { Image } from "expo-image";

export const AccountIcon = ({ style }: { style: "dark" | "light" }) => {
  return (
    <Image
      style={{ width: 24, height: 24 }}
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
        width: 128,
        height: 40,
      }}
      source={
        style === "light"
          ? require("../assets/logo-light.png")
          : require("../assets/logo-dark.png")
      }
    />
  );
};
