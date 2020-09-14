import React from 'react';
import { For, ForProps } from '../src/for';

export default {
  title: 'For',
  component: For,
  args: {
    for: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }],
    'for-key': (item: any) => item.name
  },
  argTypes: {
    for: {
      control: 'object'
    },
    'for-key': {
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'index' }
      }
    }
  },
  parameters: {
    layout: 'centered'
  }
};

interface LiProps {
  data: { name: string };
  onClick: Function;
}

const Li: React.FC<LiProps> = (props) => {
  const { data, onClick, ...extraProps } = props;

  return <li {...extraProps}>{data.name}</li>;
};

const ForComponent = For(Li);

export const Default: React.FC<ForProps<LiProps>> = (props) => (
  <ul>
    <ForComponent {...props} />
  </ul>
);
