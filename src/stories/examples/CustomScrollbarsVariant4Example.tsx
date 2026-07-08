import Scrollable, { type ClassNamesType } from '@shinvik/react-scrollable';
import { css } from '@emotion/css';
import { type ReactNode, useCallback, useRef } from 'react';
import IconButton from '../components/icon-button';
import CircleUp from '@/stories/assets/circle-up.svg?react';
import CircleDown from '@/stories/assets/circle-down.svg?react';
import CircleLeft from '@/stories/assets/circle-left.svg?react';
import CircleRight from '@/stories/assets/circle-right.svg?react';

const classNames: ClassNamesType = {
  scrollable: css({
    width: 300,
    height: 300,
  }),
  contentWrapper: css({
    position: 'relative',
  })
};

const arrowCls = css({
  width: 30,
  height: 30,
  fill: '#8CAFBF',
});

export type ScrollableExampleType = {
  children: ReactNode;
}

export default function ScrollableExample({
  children,
}: ScrollableExampleType) {
  const scrollableRef = useRef<HTMLElement>(null);
  const scrollTop = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
  }, []);
  const scrollBottom = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight - scrollableRef.current.offsetHeight;
    }
  }, []);
  const scrollLeft = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft = 0;
    }
  }, []);
  const scrollRight = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft = scrollableRef.current.scrollWidth - scrollableRef.current.offsetWidth;
    }
  }, []);

  const isIntermediate = (value: boolean | undefined) => value === false;

  return (
    <Scrollable
      classNames={classNames}
      ref={scrollableRef}
    >
      {
        (scrollableState) => (
          <>
            {children}
            {
              isIntermediate(scrollableState?.isTopEdgeReached) && (
                <IconButton
                  position="top-center"
                  onClick={scrollTop}
                >
                  <CircleUp className={arrowCls} />
                </IconButton>
              )
            }
            {
              isIntermediate(scrollableState?.isBottomEdgeReached) && (
                <IconButton
                  position="bottom-center"
                  onClick={scrollBottom}
                >
                  <CircleDown className={arrowCls} />
                </IconButton>
              )
            }
            {
              isIntermediate(scrollableState?.isLeftEdgeReached) && (
                <IconButton
                  position="left-center"
                  onClick={scrollLeft}
                >
                  <CircleLeft className={arrowCls} />
                </IconButton>
              )
            }
            {
              isIntermediate(scrollableState?.isRightEdgeReached) && (
                <IconButton
                  position="right-center"
                  onClick={scrollRight}
                >
                  <CircleRight className={arrowCls} />
                </IconButton>
              )
            }
          </>
        )
      }
    </Scrollable>
  )
}