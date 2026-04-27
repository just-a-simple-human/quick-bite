import { ICategory } from "@/shared/types/entities";
import { useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { buttonStyles } from "./styles";
import { useMenuNavigationStore } from "../model/use-menu-navigation-store";
import { useMemo } from "react";
import { DarkAppTheme } from "@/shared/consts/colors";

interface IProps {
  category: ICategory;
}

const MenuTabButton = ({ category }: IProps) => {
  const theme = useTheme();
  const { activeControl, setTargetControl, setScrollMode } =
    useMenuNavigationStore();

  const isActive = useMemo(
    () => activeControl?.id === category.id,
    [activeControl?.id, category.id],
  );

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        {
          backgroundColor: isActive ? theme.colors.primary : "transparent",
          borderColor: isActive ? theme.colors.primary : theme.colors.border,
        },
      ]}
      onPress={() => {
        setTargetControl(category);
        setScrollMode("target");
      }}
    >
      <Text
        style={[
          buttonStyles.text,
          { color: isActive ? DarkAppTheme.colors.text : theme.colors.text },
        ]}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export { MenuTabButton };
