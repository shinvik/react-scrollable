import { test, expect } from 'vitest';
import makeClassName from './makeClassName';

test('makeClassName function collect element css properties', () => {
  expect(makeClassName(undefined)).toBe(undefined);
  expect(makeClassName('cls')).toBe('cls');
  expect(makeClassName(['cls1', 'cls2'])).toEqual(['cls1', 'cls2']);
  expect(
    makeClassName(({
      isVertical,
    }) => isVertical ? ['cls1'] : ['cls2'], {
      isVertical: true
    }))
    .toEqual(['cls1']);
})