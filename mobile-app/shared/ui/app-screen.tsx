import { useTheme } from "@react-navigation/native";
import { StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppScreen = ({ children }: ViewProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={{ top: "off", bottom: "off" }}
      mode="padding"
      style={[styles.appScreen, { backgroundColor: theme.colors.background }]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
  },
});

export { AppScreen };
