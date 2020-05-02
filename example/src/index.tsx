import React, { useState } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { Logic } from '@matheusalbino/react-logic';
import './index.css';

function ListItem(props: { data: { name: string } }) {
  return <li>{props.data.name}</li>;
}

const Item = Logic(ListItem);

const Image = Logic((props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img {...props} />
));

function App() {
  const [show, setShow] = useState(true);
  const [times, setTimes] = useState(2);

  const toggle = () => setShow((state) => !state);
  const plus = () => setTimes((state) => state + 1);
  const minus = () =>
    setTimes((state) => {
      if (state - 1 < 0) {
        return 0;
      }

      return state - 1;
    });

  return (
    <div>
      <h1>
        Condition{' '}
        <button type="button" onClick={toggle}>
          Toggle
        </button>
      </h1>
      <Image if={show} src={logo} className="img-spin" alt="logo" />

      <h1>
        Repeat at 2 times{' '}
        <button type="button" onClick={minus}>
          -
        </button>
        <button type="button" onClick={plus}>
          +
        </button>
      </h1>
      <Image repeat={times} src={logo} className="img-spin" alt="logo" />

      <h1>For each list</h1>
      <ul>
        <Item
          for={[
            { name: 'bruno001' },
            { name: 'ProgramadorRanzinza' },
            { name: 'Giancarlopt' },
          ]}
        />
      </ul>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
