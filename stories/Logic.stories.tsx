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

const Image: React.FC<React.ImgHTMLAttributes<{}>> = (props: any) => {
  const { data, ...extraProps } = props;

  return <ReactLogo {...extraProps} data={data} />;
};

const LogicComponent = Logic(Image);

export const Default: React.FC<LogicProps<any>> = (props) => <LogicComponent {...props} />;
