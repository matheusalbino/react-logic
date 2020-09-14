import React from 'react';

export type RepeatProps<ExtraProps = any> = {
  repeat: number;
  [K: string]: any;
} & ExtraProps;

export function Repeat<ComponentProps, ExtraProps = any>(
  Component: React.FC<ComponentProps>
): React.FC<RepeatProps<ExtraProps>> {
  const Wrapper: React.FC<RepeatProps<ExtraProps>> = (props) => {
    const { repeat: times, ...componentProps } = props;
    const list = Array(Math.max(1, times)).fill(undefined);

    return (
      <React.Fragment>
        {list.map((_, index) => {
          const newProps = { key: index, index, ...componentProps };

          return <Component {...((newProps as unknown) as ComponentProps)} />;
        })}
      </React.Fragment>
    );
  };

  Wrapper.displayName = Component.name ?? 'Repeat';

  // @ts-expect-error
  Wrapper.defaultProps = {
    repeat: 1
  };

  return Wrapper;
}
