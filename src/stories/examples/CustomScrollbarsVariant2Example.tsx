import Scrollable, { type ClassNamesType } from '@shinvik/react-scrollable';
import { css } from '@emotion/css';
import type { ReactNode } from 'react';

const classNames: ClassNamesType = {
  scrollable: css({
    width: 300,
    height: 300,
    '--thumb-size': '10px',
    '--thumb-background': 'cyan',
    '--thumb-border-radius': '5px',
    '--scrollbar-background': '#C7CED480',
    '--scrollbar-border-radius': '5px',
  }),
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