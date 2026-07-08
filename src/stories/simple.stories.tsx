import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor, fireEvent, fn } from 'storybook/test';
import { isEqual, toContentSize, toScrollbarSize } from '@/utils/math';
import Scrollable from '@/scrollable';
import { getAttribute } from './utils';
import { longText, middleText, shortText } from './constants';
import RawSimpleScrollableExample from './examples/SimpleScrollableExample?raw';

const meta = {
  title: 'Examples/Simple',
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
    className: { table: { category: 'customization' } },
    style: { table: { category: 'customization' } },
    children: {
      table: {
        type: {
          summary: 'React.ReactNode | (payload: ScrollablePayloadType | undefined) => React.ReactNode'
        },
      }
    },
    styles: { table: { category: 'customization' } },
    classNames: {
      table: {
        category: 'customization',
        type: { summary: 'Partial<ClassNamesType>' },
      },
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
    docs: {
      source: {
        transform: () => RawSimpleScrollableExample,
      },
    },
  },
} satisfies Meta<typeof Scrollable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HorizontallyAndVerticallyScrollable: Story = {
  args: {
    children: (
      <div style={{ width: 800 }}>
        {longText}
      </div>
    ),
    styles: {
      scrollable: {
        width: 300,
        height: 300,
      }
    },
  },
  async play({
    canvas,
    userEvent,
    step,
  }) {
    await step('have two scrollbars', async () => {
      await waitFor(() => {
        expect(canvas.queryByRole('scrollbar', { name: 'vertical scrollbar' })).toBeInTheDocument();
        expect(canvas.queryByRole('scrollbar', { name: 'horizontal scrollbar' })).toBeInTheDocument();
      });
    });

    await step('scroll content vertically using thumb', async () => {
      const calcContentScrollTop = (value: number) => {
        const scrollableElement = canvas.getByTestId('scrollable')!
        return toContentSize(value, scrollableElement.scrollHeight, scrollableElement.offsetHeight);
      };

      const scrollable = canvas.getByTestId('scrollable');
      const scrollbarByY = canvas.getByRole('scrollbar', { name: 'vertical scrollbar' })!;
      const scrollbarByX = canvas.getByRole('scrollbar', { name: 'horizontal scrollbar' })!;

      await expect(scrollable).toBeInTheDocument();

      const scrollableRect = scrollable.getBoundingClientRect();
      const thumbOffset = 50;

      await userEvent.pointer([
        {
          keys: '[MouseLeft>]',
          target: scrollbarByY,
          coords: {
            clientX: scrollableRect.left,
            clientY: scrollableRect.top + thumbOffset,
          },
        },
        {
          coords: {
            clientX: scrollableRect.left,
            clientY: scrollableRect.top + thumbOffset + 100,
          },
        },
        {
          keys: '[/MouseLeft]',
        },
      ]);

      await expect(isEqual(getAttribute(scrollbarByY, 'data-scroll-top'), 100)).toBeTruthy();
      await expect(isEqual(getAttribute(scrollbarByX, 'data-scroll-left'), 0)).toBeTruthy();
      await waitFor(async () => {
        await expect(isEqual(
          scrollable.scrollTop,
          calcContentScrollTop(getAttribute(scrollbarByY, 'data-scroll-top')))
        ).toBeTruthy();
        await expect(isEqual(scrollable.scrollLeft, 0)).toBeTruthy();
      });

      await userEvent.pointer([
        {
          keys: '[MouseLeft>]',
          target: scrollbarByY,
          coords: {
            clientX: scrollableRect.left,
            clientY: scrollableRect.top + thumbOffset + 100,
          },
        },
        {
          coords: {
            clientX: scrollableRect.left,
            clientY: scrollableRect.top + thumbOffset,
          },
        },
        {
          keys: '[/MouseLeft]',
        },
      ]);
      await expect(isEqual(getAttribute(scrollbarByY, 'data-scroll-top'), 0)).toBeTruthy();
      await expect(isEqual(getAttribute(scrollbarByX, 'data-scroll-left'), 0)).toBeTruthy();
      await waitFor(async () => {
        await expect(isEqual(scrollable.scrollTop, 0)).toBeTruthy();
        await expect(isEqual(scrollable.scrollLeft, 0)).toBeTruthy();
      });
    });

    await step('scroll content horizontally using thumb', async () => {
      const calcContentScrollLeft = (value: number) => {
        const scrollableElement = canvas.getByTestId('scrollable')!
        return toContentSize(value, scrollableElement.scrollWidth, scrollableElement.offsetWidth);
      };

      const scrollable = canvas.getByTestId('scrollable');
      const scrollbarByY = canvas.getByRole('scrollbar', { name: 'vertical scrollbar' })!;
      const scrollbarByX = canvas.getByRole('scrollbar', { name: 'horizontal scrollbar' })!;

      await expect(scrollable).toBeInTheDocument();

      const scrollableRect = scrollable.getBoundingClientRect();
      const thumbOffset = 50;

      await userEvent.pointer([
        {
          keys: '[MouseLeft>]',
          target: scrollbarByX,
          coords: {
            clientX: scrollableRect.left + thumbOffset,
            clientY: scrollableRect.top,
          },
        },
        {
          coords: {
            clientX: scrollableRect.left + thumbOffset + 100,
            clientY: scrollableRect.top,
          },
        },
        {
          keys: '[/MouseLeft]',
        },
      ]);

      await expect(isEqual(getAttribute(scrollbarByY, 'data-scroll-top'), 0)).toBeTruthy();
      await expect(isEqual(getAttribute(scrollbarByX, 'data-scroll-left'), 100)).toBeTruthy();
      await waitFor(async () => {
        await expect(isEqual(scrollable.scrollTop, 0)).toBeTruthy();
        await expect(isEqual(
          scrollable.scrollLeft,
          calcContentScrollLeft(getAttribute(scrollbarByX, 'data-scroll-left')))
        ).toBeTruthy();
      });

      await userEvent.pointer([
        {
          keys: '[MouseLeft>]',
          target: scrollbarByX,
          coords: {
            clientX: scrollableRect.left + thumbOffset + 100,
            clientY: scrollableRect.top,
          },
        },
        {
          coords: {
            clientX: scrollableRect.left + thumbOffset,
            clientY: scrollableRect.top,
          },
        },
        {
          keys: '[/MouseLeft]',
        },
      ]);
      await expect(isEqual(getAttribute(scrollbarByY, 'data-scroll-top'), 0)).toBeTruthy();
      await expect(isEqual(getAttribute(scrollbarByX, 'data-scroll-left'), 0)).toBeTruthy();
      await waitFor(async () => {
        await expect(isEqual(scrollable.scrollTop, 0)).toBeTruthy();
        await expect(isEqual(scrollable.scrollLeft, 0)).toBeTruthy();
      });
    });

    await step('scroll content using mouse wheel', async () => {
      const calcScrollbarScrollLeft = (value: number) => {
        const scrollableElement = canvas.getByTestId('scrollable')!
        return toScrollbarSize(value, scrollableElement.scrollWidth, scrollableElement.offsetWidth);
      };
      const calcScrollbarScrollTop = (value: number) => {
        const scrollableElement = canvas.getByTestId('scrollable')!
        return toScrollbarSize(value, scrollableElement.scrollHeight, scrollableElement.offsetWidth);
      };
      const scrollable = canvas.getByTestId('scrollable');
      const scrollbarByX = canvas.queryByRole('scrollbar', {
        name: 'horizontal scrollbar',
      })!;
      const scrollbarByY = canvas.queryByRole('scrollbar', {
        name: 'vertical scrollbar',
      })!;
      await expect(scrollable).toBeInTheDocument();
      await expect(scrollbarByX).toBeInTheDocument();
      await expect(scrollbarByY).toBeInTheDocument();

      await fireEvent.scroll(scrollable, {
        target: {
          scrollTop: 200,
        }
      });

      await waitFor(async () => {
        await expect(isEqual(
          getAttribute(scrollbarByY, 'data-scroll-top'),
          calcScrollbarScrollTop(scrollable.scrollTop)),
        ).toBeTruthy();
        await expect(isEqual(scrollable.scrollTop, 200)).toBeTruthy();
        await expect(isEqual(getAttribute(scrollbarByX, 'data-scroll-left'), 0)).toBeTruthy();
        await expect(isEqual(scrollable.scrollLeft, 0)).toBeTruthy();
      });

      await fireEvent.scroll(scrollable, {
        target: {
          scrollLeft: 200,
        }
      });

      await waitFor(async () => {
        await expect(isEqual(
          getAttribute(scrollbarByY, 'data-scroll-top'),
          calcScrollbarScrollTop(scrollable.scrollTop)),
        ).toBeTruthy();
        await expect(isEqual(scrollable.scrollTop, 200)).toBeTruthy();
        await expect(isEqual(
          getAttribute(scrollbarByX, 'data-scroll-left'),
          calcScrollbarScrollLeft(scrollable.scrollLeft),
        )).toBeTruthy();
        await expect(isEqual(scrollable.scrollLeft, 200)).toBeTruthy();
      })

      await fireEvent.scroll(scrollable, {
        target: {
          scrollTop: 0,
        }
      });

      await waitFor(async () => {
        await expect(isEqual(getAttribute(scrollbarByY, 'data-scroll-top'), 0)).toBeTruthy();
        await expect(isEqual(scrollable.scrollTop, 0)).toBeTruthy();
        await expect(isEqual(
          getAttribute(scrollbarByX, 'data-scroll-left'),
          calcScrollbarScrollLeft(scrollable.scrollLeft),
        )).toBeTruthy();
        await expect(isEqual(scrollable.scrollLeft, 200)).toBeTruthy();
      });

      await fireEvent.scroll(scrollable, {
        target: {
          scrollLeft: 0,
        }
      });

      await waitFor(async () => {
        await expect(isEqual(getAttribute(scrollbarByY, 'data-scroll-top'), 0)).toBeTruthy();
        await expect(isEqual(scrollable.scrollTop, 0)).toBeTruthy();
        await expect(isEqual(getAttribute(scrollbarByX, 'data-scroll-left'), 0)).toBeTruthy();
        await expect(isEqual(scrollable.scrollLeft, 0)).toBeTruthy();
      });
    });

    // TODO add scroll content tests using touch pointers
  },
};

