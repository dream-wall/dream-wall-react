import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="dw-footer">
    <div className="dw-footer__wave">
      <div className="dw-footer__nav">
        <a className="dw-footer__link" href="/">关于我们</a>
        <Link to="/dream" className="dw-footer__link">梦想墙</Link>
        <Link to="/download" className="dw-footer__link">APP下载</Link>
        <Link to="/signup" className="dw-footer__link">注册梦想</Link>
      </div>
      <div className="dw-footer__copyright">
    &copy; 2017 By <a className="dw-footer__author" href="https://github.com/savoygu" target="_blank" rel="noopener noreferrer">Savoygu</a> and <a className="dw-footer__author" href="https://github.com/xunqianxue" target="_blank" rel="noopener noreferrer">Xueqianxun</a>
      </div>
    </div>
  </div>
);

export default Footer;
