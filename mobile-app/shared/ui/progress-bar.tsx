import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, ViewProps } from "react-native";

interface IProps extends ViewProps {
  size: number;
  step: number;
}

const ProgressBar = ({ size, step, style }: IProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.stepContainer, style]}>
      {Array.from({ length: size }).map((_, i) => {
        const isActive = i < step;
        const isCurrent = i === step - 1;
        return (
          <View
            key={i}
            style={[
              styles.step,
              {
                backgroundColor: isActive
                  ? theme.colors.primary
                  : theme.colors.background,
                opacity: isCurrent && isActive ? 1 : 0.6,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    gap: 20,
  },
  step: {
    borderRadius: 9999,
    height: 12,
    flex: 1,
  },
});

export { ProgressBar };
