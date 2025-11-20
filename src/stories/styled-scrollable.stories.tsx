import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef, useCallback } from 'react';
import { fn } from 'storybook/test';
import { css } from '@emotion/css';
import Scrollable from '@/scrollable';
import vDragUrl from './assets/v-drag.svg?url';
import hDragUrl from './assets/h-drag.svg?url';
import CircleUp from './assets/circle-up.svg?react';
import CircleDown from './assets/circle-down.svg?react';
import CircleLeft from './assets/circle-left.svg?react';
import CircleRight from './assets/circle-right.svg?react';
import IconButton from './components/icon-button';
import { HorizontallyAndVerticallyScrollable } from './simple.stories';

const meta = {
  title: 'Examples/Styled',
  component: Scrollable,
  args: {
    showThumbOnHover: false,
    onLeftEdgeReached: fn(),
    onRightEdgeReached: fn(),
    onTopEdgeReached: fn(),
    onBottomEdgeReached: fn(),
  },
  argTypes: {
    showThumbOnHover: {
      options: [false, true],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: {
      exclude: [
        'children',
        'className',
        'style',
      ],
    },
  },
} satisfies Meta<typeof Scrollable>;

export default meta;


type Story = StoryObj<typeof meta>;

export const DefaultScrollbars: Story = {
  args: {
    ...HorizontallyAndVerticallyScrollable.args,
    classNames: {
      scrollable: css({
        width: 300,
        height: 300,
      }),
    },
  },
}

export const CustomScrollbarsVariant1: Story = {
  ...DefaultScrollbars,
  args: {
    ...DefaultScrollbars.args,
    classNames: {
      scrollable: css({
        width: 300,
        height: 300,
        '--thumb-size': '10px',
        '--thumb-background': 'cyan',
        '--thumb-border-radius': '5px',
        '--scrollbar-border': '1px solid cyan',
        '--scrollbar-border-radius': '5px',
      }),
    },
  },
}


export const CustomScrollbarsVariant2: Story = {
  ...DefaultScrollbars,
  args: {
    ...DefaultScrollbars.args,
    classNames: {
      scrollable: css({
        '--thumb-size': '10px',
        '--thumb-background': 'cyan',
        '--thumb-border-radius': '5px',
        '--scrollbar-background': '#C7CED480',
        '--scrollbar-border-radius': '5px',
      }),
    },
  },
}

export const CustomScrollbarsVariant3: Story = {
  ...DefaultScrollbars,
  args: {
    ...DefaultScrollbars.args,
    classNames: {
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
    }
  },
}

export const CustomScrollbarsVariant4: Story = {
  ...DefaultScrollbars,
  render: function Render({
    children,
    ...props
  }) {
    const scrollableRef = useRef<HTMLDivElement>(null)
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

    const arrowCls = css({
      width: 30,
      height: 30,
      fill: '#8CAFBF',
    })
    return (
      <Scrollable
        {...props}
        styles={{
          contentWrapper: {
            position: 'relative',
          },
        }}
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
}