import React from 'react';
import { Repeat, RepeatProps } from './repeat';
import { For, ForProps } from './for';
import { If, IfProps } from './if';

export type LogicProps<DataProps, ExtraProps = any> = IfProps<ExtraProps> &
  RepeatProps<ExtraProps> &
  ForProps<DataProps, ExtraProps>;

const pipe = (...fns: Function[]): Function =>
  fns.reduce((f: Function, g: Function) => (...args: any) => g(f(...args)));

export function Logic<ComponentProps, ExtraProps = any, DataProps = any>(
  Component: React.FC<ComponentProps>
): React.FC<LogicProps<DataProps, ExtraProps>> {
  const Wrapper: React.FC<LogicProps<DataProps, ExtraProps>> = (props) => {
    const { repeat, for: map } = props;

    const logics: any[] = [If];

    if (map !== undefined) {
      logics.push(For);
    }

    if (repeat !== undefined) {
      logics.push(Repeat);
    }

    const Executor = pipe(...logics)(Component);

    return <Executor {...props} />;
  };

  Wrapper.displayName = Component.name ?? 'LogicProps';

  return Wrapper;
}
