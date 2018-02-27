import React from 'react';

const Download = () => (
  <div className="dw-download">
    <div className="dw-download__info">
      <a className="dw-download__logo" href="javascript:;"></a>
      <div className="dw-download__description">
        <h3 className="dw-download__website">梦想墙</h3>
        <span className="dw-download__version">V 0.0.0</span>
      </div>
    </div>
    <div className="dw-download__links">
      <a className="dw-download__link" href="javascript:;"><i className="dw-download__iphone"></i> iPhone版</a>
      <a className="dw-download__link" href="javascript:;"><i className="dw-download__android"></i> 安卓版</a>
    </div>
    <div className="dw-download__start">
      <div className="dw-download__tip">手机扫描二维码直接下载</div>
      <a className="dw-download__qrcode" href="javascript:;"></a>
    </div>
  </div>
);

export default Download;
