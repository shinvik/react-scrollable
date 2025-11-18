import type { CSSProperties } from 'react';

export type ClassNameStringOrFnReturnType = string | string[];

export type ClassNameStringOrFnType<Payload = undefined> =
  | ClassNameStringOrFnReturnType
  | (
  Payload extends undefined
    ? () => ClassNameStringOrFnReturnType
    : (payload: Payload) => ClassNameStringOrFnReturnType
  );

export type ClassNamesType = {
  /**
   * the wrapper element class containing the scrollable area and scrollbars, implemented as a dynamic grid.
   */
  scrollable: ClassNameStringOrFnType<Partial<ScrollableStateType> & {
    hasHorizontalScrollbar: boolean;
    hasVerticalScrollbar: boolean;
    showThumbOnHover: boolean;
  }>;
  /**
   * scrollable element class - uses CSS overflow property
   */
  area: ClassNameStringOrFnType;
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
  scrollable: StylesOrFnType<Partial<ScrollableStateType> & {
    hasHorizontalScrollbar: boolean;
    hasVerticalScrollbar: boolean;
    showThumbOnHover: boolean;
  }>;
  /**
   * scrollable element styles - uses CSS overflow property
   */
  area: StylesOrFnType;
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