import React from 'react';

export type RepeatProps<ExtraProps = {}> = {
  repeat: number;
} & ExtraProps &
  Record<string, any>;

type RepeatComponent<ExtraProps> = React.FC<RepeatProps<ExtraProps>>;

export function Repeat<ComponentProps, ExtraProps = {}>(
  Component: React.FC<ComponentProps>
): RepeatComponent<ExtraProps> {
  const Wrapper: RepeatComponent<ExtraProps> = (props) => {
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
