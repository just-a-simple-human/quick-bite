import { useCallback, useEffect, useRef } from "react";
import { useTheme } from "@react-navigation/native";
import BottomSheet, {
  BottomSheetFooter,
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";
import { ExternalImage } from "@/shared/ui/external-image";
import { ThemedText } from "@/shared/ui/themed";
import { Button } from "@/shared/ui/button";
import { useMenuItemModalStore } from "../model/use-menu-item-modal-store";
import { modalStyles } from "./styles";
import { View } from "react-native";
import { IMenuItem } from "@/shared/types/entities";

function MenuItemModalFooter(props: BottomSheetFooterProps) {
  const theme = useTheme();

  return (
    <BottomSheetFooter
      {...props}
      style={{ ...modalStyles.footer, backgroundColor: theme.colors.card }}
    >
      <Button text="Add to cart +" />
    </BottomSheetFooter>
  );
}

function MenuItemModalNutrition({ item }: { item?: IMenuItem }) {
  function Item({ title, value }: { title: string; value?: number }) {
    return (
      <View style={modalStyles.nutriotionItem}>
        <ThemedText style={modalStyles.nutriotionText}>{value}</ThemedText>
        <ThemedText style={modalStyles.nutriotionSubtitle}>{title}</ThemedText>
      </View>
    );
  }

  return (
    <View style={modalStyles.nutriotion}>
      <ThemedText style={modalStyles.nutriotionTitle}>
        Nutriotion per 100g
      </ThemedText>
      <View style={modalStyles.nutriotionList}>
        <Item title="Calories" value={item?.nutritions?.calories} />
        <Item title="Proteins" value={item?.nutritions?.proteins} />
        <Item title="Fats" value={item?.nutritions?.fats} />
        <Item title="Carbs" value={item?.nutritions?.carbs} />
      </View>
    </View>
  );
}

export function MenuItemModal() {
  const theme = useTheme();

  const { isOpened, close, currentItem } = useMenuItemModalStore();
  const ref = useRef<BottomSheet>(null);

  useEffect(() => {
    if (isOpened && currentItem) {
      ref.current?.expand();
    } else {
      ref.current?.close();
    }
  }, [currentItem, isOpened]);

  const renderFooter = useCallback(
    (props: BottomSheetFooterProps) => <MenuItemModalFooter {...props} />,
    [],
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={["95%"]}
      enablePanDownToClose
      enableDynamicSizing={false}
      handleComponent={null}
      backgroundComponent={null}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      )}
      footerComponent={renderFooter}
      onClose={close}
    >
      <BottomSheetView
        style={[modalStyles.modal, { backgroundColor: theme.colors.card }]}
      >
        <ExternalImage
          style={modalStyles.image}
          filename={currentItem?.image}
        />
        <ThemedText style={modalStyles.title}>{currentItem?.name}</ThemedText>
        <ThemedText style={modalStyles.description}>
          {currentItem?.description}
        </ThemedText>
        <MenuItemModalNutrition item={currentItem} />
      </BottomSheetView>
    </BottomSheet>
  );
}
