import React from 'react';
import { If, IfProps } from '../src/if';

export default {
  title: 'If',
  component: If,
  args: {
    if: true
  },
  argTypes: {
    if: {
      control: 'boolean'
    }
  },
  parameters: {
    layout: 'centered'
  }
};

const Text: React.FC = () => <div>This is a condition</div>;

const IfComponent = If(Text);

export const Default: React.FC<IfProps> = (props) => {
  return <IfComponent {...props} />;
};
