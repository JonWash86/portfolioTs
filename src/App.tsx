import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Body from './components/Body';
import SideNav from './components/SideNav';
import SocialLinks from './components/SocialLinks';

function App(this: any) {
  const [activePage, setActivePage] = useState('home');

  let handleNavigation = (link: string) => {
    console.log('you did it you basterd');
    console.log(link);
    setActivePage(link);
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <header className='App-header'>
        </header>
        <div className='flex-parent-element'>
          <SideNav activePage={activePage} setActivePage={setActivePage} onClick={handleNavigation}/>
          <div className='vLine'/>
          <Body activePage={activePage} />
        </div>
        <footer>
          <SocialLinks />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
