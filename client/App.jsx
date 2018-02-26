import React, { Component } from 'react';

import Header from './views/layout/header';
import Footer from './views/layout/footer';
import Routes from './config/router';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return [
      <div className="dw-app__container" key="container">
        <Header key="header" />
        <div className="dw-app__main">
          <Routes />
        </div>
      </div>,
      <div className="dw-app__footer" key="footer" >
        <Footer />
      </div>,
    ];
  }
}

export default App;
