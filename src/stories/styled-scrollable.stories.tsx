import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Scrollable from '@shinvik/react-scrollable';
import { HorizontallyAndVerticallyScrollable } from './simple.stories';

import CustomScrollbarsVariant1Example from './examples/CustomScrollbarsVariant1Example';
import RawCustomScrollbarsVariant1Example from './examples/CustomScrollbarsVariant1Example?raw';
import CustomScrollbarsVariant2Example from './examples/CustomScrollbarsVariant2Example';
import RawCustomScrollbarsVariant2Example from './examples/CustomScrollbarsVariant2Example?raw';
import CustomScrollbarsVariant3Example from './examples/CustomScrollbarsVariant3Example';
import RawCustomScrollbarsVariant3Example from './examples/CustomScrollbarsVariant3Example?raw';
import CustomScrollbarsVariant4Example from './examples/CustomScrollbarsVariant4Example';
import RawCustomScrollbarsVariant4Example from './examples/CustomScrollbarsVariant4Example?raw';
import { longText } from './constants';

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
    docs: {
      source: {
        language: 'tsx',
      }
    }
  },
} satisfies Meta<typeof Scrollable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomScrollbarsVariant1: Story = {
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant1Example,
      }
    },
  },
  render: function Render() {
    return (
      <CustomScrollbarsVariant1Example>
        <div style={{ width: 800 }}>
          {longText}
        </div>
      </CustomScrollbarsVariant1Example>
    );
  }
}


export const CustomScrollbarsVariant2: Story = {
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant2Example,
      }
    },
  },
  render: function Render() {
    return (
      <CustomScrollbarsVariant2Example>
        <div style={{ width: 800 }}>
          {longText}
        </div>
      </CustomScrollbarsVariant2Example>
    );
  }
}

export const CustomScrollbarsVariant3: Story = {
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant3Example,
      }
    },
  },
  render: function Render() {
    return (
      <CustomScrollbarsVariant3Example>
        <div style={{ width: 800 }}>
          {longText}
        </div>
      </CustomScrollbarsVariant3Example>
    );
  }
}

export const CustomScrollbarsVariant4: Story = {
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant4Example,
      },
    },
  },
  render: function Render() {
    return (
      <CustomScrollbarsVariant4Example>
        <div style={{ width: 800 }}>
          {longText}
        </div>
      </CustomScrollbarsVariant4Example>
    );
  }
}