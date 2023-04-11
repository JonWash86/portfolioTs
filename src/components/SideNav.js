import React from 'react';
import { useState } from 'react';

import pages from '../data/pages.json';
import logo from '../assets/jonIcon2023.jpg';
import projects from '../data/projects.json';

class SideNav extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        let linkList = pages.map(item => <div><a id={item.id} className="navItem" onClick={this.setActive}>{item.title}</a></div>);

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