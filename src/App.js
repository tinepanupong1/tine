// App.js
import React from 'react';
import './style.css';
import Navbar from './Info/Navbar';
import CanvasComponent from './Info/CanvasComponent';
import Page from './Info/Page';

const App = () => {
  return (
    <div id="main">
      <CanvasComponent /> 
      <Navbar />
      <Page id="page" hasCanvas={true} /> 
      <Page id="page1" rightText="HAVE FUN LET'S PLAY JUST BE TOGETHER" />
      <Page
        id="page2"
        text1="LET'S HAVE FUN TOGETHER"
        text2="LET'S HAVE A BLAST! LET'S JUST THROW AWAY AGE, GENDER, REGION, STATUS, ETC., DON'T COMPETE, DON'T FIGHT, COOPERATE AND SHARE WITH EACH OTHER AND ENJOY IT TOGETHER! SO THAT YOU CAN STAND THERE IN THE NOT-TOO-DISTANT FUTURE AND DREAM OF ANOTHER NEW FUTURE"
      />
      <Page id="page3" text3="CYBERFIELD IS OUR PLAYGROUND" />
    </div>
  );
};

export default App;