export const HorizontallyScrollable: Story = {
  ...HorizontallyAndVerticallyScrollable,
  args: {
    ...HorizontallyAndVerticallyScrollable.args,
    children: (
      <div style={{ width: 800 }}>
        {middleText}
      </div>
    ),
  },
  async play({
    canvas,
  }) {
    await waitFor(() => {
      expect(canvas.queryByRole('scrollbar', { name: 'vertical scrollbar' })).not.toBeInTheDocument();
      expect(canvas.queryByRole('scrollbar', { name: 'horizontal scrollbar' })).toBeInTheDocument();
    });
  },
};

export const VerticallyScrollable: Story = {
  ...HorizontallyAndVerticallyScrollable,
  args: {
    ...HorizontallyAndVerticallyScrollable.args,
    children: (
      <div>{middleText}</div>
    ),
  },
  async play({
    canvas,
  }) {
    await waitFor(() => {
      expect(canvas.queryByRole('scrollbar', { name: 'vertical scrollbar' })).toBeInTheDocument();
      expect(canvas.queryByRole('scrollbar', { name: 'horizontal scrollbar' })).not.toBeInTheDocument();
    });
  },
};

export const NotScrollable: Story = {
  args: {
    ...HorizontallyAndVerticallyScrollable.args,
    children: shortText,
  },
  async play({
    canvas,
  }) {
    await waitFor(() => {
      expect(canvas.queryByRole('scrollbar', { name: 'vertical scrollbar' })).not.toBeInTheDocument();
      expect(canvas.queryByRole('scrollbar', { name: 'horizontal scrollbar' })).not.toBeInTheDocument();
    });
  },
};
