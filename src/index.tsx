import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'styles/index.less';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

if (document.documentElement.clientWidth > 500) {
  window.alert('建议扫描左侧二维码用手机进行浏览，以保证使用体验');
  const img = document.createElement('img');
  img.src = './qrcode.png';
  img.style.position = 'fixed';
  img.style.top = '50%';
  img.style.left = '100px';
  img.style.width = '300px';
  img.style.transform = 'translateY(-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  document.body.appendChild(img);
}