import React from 'react';
import { useState } from 'react';

import logo from '../assets/jonIcon2023.jpg';
import NavLink from './NavLink';
import projects from '../data/projects.json';

class SideNav extends React.Component {
    constructor(props){
        super(props);
    }

    onLinkClick(link){
        console.log('click!');
        console.log(link.target.id);
        console.log(this);

    }

    render(){
        return (
            <div className='flex-child-element sideNav' >
                <img src={logo} alt='self portrait icon' height='120px' width='120px' />
                <div id='navLinks'>

                    <a>JW</a>
                    <NavLink className="navItem" onLinkClick={this.onLinkClick} />
                    <a id="portfolio" className="navItem" onClick={this.onLinkClick}>portfolio</a>
                    <a className="navItem">resume</a>
                </div>
            </div>
        )
    }
}

export default SideNav;