import {
  type ReactElement,
  type Ref,
  type UIEvent,
  type CSSProperties,
  type HTMLAttributes,
  forwardRef,
  memo,
  useMemo,
  useRef,
  useState, startTransition, type ReactNode,
} from 'react';
import CssVariables from './css-variables';
import Scrollbar from './scrollbar';
import cx from './utils/classnames';
import generateUniqId from './utils/generateUniqId';
import composeRef from './utils/composeRef';
import makeClassName from './utils/makeClassName';
import makeStyle from './utils/makeStyle';
import useHorizontalScrollbarHandlers from './hooks/useHorizontalScrollbarHandlers';
import useVerticalScrollbarHandlers from './hooks/useVerticalScrollbarHandlers';
import useResizeObserver from './hooks/useResizeObserver';
import useScrollHandlers from './hooks/useScrollHandlers';
import usePointerHandlers from './hooks/usePointerHandlers';
import useScrollableState from './hooks/useScrollableState';
import useEvent from './hooks/useEvent';
import type {
  ClassNamesType,
  StylesType,
  ScrollableStateType,
  ScrollablePayloadType,
} from './types';
import './scrollable.css';

export type {
  ClassNamesType,
  ClassNameStringOrFnType,
  ClassNameStringOrFnReturnType,
  StylesType,
  StylesOrFnType,
  ScrollableStateType,
  ScrollablePayloadType,
} from './types';

export type ScrollablePropsType = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  /**
   * show thumbs on mouse hover, effects only for pointing devices like a mouse
   */
  showThumbOnHover?: boolean;
  /**
   * <a name="on-left-edge-reached-props-anchor"></a>
   * called when the scrollable area reaches its left edge
   */
  onLeftEdgeReached?: (event: UIEvent) => void;
  /**
   * called when the scrollable area reaches its right edge
   */
  onRightEdgeReached?: (event: UIEvent) => void;
  /**
   * called when the scrollable area reaches its top edge
   */
  onTopEdgeReached?: (event: UIEvent) => void;
  /**
   * called when the scrollable area reaches its bottom edge
   */
  onBottomEdgeReached?: (event: UIEvent) => void;
  /**
   * called when component is mounted or its inner state is changed
   * @param {Object} scrollableState - component inner state
   * @param {boolean} scrollableState.isTopEdgeReached - Is the element scrolled to the top?
   * @param {boolean} scrollableState.isBottomEdgeReached - Is the element scrolled to the bottom?
   * @param {boolean} scrollableState.isLeftEdgeReached - Is the element scrolled to the left?
   * @param {boolean} scrollableState.isRightEdgeReached - Is the element scrolled to the right?
   */
  onScrollableStateChange?: (scrollableState: ScrollableStateType | undefined) => void;
  /**
   * suppress handlers: `onLeftEdgeReached`, `onRightEdgeReached`, `onTopEdgeReached`, `onBottomEdgeReached`, `onScrollableStateChange`
   *
   * This is useful, for instance, for temporarily disabling event handlers while dynamic content loads and a splash screen is displayed.
   * In this case, the splash screen's dimensions must not affect the scrolling behavior of the element content.
   * This property does not suppress native handlers (e.g., onScroll).
   */
  suppressHandlers?: boolean;
  /**
   * used to add class name to the HTML element with `overflow: auto`
   */
  className?: string;
  /**
   * used to add style to the HTML element with `overflow: auto`
   */
  style?: CSSProperties;
  /**
   * <a name="classnames-props-anchor"></a>
   * A set of classes for styling the scrollbar area. The values for the classes can be a string or a function that takes the appropriate argument and returns a string.
   * @param {Object} classNames - classnames set
   * @param {string|Array<string>} classNames.scrollable the wrapper element classname containing the scrollable area and scrollbars, implemented as a dynamic grid.
   * @param {string|Array<string>} classNames.contentWrapper className for the container element that wraps the element with `overflow: auto`
   * @param {string|Array<string>} classNames.content className for element with `overflow: auto`
   * @param {string|Array<string>} classNames.scrollbar scrollbar element classname
   * @param {string|Array<string>} classNames.thumb thumb element classname
   */
  classNames?: Partial<ClassNamesType>;
  /**
   * <a name="styles-props-anchor"></a>
   * A set of styles for styling scrollable component. The values for the classes can be a string or a function that takes the appropriate argument and returns a string.
   * @param {Object} styles - styles set
   * @param {string|Array<string>} styles.scrollable the wrapper element styles containing the scrollable area and scrollbars, implemented as a dynamic grid.
   * @param {string|Array<string>} styles.contentWrapper styles for the container element that wraps the element with `overflow: auto`
   * @param {string|Array<string>} styles.content styles for element with `overflow: auto`
   * @param {string|Array<string>} styles.scrollbar scrollbar element styles
   * @param {string|Array<string>} styles.thumb thumb element styles
   */
  styles?: Partial<StylesType>;
  /**
   * Содержимое прокручиваемой области
   * @param {Object} payload - scrollable payload
   * @param {boolean} payload.isTopEdgeReached Is the element scrolled to the top?
   * @param {boolean} payload.isBottomEdgeReached Is the element scrolled to the bottom?
   * @param {boolean} payload.isLeftEdgeReached Is the element scrolled to the left?
   * @param {boolean} payload.isRightEdgeReached Is the element scrolled to the right?
   * @param {boolean} payload.hasHorizontalScrollbar Is there a horizontal scrollbar?
   * @param {boolean} payload.hasVerticalScrollbar Is there a vertical scrollbar?
   * @param {boolean} payload.showThumbOnHover show scrollbar on hover?
   */
  children: ReactNode | ((payload: ScrollablePayloadType | undefined) => ReactNode);
}

