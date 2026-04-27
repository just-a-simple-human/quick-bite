import { useTheme } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/shared/ui/themed";
import { ExternalImage } from "@/shared/ui/external-image";
import { cardStyles } from "./styles";
import { PlusIcon } from "@/shared/assets";
import { IMenuItem } from "@/shared/types/entities";

interface IProps {
  item: IMenuItem;
  width: number;
}

const MenuCard = ({ item, width }: IProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        cardStyles.card,
        {
          width,
          backgroundColor: theme.colors.card,
        },
      ]}
    >
      <ExternalImage filename={item.image} style={cardStyles.image} />
      <ThemedText
        style={cardStyles.title}
        numberOfLines={2}
        ellipsizeMode={"middle"}
      >
        {item.name}
      </ThemedText>
      <View style={cardStyles.footer}>
        <View style={cardStyles.footerInfo}>
          <ThemedText style={cardStyles.price}>${item.price}</ThemedText>
        </View>

        <TouchableOpacity
          style={[cardStyles.button, { backgroundColor: theme.colors.primary }]}
        >
          <PlusIcon style={{ width: 32, height: 32 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { MenuCard };
