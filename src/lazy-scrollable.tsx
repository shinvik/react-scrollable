import { memo, useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import useEvent from '@/hooks/useEvent';
import cx from '@/utils/classnames';
import Scrollable from './scrollable';
import type { ScrollablePropsType, ScrollableStateType } from './scrollable';
import './lazy-scrollable.css';

export type LazyScrollablePropsType<Item> = {
  align?: 'horizontal' | 'vertical';
  loadItems: (options: { offset: number }) => Promise<{
    hasNext: boolean;
    items: Item[];
  }>;
  renderItem: (item: Item, index: number, items: Item[]) => ReactElement;
  renderPlaceholder: (items: Item[]) => ReactElement;
  updaterKeys?: unknown[];
} & Omit<ScrollablePropsType, 'children'>;

function LazyScrollable<Item>({
  align = 'vertical',
  className,
  renderItem,
  renderPlaceholder,
  loadItems: loadItemsProps,
  updaterKeys = [],
  ...props
}: LazyScrollablePropsType<Item>) {
  const scrollableRef = useRef<HTMLElement>(null);
  // isFetched is used to prevent useEffect from running twice.
  const [isFetched, setIsFetched] = useState(false);
  const [items, setItems] = useState<Item[]>(() => []);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNext, setHasNext] = useState<boolean | undefined>(undefined);

  const loadItems = useEvent(async () => {
    setIsLoading(true);
    try {
      const response = await loadItemsProps({
        offset: items.length,
      });
      setItems([
        ...items,
        ...response.items,
      ]);
      setHasNext(response.hasNext);
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    if (!isFetched) {
      setIsFetched(true);
      loadItems();
    }
  }, [
    isFetched,
    loadItems,
    setIsFetched,
  ]);

  useEffect(() => {
    setItems([]);
    setHasNext(false);
    setIsFetched(false);
  }, [...updaterKeys]);

  useEffect(() => {
    const scrollable = scrollableRef.current;
    if (isLoading && scrollable) {
      switch (align) {
        case 'vertical':
          scrollable.scrollTop = scrollable.scrollHeight;
          return;
        case 'horizontal':
          scrollable.scrollLeft = scrollable.scrollWidth;
          return;
      }
    }
  }, [isLoading, align]);

  const isTickingRef = useRef(false);
  const onScrollableStateChange = useEvent(async (event: ScrollableStateType | undefined) => {
    if (!isTickingRef.current) {
      switch (true) {
        case align === 'vertical' && event?.isBottomEdgeReached && hasNext !== false:
        case align === 'horizontal' && event?.isRightEdgeReached && hasNext !== false:
          window.requestAnimationFrame(() => {
            loadItems()
              .then(() => {
                isTickingRef.current = false;
              });
          });
          isTickingRef.current = true;
          return;
      }
    }
  });

  return (
    <Scrollable
      {...props}
      ref={scrollableRef}
      className={cx(className, 'lazy-scrollbar')}
      onScrollableStateChange={onScrollableStateChange}
      suppressHandlers={isLoading}
    >
      <div className={cx('lazy-scrollbar-items', {
        'lazy-scrollbar-items_horizontal': align === 'horizontal',
        'lazy-scrollbar-items_vertical': align === 'vertical',
      })}>
        {
          items.map((item, index) => (
            <div key={index}>
              {renderItem(item, index, items)}
            </div>
          ))
        }
        {
          items.length > 0 && isLoading && (
            <div className="lazy-scrollbar-placeholder">
              {renderPlaceholder(items)}
            </div>
          )
        }
      </div>
    </Scrollable>
  )
}

export default memo(LazyScrollable) as typeof LazyScrollable;