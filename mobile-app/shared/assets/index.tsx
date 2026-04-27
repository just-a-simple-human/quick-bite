import { Image, ImageProps } from "expo-image";

export const PlusIcon = (props: ImageProps) => {
  return (
    <Image
      {...props}
      contentFit="contain"
      source={require("./plus-icon.webp")}
    />
  );
};
