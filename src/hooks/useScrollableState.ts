import { type RefObject, useLayoutEffect, useState, useEffect } from 'react';
import type { ScrollableStateType } from '@/types';
import isEqual from '@/utils/isEqual';
import useEvent from './useEvent';

type TUseScrollableStateProps = {
  scrollableRef: RefObject<HTMLElement | null>;
  onScrollableStateChange?: (state: ScrollableStateType | undefined) => void;
}

const useScrollableState = ({
  scrollableRef,
  onScrollableStateChange = undefined,
}: TUseScrollableStateProps) => {
  const [scrollableState, setScrollableState] = useState<ScrollableStateType | undefined>(undefined);

  useLayoutEffect(() => {
    const scrollable = scrollableRef.current;
    if (scrollable) {
      setScrollableState({
        isLeftEdgeReached: scrollable.scrollLeft === 0,
        isRightEdgeReached: scrollable.scrollLeft === scrollable.scrollWidth - scrollable.offsetWidth,
        isTopEdgeReached: scrollable.scrollTop === 0,
        isBottomEdgeReached: scrollable.scrollTop === scrollable.scrollHeight - scrollable.offsetHeight,
      });
    }
  }, [scrollableRef]);

  const updateScrollableState = useEvent((element: HTMLElement) => {
    const nextScrollableState = {
      isLeftEdgeReached: element.scrollLeft === 0,
      isRightEdgeReached: element.scrollLeft === element.scrollWidth - element.offsetWidth,
      isTopEdgeReached: element.scrollTop === 0,
      isBottomEdgeReached: element.scrollTop === element.scrollHeight - element.offsetHeight,
    };
    if (!scrollableState || !isEqual(scrollableState, nextScrollableState)) {
      setScrollableState(nextScrollableState);
    }
  });

  const onScrollableStateChangeEvent = useEvent(
    (state: ScrollableStateType | undefined) => onScrollableStateChange?.(state)
  );

  useEffect(() => {
    onScrollableStateChangeEvent(scrollableState);
  }, [
    scrollableState,
    onScrollableStateChangeEvent,
  ])

  return [scrollableState, updateScrollableState] as const;
}

export default useScrollableState;