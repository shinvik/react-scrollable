import { memo, type ButtonHTMLAttributes, useMemo } from 'react';
import { css } from '@emotion/css';
import cx from '@/utils/classnames';

const buttonCls = css({
  border: 'none',
  cursor: 'pointer',
  background: '#FFFFFF',
  padding: 0,
  width: 30,
  height: 30,
  borderRadius: 15,
});

type PositionType =
  | 'left-center'
  | 'right-center'
  | 'top-center'
  | 'bottom-center';
type IconButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  position: PositionType;
}

function IconButton({
  children,
  position,
  className,
  ...props
}: IconButtonPropsType) {
  const positionCls = useMemo(() => {
    switch (position) {
      case "left-center":
        return css({
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 10,
        });
      case "right-center":
        return css({
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: 10,
        });
      case "top-center":
        return css({
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: 10,
        });
      case "bottom-center":
        return css({
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 10,
        });
      default:
        return undefined;
    }
  }, [position]);
  return (
    <button
      className={cx(
        buttonCls,
        positionCls,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default memo(IconButton)