import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Signup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <div className="dw-signup">
        <div className="dw-signup__main">
          <h2 className="dw-signup__title">新用户注册</h2>
          <div className="dw-signup__form dw-form">
            <div className="dw-form__group">
              <input type="text" className="dw-signup__username dw-form__control is-error" placeholder="请输入用户名" />
              <div className="dw-form__tip">
                <span className="dw-form__tip--error dw-form__tip--empty">请输入用户名</span>
              </div>
            </div>
            <div className="dw-form__group">
              <input type="password" className="dw-signup__password dw-form__control" placeholder="请输入6~32位密码" />
              <div className="dw-form__tip">
                <span className="dw-form__tip--error dw-form__tip--empty">请输入密码</span>
              </div>
              <ul className={`dw-signup__safely dw-signup__safely--safe`}>
                <li className="danger">弱</li>
                <li className="general">中</li>
                <li className="safe">强</li>
              </ul>
            </div>
            <div className="dw-form__group">
              <button className="dw-form__button">注册</button>
            </div>
          </div>
        </div>
        <div className="dw-signup__aside">
          <div className="dw-signup__forward">
            已有账号 <Link to="/signin" className="dw-signup__login">立即登录</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
