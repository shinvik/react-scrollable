import { type RefObject, useLayoutEffect, useMemo } from 'react';
import { floor, isMore } from '@/utils/math';
import makePx from '@/utils/makePx';
import setScrollbarOffset from '@/utils/setScrollbarOffset';
import useEvent from './useEvent';
import useRAF from './useRAF';

type ScrollbarsSizeType = {
  hThumbSize: number;
  vThumbSize: number;
}
type UseScrollableObserverPropsType = {
  /**
   * reference to scrollable element
   */
  scrollableRef: RefObject<HTMLElement | null>;
  /**
   * reference to horizontal scrollbar element
   */
  hScrollbarRef: RefObject<HTMLElement | null>;
  /**
   * reference to vertical scrollbar element
   */
  vScrollbarRef: RefObject<HTMLElement | null>;
  /**
   * onChange function called on scrollable area resized
   * @param {Object} size - calculated vertical/horizontal thumb sizes
   * @param {number} size.hThumbSize - horizontal thumb size
   * @param {number} size.vThumbSize - vertical thumb size
   */
  onResize: (size: ScrollbarsSizeType) => void;
}

const useResizeObserver = ({
  scrollableRef,
  hScrollbarRef,
  vScrollbarRef,
  onResize,
}: UseScrollableObserverPropsType) => {
  const rAF = useRAF();
  const onResizeEvent = useEvent(onResize);
  const resizeObserver = useMemo(() => new ResizeObserver(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      const hThumbSize = isMore(scrollableElement.scrollWidth, scrollableElement.offsetWidth)
        ? floor(scrollableElement.offsetWidth / (scrollableElement.scrollWidth / scrollableElement.offsetWidth), 1)
        : 0;
      const vThumbSize = isMore(scrollableElement.scrollHeight, scrollableElement.offsetHeight)
        ? floor(scrollableElement.offsetHeight / (scrollableElement.scrollHeight / scrollableElement.offsetHeight), 1)
        : 0;

      rAF(() => {
        const vScrollbar = vScrollbarRef.current;
        const hScrollbar = hScrollbarRef.current;
        if (vScrollbar) {
          vScrollbar.style.height = makePx(vThumbSize);
          setScrollbarOffset(vScrollbar, {
            scrollableElement,
            value: scrollableElement.scrollTop,
            isVertical: true,
          })
        }
        if (hScrollbar) {
          hScrollbar.style.width = makePx(hThumbSize);
          setScrollbarOffset(hScrollbar, {
            scrollableElement,
            value: scrollableElement.scrollLeft,
            isVertical: false,
          });
        }
      });

      onResizeEvent({
        hThumbSize,
        vThumbSize,
      })
    }
  }), [
    scrollableRef,
    vScrollbarRef,
    hScrollbarRef,
    onResizeEvent,
    rAF,
  ]);

  useLayoutEffect(() => {
    const scrollableElement = scrollableRef.current;
    const contentElement = scrollableElement?.firstElementChild;
    if (scrollableElement) {
      resizeObserver.observe(scrollableElement);
    }
    if (contentElement) {
      resizeObserver.observe(contentElement);
    }
    return () => {
      if (scrollableElement) {
        resizeObserver.unobserve(scrollableElement);
      }
      if (contentElement) {
        resizeObserver.unobserve(contentElement);
      }
    };
  }, [
    resizeObserver,
    scrollableRef,
  ]);
}

export default useResizeObserver;
