import { test, expect } from 'vitest';
import makeStyle from './makeStyle';

test('makeStyle function collect element css properties', () => {
  expect(makeStyle(undefined)).toBe(undefined);
  expect(makeStyle({
    backgroundColor: 'green',
    borderRadius: 4
  })).toEqual({
    backgroundColor: 'green',
    borderRadius: 4
  });
  expect(makeStyle(({
    isVertical,
  }) => ({
    backgroundColor: isVertical ? 'blue' : 'green',
    borderRadius: 4
  }), { isVertical: true })).toEqual({
    backgroundColor: 'blue',
    borderRadius: 4
  });
})