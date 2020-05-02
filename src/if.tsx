import React from 'react';

export interface IfProps<T> extends React.AllHTMLAttributes<T> {
  if?: boolean;
}

export interface IfChildProps<T> {}

export type IfComponent<T> =
  | React.FC<IfChildProps<T>>
  | ((props: IfChildProps<T>) => React.ReactElement);

export function If<T>(Component: IfComponent<T>): React.FC<IfProps<T>> {
  function Wrapper(props: IfProps<T>): React.ReactElement | null {
    const { if: condition, ...componentProps } = props;

    if (condition) {
      return React.createElement(Component, componentProps);
    }

    return null;
  }

  Wrapper.displayName = 'If';

  Wrapper.defaultProps = {
    if: true,
  };

  return Wrapper;
}
