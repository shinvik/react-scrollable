import type { CSSProperties } from 'react';

export type ClassNameStringOrFnReturnType = string | string[];

export type ClassNameStringOrFnType<Payload = undefined> =
  | ClassNameStringOrFnReturnType
  | (
  Payload extends undefined
    ? () => ClassNameStringOrFnReturnType
    : (payload: Payload) => ClassNameStringOrFnReturnType
  );

export type ScrollablePayloadType = Partial<ScrollableStateType> & {
  /**
   * horizontal scrollbar presence flag
   */
  hasHorizontalScrollbar: boolean;
  /**
   * vertical scrollbar presence flag
   */
  hasVerticalScrollbar: boolean;
  /**
   * show scrollbar on hover
   */
  showThumbOnHover: boolean;
}

export type ClassNamesType = {
  /**
   * the wrapper element class containing the scrollable area and scrollbars, implemented as a dynamic grid.
   */
  scrollable: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * className for the container element that wraps the element with `overflow: auto`;
   * the element is designed to position child elements relative to the content area, excluding the scrollbars.
   */
  contentWrapper: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * className for element with `overflow: auto`
   */
  content: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * scrollbar element class
   */
  scrollbar: ClassNameStringOrFnType<{
    isVertical: boolean;
  }>;
  /**
   * thumb element class
   */
  thumb: ClassNameStringOrFnType<{
    isVertical: boolean;
  }>;
}

export type StylesOrFnType<Payload = undefined> =
  | CSSProperties
  | (
  Payload extends undefined
    ? () => CSSProperties
    : (payload: Payload) => CSSProperties
  );

export type StylesType = {
  /**
   * the wrapper element styles containing the scrollable area and scrollbars, implemented as a dynamic grid.
   */
  scrollable: StylesOrFnType<ScrollablePayloadType>;
  /**
   * styles for the container element that wraps the element with `overflow: auto`;
   * the element is designed to position child elements relative to the content area, excluding the scrollbars.
   */
  contentWrapper: StylesOrFnType<ScrollablePayloadType>;
  /**
   * styles for element with `overflow: auto`
   */
  content: StylesOrFnType<ScrollablePayloadType>;
  /**
   * scrollbar element styles
   */
  scrollbar: StylesOrFnType<{
    isVertical: boolean;
  }>;
  /**
   * thumb element styles
   */
  thumb: StylesOrFnType<{
    isVertical: boolean;
  }>;
}

export type ScrollableStateType = {
  /**
   * Is the element scrolled to the top?
   * @type {?boolean} null - no vertical overflow, true - scrolled to the top edge
   */
  isTopEdgeReached: boolean;
  /**
   * Is the element scrolled to the bottom?
   * @type {?boolean} null - no vertical overflow, true - scrolled to the bottom edge
   */
  isBottomEdgeReached: boolean;
  /**
   * Is the element scrolled to the left?
   * @type {?boolean} null - no horizontal overflow, true - scrolled to the left edge
   */
  isLeftEdgeReached: boolean;
  /**
   * Is the element scrolled to the right?
   * @type {?boolean} null - no horizontal overflow, true - scrolled to the right edge
   */
  isRightEdgeReached: boolean;
}