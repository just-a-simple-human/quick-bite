import { useTheme } from "@react-navigation/native";
import { StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FullScreen = (props: ViewProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      {...props}
      style={[
        styles.screen,
        { backgroundColor: theme.colors.card },
        props.style,
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    gap: 24,
  },
});

export { FullScreen };
