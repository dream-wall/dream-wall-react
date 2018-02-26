import React, { Component } from 'react';

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <div className="dw-footer">
        <div className="dw-footer__wave">
          <div className="dw-footer__nav">
            <a className="dw-footer__link" href="">关于我们</a>
            <a className="dw-footer__link" href="">梦想墙</a>
            <a className="dw-footer__link" href="">APP下载</a>
            <a className="dw-footer__link" href="">注册梦想</a>
          </div>
          <div className="dw-footer__copyright">
        &copy; 2017 By <a className="dw-footer__author" href="https://github.com/savoygu" target="_blank" rel="noopener noreferrer">Savoygu</a> and <a className="dw-footer__author" href="https://github.com/xunqianxue" target="_blank" rel="noopener noreferrer">Xueqianxun</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
