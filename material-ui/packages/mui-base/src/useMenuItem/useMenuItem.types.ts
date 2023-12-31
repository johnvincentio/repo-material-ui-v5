import { EventHandlers } from '../utils/types';
import { UseButtonRootSlotProps } from '../useButton';
import { MuiCancellableEventHandler } from '../utils/MuiCancellableEvent';

interface UseMenuItemRootSlotOwnProps {
  role: 'menuitem';
  ref: React.RefCallback<Element> | null;
}

export interface MenuItemMetadata {
  id: string;
  disabled: boolean;
  label?: string;
  ref: React.RefObject<HTMLElement>;
}

export type UseMenuItemRootSlotProps<TOther = {}> = TOther &
  UseMenuItemRootSlotOwnProps &
  UseButtonRootSlotProps<TOther> & {
    onClick: MuiCancellableEventHandler<React.MouseEvent>;
  };

export interface UseMenuItemParameters {
  disabled?: boolean;
  id?: string;
  onClick?: React.MouseEventHandler<any>;
  rootRef: React.Ref<Element>;
  label?: string;
}

export interface UseMenuItemReturnValue {
  /**
   * Resolver for the root slot's props.
   * @param otherHandlers event handlers for the root slot
   * @returns props that should be spread on the root slot
   */
  getRootProps: <TOther extends EventHandlers = {}>(
    otherHandlers?: TOther,
  ) => UseMenuItemRootSlotProps<TOther>;
  /**
   * If `true`, the component is disabled.
   */
  disabled: boolean;
  /**
   * If `true`, the component is being focused using keyboard.
   */
  focusVisible: boolean;
  /**
   * If `true`, the component is being highlighted.
   */
  highlighted: boolean;
  /**
   * 0-based index of the item in the menu.
   */
  index: number;
  /**
   * The ref to the component's root DOM element.
   */
  rootRef: React.RefCallback<Element> | null;
  /**
   * Total number of items in the menu.
   */
  totalItemCount: number;
}
