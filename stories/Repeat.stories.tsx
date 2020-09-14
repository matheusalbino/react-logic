import React from 'react';
import { Repeat, RepeatProps } from '../src/repeat';
import { ReactLogo } from './components/ReactLogo';

export default {
  title: 'Repeat',
  component: Repeat,
  args: {
    repeat: 3
  },
  argTypes: {},
  parameters: {
    layout: 'centered'
  }
};

const RepeatComponent = Repeat(ReactLogo);

export const Default: React.FC<RepeatProps> = (props) => (
  <div style={{ display: 'flex' }}>
    <RepeatComponent {...props} />
  </div>
);