/**
 * Scrollable is a custom component made to handle scrolling with a custom scrollbar.
 * The scrolling functionality relies on the browser's native implementation, while the scrollbars are hidden (`scrollbar-width: none;` `::-webkit-scrollbar { width: 0; }`).
 * Scrollbars are implemented as separate programmatically controlled elements.
 *
 * The component supports all properties of the HTML element that are passed to the inner element with the CSS overflow rule. For example, this allows configuring scrolling rules.
 *
 * Using [additional properties](#on-left-edge-reached-props-anchor), the component can intercept events when the scrollable area reaches its top, bottom, left, or right edge.
 *
 * The component supports multiple styling techniques:
 * 1. using CSS variables to support simple scrollbar styling. See available variables and default values below:
 *  - thumb variables:
 *      - `--thumb-border: none;`
 *      - `--thumb-border-radius: 3px;`
 *      - `--thumb-background: #C7CED480;`
 *      - `--thumb-size: 6px;`
 *  - scrollbar variables:
 *      - `--scrollbar-background: none;`
 *      - `--scrollbar-border: none;`
 *      - `--scrollbar-border-radius: 0;`
 *
 * 2. using [classNames api](#classnames-props-anchor) to support more complex styling
 *
 * 3. using [styles api](#styles-props-anchor) to support more complex styling
 *
 * 4. using component's internal classes to support more complex styling
 *  - `scrollable` - the wrapper element class containing the scrollable area and scrollbars, implemented as a dynamic grid.
 *  - `scrollable__content` - scrollable element class - uses CSS overflow property
 *  - `scrollable__scrollbar` - scrollbar element class
 *  - `scrollable__scrollbar_vertical` - vertical scrollbar modifier class
 *  - `scrollable__scrollbar_horizontal` - horizontal scrollbar modifier class
 *  - `scrollable__scrollbar__thumb` - thumb element class
 */
