import React from 'react';
import logo from './logo.svg';
import './App.css';

import SideNav from './components/SideNav'
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      </header>
      <div className='flex-parent-element'>
        <div className='flex-child-element'>
          <SideNav />
          Title and navigation
        </div>        
        <div className='flex-child-element'>
          Body content
        </div>
      </div>
      <footer>
        <SocialLinks />
      </footer>
    </div>
  );
}

export default App;
