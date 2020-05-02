import React from 'react';

export interface RepeatProps<T> extends React.AllHTMLAttributes<T> {
  repeat: number;
}

export interface RepeatChildProps<T> {
  key?: string | number;
  index: number;
}

export type RepeatComponent<T> =
  | React.FC<RepeatChildProps<T>>
  | ((props: RepeatChildProps<T>) => React.ReactElement);

export function Repeat<T>(
  Component: RepeatComponent<T>,
): React.FC<RepeatProps<T>> {
  function Wrapper(props: RepeatProps<T>): React.ReactElement {
    const { repeat: times, ...componentProps } = props;
    const list = Array(times).fill(undefined);

    return (
      <React.Fragment>
        {list.map((_, index) => {
          if (typeof Component === 'function') {
            return Component({ key: index, index, ...componentProps });
          }

          return React.createElement(Component, {
            key: index,
            index,
            ...componentProps,
          });
        })}
      </React.Fragment>
    );
  }

  Wrapper.displayName = 'Repeat';

  Wrapper.defaultProps = {
    repeat: 1,
  };

  return Wrapper;
}
