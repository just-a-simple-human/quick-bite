import { Image, ImageProps } from "expo-image";

interface IProps extends ImageProps {
  filename?: string;
}

export const ExternalImage = ({ filename, style }: IProps) => {
  const source = `${process.env.EXPO_PUBLIC_API_BASE_URL}${filename}`;

  return (
    <Image source={{ uri: source }} contentFit="contain" style={[style]} />
  );
};
