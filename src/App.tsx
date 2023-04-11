import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Body from './components/Body';
import SideNav from './components/SideNav';
import SocialLinks from './components/SocialLinks';

function App(this: any) {

  return (
    <div className='App'>
      <BrowserRouter>
        <header className='App-header'>
        </header>
        <div className='flex-parent-element'>
          <SideNav />
          <div className='vLine'/>
          <Body />
        </div>
        <footer>
          <SocialLinks />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
