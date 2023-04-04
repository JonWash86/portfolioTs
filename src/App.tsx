import React from 'react';
import { useState } from 'react';
import './App.css';

import Body from './components/Body';
import SideNav from './components/SideNav';
import SocialLinks from './components/SocialLinks';

function App() {
  const [activePage, setActivePage] = useState();

  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
