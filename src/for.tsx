import React from 'react';

export interface ForProps<T> {
  keyAttr?: string;
  for: T[];
}

export interface ForChildProps<T> {
  key?: string;
  data: T;
}

export type ForComponent<T> =
  | React.FC<ForChildProps<T>>
  | ((props: ForChildProps<T>) => React.ReactElement);

export function For<T>(Component: ForComponent<T>): React.FC<ForProps<T>> {
  function Wrapper(props: ForProps<T>): React.ReactElement {
    const { for: list, ...componentProps } = props;

    return (
      <React.Fragment>
        {list.map((data: any, index: number) => {
          const key = (props.keyAttr && data[props.keyAttr]) ?? index;

          if (typeof Component === 'function') {
            return Component({ key, data, ...componentProps });
          }

          return React.createElement(Component, {
            key,
            data,
            ...componentProps,
          });
        })}
      </React.Fragment>
    );
  }

  Wrapper.displayName = 'For';

  Wrapper.defaultProps = {
    for: [],
  };

  return Wrapper;
}
