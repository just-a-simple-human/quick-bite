type ScrollMode = "manual" | "target";

/**
 * State of the current scroll mode:
 *
 * - "manual" – scrolling by user changes activeControl.
 * - "target" – scrolling is triggered by targetControl changes.
 */
export interface IScrollModeState {
  scrollMode: ScrollMode;
  setScrollMode(scrollMode: ScrollMode): void;
}

/**
 * State of the active control (e.g. selected tab/button).
 *
 * It is synchronized with the UI active item by the `handleVisibleItemChange` function.
 */
export interface IActiveControlState<Control> {
  /**
   * Currently active control. Initial value can be `undefined`.
   */
  activeControl?: Control;
  /**
   * Updates active control.
   *
   * This function is typically called by UI list scroll.
   */
  setActiveControl(item: Control): void;
}

/**
 * State of the target control (e.g. selected tab/button) that triggers scrolling.
 */
export interface ITargetControlState<Control> {
  /**
   * Currently target control. Initial value can be `undefined`.
   */
  targetControl?: Control;
  /**
   * Updates target control.
   *
   * This function is typically called by external UI elements.
   */
  setTargetControl(item: Control): void;
}

/**
 * Parameters for the `useScroll` hook.
 */
export interface IUseScrollParams<Control, Item extends Control>
  extends
    IScrollModeState,
    Omit<IActiveControlState<Control>, "activeControl">,
    Omit<ITargetControlState<Control>, "setTargetControl"> {
  /**
   * Compares a UI list item with an external control
   */
  compare(item: Item, control: Control): boolean;
  /**
   * List of items displayed in the UI list.
   */
  items: Item[];
  /**
   * Scrolls to target UI list item.
   */
  scrollToItem(item: Item): void;
  /**
   * Loads the next page of the data list.
   *
   * Intended for use with `infinite scroll`.
   */
  loadNextPage?(): void;
}
