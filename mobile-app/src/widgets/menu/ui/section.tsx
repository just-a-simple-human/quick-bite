import { SubHeading } from "@/shared/ui/heading";
import { FlatList } from "react-native";
import { IMenuSection } from "@/widgets/menu/model/use-menu-sections";
import { MenuCard } from "@/entities/menu";
import { menuStyles } from "./styles";

interface IProps {
  section: IMenuSection;
  cardWidth: number;
}

const MenuSection = ({ section, cardWidth }: IProps) => {
  return (
    <FlatList
      ListHeaderComponent={() =>
        section.name && <SubHeading>{section.name}</SubHeading>
      }
      data={section.items}
      renderItem={({ item }) => <MenuCard item={item} width={cardWidth} />}
      numColumns={2}
      columnWrapperStyle={menuStyles.columnWrapper}
      style={menuStyles.column}
    />
  );
};

export { MenuSection };
