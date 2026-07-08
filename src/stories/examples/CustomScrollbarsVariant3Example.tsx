import Scrollable, { type ClassNamesType } from '@shinvik/react-scrollable';
import { css } from '@emotion/css';
import vDragUrl from '@/assets/v-drag.svg?url';
import hDragUrl from '@/assets/h-drag.svg?url';
import type { ReactNode } from 'react';

const classNames: ClassNamesType = {
  scrollable: css({
    width: 300,
    height: 300,
  }),
  scrollbar: ({
    isVertical,
  }) => {
    const baseCls = css({
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: -1,
        borderRadius: 5,
      },
      '&:hover': {
        '&::before': {
          backgroundColor: 'rgba(0, 0, 0, 0.16)',
        },
      }
    })
    if (isVertical) {
      return [
        baseCls,
        css({
          '&::before': {
            top: 0,
            bottom: 0,
            left: 5,
            right: 5,
          }
        }),
      ];
    }
    return [
      baseCls,
      css({
        '&::before': {
          top: 5,
          bottom: 5,
          left: 0,
          right: 0,
        }
      }),
    ];
  },
  thumb: ({
    isVertical,
  }) => {
    const baseCls = css({
      borderRadius: 8,
      backgroundColor: '#efb436',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 14,
      '&:hover': {
        backgroundColor: '#e6a722',
      }
    })
    if (isVertical) {
      return [
        baseCls,
        css({
          width: 16,
          backgroundImage: `url("${vDragUrl}")`,
        }),
      ]
    }
    return [
      baseCls,
      css({
        height: 16,
        backgroundImage: `url("${hDragUrl}")`,
      }),
    ]
  },
};

export type ScrollableExampleType = {
  children: ReactNode;
}

export default function ScrollableExample({
  children,
}: ScrollableExampleType) {
  return (
    <Scrollable classNames={classNames}>
      {children}
    </Scrollable>
  )
}