import React from 'react';
import { Logic, LogicProps } from '../src/logic';
import { ReactLogo } from './components/ReactLogo';

export default {
  title: 'Logic',
  component: Logic,
  args: {
    if: true,
    for: [{ title: 'Logo 1' }, { title: 'Logo 2' }],
    className: 'img-spin',
    alt: 'logo',
    repeat: 2
  },
  argTypes: {},
  parameters: {
    layout: 'centered'
  }
};

interface ImageProps {
  data: { title: string };
}

const Image: React.FC<ImageProps> = (props) => {
  const { data, ...extraProps } = props;

  return <ReactLogo {...extraProps} data={data} />;
};

const LogicComponent = Logic(Image);

export const Default: React.FC<LogicProps<ImageProps['data']>> = (props) => <LogicComponent {...props} />;
