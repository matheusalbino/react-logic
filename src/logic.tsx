import React from 'react';
import { Repeat, RepeatProps, RepeatComponent } from './repeat';
import { For, ForProps, ForComponent } from './for';
import { If, IfProps, IfComponent } from './if';

type LogicProps<T> = IfProps<T> | RepeatProps<T> | ForProps<T>;
type LogicComponent<T> = IfComponent<T> | RepeatComponent<T> | ForComponent<T>;

export function Logic<T>(
  Component: LogicComponent<T>,
): React.FC<LogicProps<T>> {
  function Wrapper(props: any): React.ReactElement | null {
    const {
      repeat,
      keyAttr,
      for: map,
      if: condition,
      ...componentProps
    } = props;

    if (repeat !== undefined) {
      const Wrapper = Repeat(Component as RepeatComponent<T>);
      return React.createElement(Wrapper, { repeat, ...componentProps });
    }

    if (map !== undefined) {
      const Wrapper = For(Component as ForComponent<T>);
      return React.createElement(Wrapper, {
        keyAttr,
        for: map,
        ...componentProps,
      });
    }

    if (condition !== undefined) {
      const Wrapper = If(Component as IfComponent<T>);
      return React.createElement(Wrapper, { if: condition, ...componentProps });
    }

    return null;
  }

  Wrapper.displayName = 'LogicProps';

  Wrapper.defaultProps = {
    if: true,
  };

  return Wrapper;
}
