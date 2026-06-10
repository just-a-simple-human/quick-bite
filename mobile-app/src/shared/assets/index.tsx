import { Image, ImageProps } from "expo-image";

export const PlusIcon = (props: ImageProps) => {
  return (
    <Image
      style={[{ width: 24, height: 24 }, props.style]}
      {...props}
      contentFit="contain"
      source={require("./plus-icon.webp")}
    />
  );
};
