// Page.js
import React from 'react';
import LoopText from './LoopText';

const Page = ({ id, hasCanvas, rightText, text1, text2, text3 }) => {
  return (
    <div id={id}>
      {hasCanvas && <LoopText />} {/* แสดง LoopText เมื่อ hasCanvas เป็น true */}
      {rightText && (
        <div id="right-text">
          <h3>Panupong / PRAwong</h3>
          <h1>{rightText.split(' ').map((text, index) => <div key={index}>{text}</div>)}</h1>
        </div>
      )}
      {text1 && (
        <div id="text1">
          <h3>Panupong / PRAwong</h3>
          <h1>{text1.split(' ').map((text, index) => <div key={index}>{text}</div>)}</h1>
        </div>
      )}
      {text2 && (
        <div id="text2">
          <p>{text2}</p>
        </div>
      )}
      {text3 && (
        <div id="text3">
          <h3>CYBERFICTION / PLAYGROUND</h3>
          <h1>{text3}</h1>
        </div>
      )}
    </div>
  );
};

export default Page;
