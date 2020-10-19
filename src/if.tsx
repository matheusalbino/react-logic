import React from 'react';

export type IfProps<ExtraProps = {}> = {
  if?: boolean;
} & ExtraProps &
  Record<string, any>;

type IfComponent<ExtraProps> = React.FC<IfProps<ExtraProps>>;

export function If<ComponentProps, ExtraProps = {}>(Component: React.FC<ComponentProps>): IfComponent<ExtraProps> {
  const Wrapper: IfComponent<ExtraProps> = (props) => {
    const { if: condition, ...componentProps } = props;

    if (condition === undefined || condition) {
      return <Component {...((componentProps as unknown) as ComponentProps)} />;
    }

    return null;
  };

  Wrapper.displayName = Component.name ?? 'If';

  // @ts-expect-error
  Wrapper.defaultProps = {
    if: true
  };

  return Wrapper;
}
