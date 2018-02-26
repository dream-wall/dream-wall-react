import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <div className="dw-header">
        <div className="dw-header__wave" />
        <div className="dw-header__nav">
          <h1 className="dw-header__logo">Dreamsmile 筑梦社群</h1>
          <ul className="dw-header__list">
            <li className="dw-header__item"><a href="#">关于我们</a></li>
            <li className="dw-header__item"><Link to="/dream">梦想墙</Link></li>
            <li className="dw-header__item"><Link to="/download" >APP下载</Link>
            </li>
            <li className="dw-header__item"><Link to="/signup">注册梦想</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