function Scrollable({
  children,
  showThumbOnHover = false,
  className = undefined,
  classNames = undefined,
  style = undefined,
  styles = undefined,
  onLeftEdgeReached = undefined,
  onRightEdgeReached = undefined,
  onTopEdgeReached = undefined,
  onBottomEdgeReached = undefined,
  onScrollableStateChange = undefined,
  suppressHandlers = false,
  ...props
}: ScrollablePropsType, ref: Ref<HTMLDivElement>): ReactElement {
  const [visibility, setVisibility] = useState([false, false]);
  const [hasHorizontalScrollbar, hasVerticalScrollbar] = visibility;

  const vScrollbarRef = useRef<HTMLDivElement>(null);
  const hScrollbarRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const scrollableId = useMemo(() => props.id ?? generateUniqId(), [props.id]);

  const [scrollableState, setScrollableState] = useScrollableState({
    scrollableRef,
    onScrollableStateChange,
  });

  useResizeObserver({
    scrollableRef,
    hScrollbarRef,
    vScrollbarRef,
    onResize(size) {
      setVisibility([
        size.hThumbSize !== 0,
        size.vThumbSize !== 0,
      ]);
    },
  });

  const ignoresScrollEvents = useRef(false);

  const onScroll = useEvent((event: UIEvent<HTMLElement>) => {
    if (!suppressHandlers) {
      startTransition(() => {
        setScrollableState(event.currentTarget);
      });
    }
    props.onScroll?.(event);
  })

  const scrollHandlers = useScrollHandlers({
    hScrollbarRef,
    vScrollbarRef,
    onScroll,
    onLeftEdgeReached,
    onRightEdgeReached,
    onTopEdgeReached,
    onBottomEdgeReached,
    suppressHandlers,
    ignoresScrollEvents,
  });

  const pointerHandlers = usePointerHandlers({
    hScrollbarRef,
    vScrollbarRef,
    ignoresScrollEvents,
  });

  const horizontalScrollbarHandlers = useHorizontalScrollbarHandlers({
    scrollbarRef: hScrollbarRef,
    scrollableRef,
    ignoresScrollEvents,
  });

  const verticalScrollbarHandlers = useVerticalScrollbarHandlers({
    scrollbarRef: vScrollbarRef,
    scrollableRef,
    ignoresScrollEvents,
  });

  const scrollablePayload = {
    hasHorizontalScrollbar,
    hasVerticalScrollbar,
    showThumbOnHover,
    ...scrollableState,
  }

  return (
    <CssVariables>
      <div
        className={cx(
          'scrollable',
          {
            'scrollable_has-horizontal-scrollbar': hasHorizontalScrollbar,
            'scrollable_has-vertical-scrollbar': hasVerticalScrollbar,
            'scrollable_show-mouse-on-hover': showThumbOnHover,
          },
          makeClassName(classNames?.scrollable, scrollablePayload),
        )}
        style={makeStyle(styles?.scrollable, scrollablePayload)}
      >
        <div
          className={cx(
            'scrollable__content-wrapper',
            makeClassName(classNames?.contentWrapper, scrollablePayload),
          )}
          style={makeStyle(styles?.contentWrapper, scrollablePayload)}
        >
          <div
            {...props}
            id={scrollableId}
            className={cx(
              'scrollable__content',
              makeClassName(classNames?.content, scrollablePayload),
              className,
            )}
            style={{
              ...style,
              ...makeStyle(styles?.content, scrollablePayload),
            }}
            ref={composeRef(ref, scrollableRef)}
            data-testid="scrollable"
            {...scrollHandlers}
            {...pointerHandlers}
          >
            <div className="scrollable__content-inner">
              {typeof children === 'function' ? children(scrollablePayload) : children}
            </div>
          </div>
        </div>
        <Scrollbar
          ref={vScrollbarRef}
          isVertical
          aria-controls={scrollableId}
          classNames={classNames}
          {...verticalScrollbarHandlers}
        />
        <Scrollbar
          ref={hScrollbarRef}
          aria-controls={scrollableId}
          classNames={classNames}
          {...horizontalScrollbarHandlers}
        />
        <div data-testid="extreme-point" />
      </div>
    </CssVariables>
  );
}

const MemoScrollable = memo(forwardRef<
  HTMLDivElement,
  ScrollablePropsType
>(Scrollable));

MemoScrollable.displayName = 'Scrollable';

export default MemoScrollable;
