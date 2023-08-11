import React from 'react';
import {Footer, Header, Blog, Possibility, Features, WhatGPT3} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';
import MouseFollower from "mouse-follower";
import gsap from "gsap";



function App() {
  
MouseFollower.registerGSAP(gsap);
  
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
