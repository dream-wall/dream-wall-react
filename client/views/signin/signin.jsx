import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Signin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <div className="dw-signin">
        <div className="dw-signin__main">
          <h2 className="dw-signin__title">登录</h2>
          <div className="dw-signin__form dw-form">
            <div className="dw-form__group">
              <input type="text" className="dw-signin__username dw-form__control is-error" placeholder="请输入用户名" />
              <div className="dw-form__tip">
                <span className="dw-form__tip--error dw-form__tip--empty">请输入用户名</span>
              </div>
            </div>
            <div className="dw-form__group">
              <input type="password" className="dw-signin__password dw-form__control" placeholder="请输入6~32位密码" />
              <div className="dw-form__tip">
                <span className="dw-form__tip--error dw-form__tip--empty">请输入密码</span>
              </div>
            </div>
            <div className="dw-form__group">
              <button className="dw-form__button">登录</button>
            </div>
          </div>
        </div>
        <div className="dw-signin__aside">
          <div className="dw-signin__forward">
            没有账号？ <Link to="/signup" className="dw-signin__login">免费注册</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
