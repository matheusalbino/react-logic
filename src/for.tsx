import React from 'react';
import pickBy from 'lodash/pickBy';
import mapValues from 'lodash/mapValues';
import mapKeys from 'lodash/mapKeys';

export type ForProps<DataProps, ExtraProps = any> = {
  'for-key': ((item: DataProps, index: number) => string | number) | undefined;
  for: DataProps[];
  [K: string]: any;
} & ExtraProps;

export function For<ComponentProps, ExtraProps = any, DataProps = any>(
  Component: React.FC<ComponentProps>
): React.FC<ForProps<DataProps, ExtraProps>> {
  const Wrapper: React.FC<ForProps<DataProps, ExtraProps>> = (props) => {
    const { for: list, 'for-key': getKey, ...propsToPass } = props;

    const componentProps = pickBy(propsToPass, (_value, key) => !key.startsWith('for-'));
    const processProps = pickBy(propsToPass, (_value, key) => key.startsWith('for-'));

    return (
      <React.Fragment>
        {list.map((data: any, index: number) => {
          const key = getKey?.(data, index) ?? index;

          const transformedProps = mapKeys(
            mapValues(processProps as any, (fn: Function): any => fn(data)),
            (_value, key: string): string => key.replace('for-', '')
          );

          const newProps = {
            key,
            data: data,
            ...transformedProps,
            ...componentProps
          };

          return <Component {...((newProps as unknown) as ComponentProps)} />;
        })}
      </React.Fragment>
    );
  };

  Wrapper.displayName = Component.name ?? 'For';

  return Wrapper;
}
