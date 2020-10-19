import React from 'react';
import { flow } from 'lodash';
import { Repeat, RepeatProps } from './repeat';
import { For, ForProps } from './for';
import { If, IfProps } from './if';

export type LogicProps<DataProps, ExtraProps = {}> = IfProps<ExtraProps> &
  Partial<RepeatProps<ExtraProps>> &
  Partial<ForProps<DataProps, ExtraProps>>;

type LogicComponent<DataProps, ExtraProps> = React.FC<LogicProps<DataProps, ExtraProps>>;

export function Logic<ComponentProps extends { data: any }, ExtraProps = {}>(
  Component: React.FC<ComponentProps>
): LogicComponent<ComponentProps['data'], ExtraProps> {
  const Wrapper: LogicComponent<ComponentProps['data'], ExtraProps> = (props) => {
    const { repeat, for: map } = props;

    const logics: Array<typeof If | typeof For | typeof Repeat> = [If];

    if (map !== undefined) {
      logics.push(For);
    }

    if (repeat !== undefined) {
      logics.push(Repeat);
    }

    const Executor = flow(logics)(Component);

    return <Executor {...props} />;
  };

  Wrapper.displayName = Component.name ?? 'LogicProps';

  return Wrapper;
}
