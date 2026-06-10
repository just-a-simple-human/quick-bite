import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Menu } from "@/widgets/menu";

function HomeScreen() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Menu />
    </View>
  );
}

export { HomeScreen };
