import { type UIEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor, fireEvent, fn } from 'storybook/test';
import { css } from '@emotion/css';
import Scrollable from '@/scrollable';
import useEvent from '@/hooks/useEvent';
import { createRange, loadRange } from './utils';

const meta = {
  title: 'Examples/LazyLoading',
  component: Scrollable,
  args: {
    showThumbOnHover: false,
    children: null,
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

const verticalScrolling = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const verticalScrollingItem = css`
  height: 100px;
  line-height: 100px;
  width: 100%;
  text-align: center;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  flex-shrink: 0;
`;
const horizontalScrolling = css`
  display: flex;
  gap: 10px;
`;
const horizontalScrollingItem = css`
  height: 100px;
  line-height: 100px;
  width: 200px;
  text-align: center;
  border: 1px solid #cccccc;
  flex-shrink: 0;
`;

export const LazyHorizontalScrollable: Story = {
  args: {
    styles: {
      scrollable: {
        width: 1000,
        margin: '0 auto',
      },
    },
    onLeftEdgeReached: fn(),
    onRightEdgeReached: fn(),
  },
  render: function Render({
    onRightEdgeReached,
    ...args
  }) {
    const [items, setItems] = useState<number[]>(() => createRange(1, 10));
    const [isLoading, setIsLoading] = useState(false);
    const onRightEdgeReachedEvent = useEvent(async (event: UIEvent) => {
      onRightEdgeReached?.(event);
      setIsLoading(true);
      const lastItem = items.at(-1) ?? 0;
      const nextItems = await loadRange(
        lastItem + 1,
        lastItem + 10,
      );
      setItems([
        ...items,
        ...nextItems,
      ]);
      setIsLoading(false);
    });

    return (
      <Scrollable
        {...args}
        onRightEdgeReached={onRightEdgeReachedEvent}
        suppressHandlers={isLoading}
      >
        <div className={horizontalScrolling}>
          {
            items.map((item) => (
              <div
                key={item}
                className={horizontalScrollingItem}
              >
                {item}
              </div>
            ))
          }
          {
            isLoading && (
              <div className={horizontalScrollingItem}>
                loading...
              </div>
            )
          }
        </div>
      </Scrollable>
    )
  },
  async play({
    step,
  }) {
    await step('has horizontal scrollbars', async ({
      canvas,
    }) => {
      await waitFor(() => {
        expect(canvas.queryByRole('scrollbar', { name: 'vertical scrollbar' })).not.toBeInTheDocument();
        expect(canvas.queryByRole('scrollbar', { name: 'horizontal scrollbar' })).toBeInTheDocument();
      });
    });

    await step('scroll content horizontally using mouse wheel', async ({
      canvas,
      args,
    }) => {
      const scrollable = canvas.getByTestId('scrollable');

      await expect(scrollable).toBeInTheDocument();

      const scrollLeft = scrollable.scrollWidth - scrollable.offsetWidth;

      await fireEvent.scroll(scrollable, {
        target: {
          scrollLeft,
        },
      });

      await waitFor(async () => {
        await expect(args.onRightEdgeReached).toHaveBeenCalled();
      });

      await expect(
        canvas.queryByText('loading...')
      ).toBeInTheDocument();

      // waiting for the next items to load
      await waitFor(async () => {
        await expect(
          canvas.queryByText('loading...')
        ).not.toBeInTheDocument();
      });

      await fireEvent.scroll(scrollable, {
        target: {
          scrollLeft: 0,
        },
      });

      await waitFor(async () => {
        await expect(args.onLeftEdgeReached).toHaveBeenCalled();
      });
    });
  }
}

export const LazyVerticalScrollable: Story = {
  args: {
    ...LazyHorizontalScrollable.args,
    styles: {
      scrollable: {
        width: 300,
        height: 300,
      },
    },
    onTopEdgeReached: fn(),
    onBottomEdgeReached: fn(),
  },
  render: function Render({
    onBottomEdgeReached,
    ...args
  }) {
    const [items, setItems] = useState(() => createRange(1, 10));
    const [isLoading, setIsLoading] = useState(false);
    const onBottomEdgeReachedEvent = useEvent(async (event: UIEvent) => {
      onBottomEdgeReached?.(event);
      setIsLoading(true);
      const lastItem = items.at(-1) ?? 0;
      const nextItems = await loadRange(
        lastItem + 1,
        lastItem + 10,
      );
      setItems([
        ...items,
        ...nextItems,
      ]);
      setIsLoading(false);
    });
    return (
      <Scrollable
        {...args}
        onBottomEdgeReached={onBottomEdgeReachedEvent}
        suppressHandlers={isLoading}
      >
        <div className={verticalScrolling}>
          {
            items.map((item) => (
              <div
                key={item}
                className={verticalScrollingItem}
              >
                {item}
              </div>
            ))
          }
          {
            isLoading && (
              <div className={verticalScrollingItem}>
                loading...
              </div>
            )
          }
        </div>
      </Scrollable>
    )
  },
  async play({
    step,
  }) {
    await step('has vertical scrollbar', async ({
      canvas,
    }) => {
      await waitFor(() => {
        expect(canvas.queryByRole('scrollbar', { name: 'vertical scrollbar' })).toBeInTheDocument();
        expect(canvas.queryByRole('scrollbar', { name: 'horizontal scrollbar' })).not.toBeInTheDocument();
      });
    });

    await step('scrolls content vertically using mouse wheel', async ({
      canvas,
      args,
    }) => {
      const scrollable = canvas.getByTestId('scrollable');
      const scrollbarByY = canvas.getByRole('scrollbar', { name: 'vertical scrollbar' })!;

      await expect(scrollable).toBeInTheDocument();
      await expect(scrollbarByY).toBeInTheDocument();

      const scrollTop = scrollable.scrollHeight - scrollable.offsetHeight;

      await fireEvent.scroll(scrollable, {
        target: {
          scrollTop,
        },
      });

      await waitFor(async () => {
        await expect(args.onBottomEdgeReached).toHaveBeenCalled();
      });

      await expect(
        canvas.queryByText('loading...')
      ).toBeInTheDocument();

      // waiting for the next items to load
      await waitFor(async () => {
        await expect(
          canvas.queryByText('loading...')
        ).not.toBeInTheDocument();
      });

      await fireEvent.scroll(scrollable, {
        target: {
          scrollTop: 0,
        },
      });

      await waitFor(async () => {
        await expect(args.onTopEdgeReached).toHaveBeenCalled();
      });
    });
  }
}