import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import ConfirmDialog from './chapter_03/ConfirmDialog';
import Tick from './chapter_03/Tick';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  // setInterval 이 함수를 주고 그 안에 컴포넌트를 불러오면 실시간 시계가 된다
  root.render(
  <React.StrictMode>
    <Tick />
    {/* 미리 만들어놨던 컴포넌트를 불러옴 */}
  </React.StrictMode>
);
},1000);
  // 숫자는 새로고침 주기를 설정(1000은1초)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
