import React from 'react';

export type IfProps<ExtraProps = any> = {
  if?: boolean;
  [key: string]: any;
} & ExtraProps;

export function If<ComponentProps, ExtraProps = any>(
  Component: React.FC<ComponentProps>
): React.FC<IfProps<ExtraProps>> {
  const Wrapper: React.FC<IfProps<ExtraProps>> = (props) => {
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
