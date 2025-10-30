import { Image } from "expo-image";
import { ReactNode } from "react";

type Icon = ({ style }: { style: "dark" | "light" }) => ReactNode;

export const LocationIcon: Icon = ({ style }) => {
  return (
    <Image
      source={
        style === "dark"
          ? require("./location-icon-dark.png")
          : require("./location-icon-light.png")
      }
      style={{ width: 24, height: 24 }}
      contentFit="contain"
    />
  );
};

export const MenuBookIcon: Icon = ({ style }) => {
  return (
    <Image
      source={
        style === "dark"
          ? require("./menu-book-icon-dark.png")
          : require("./menu-book-icon-light.png")
      }
      style={{ width: 24, height: 24 }}
      contentFit="contain"
    />
  );
};

export const CartIcon: Icon = ({ style }) => {
  return (
    <Image
      source={
        style === "dark"
          ? require("./cart-icon-dark.png")
          : require("./cart-icon-light.png")
      }
      style={{ width: 24, height: 24 }}
      contentFit="contain"
    />
  );
};
