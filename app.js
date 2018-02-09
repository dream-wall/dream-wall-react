import React from 'react';
import ReactDOM from 'react-dom';

import './client/postcss/main.css';

const App = () => (
  <h1 className="dw-app__title">Hello, React!</h1>
);

ReactDOM.render(<App />, document.getElementById('root'));
