import React from 'react';
import { useState } from 'react';

import pages from '../data/pages.json';
import logo from '../assets/jonIcon2023.jpg';
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
        let linkList = pages.map(item => <div><a id={item.title} className="navItem">{item.title}</a></div>);

        return (
            <div className='flex-child-element sideNav' >
                <img src={logo} alt='self portrait icon' height='120px' width='120px' />
                <div id='navLinks'>
                    {linkList}
                </div>
            </div>
        )
    }
}

export default SideNav;