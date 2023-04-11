import React from 'react';
import { Link } from 'react-router-dom';

import pages from '../data/pages.json';
import logo from '../assets/jonIcon2023.jpg';
import projects from '../data/projects.json';

class SideNav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let linkList = pages.map(item => <div><Link id={item.id} className="navItem" to={item.href}>{item.title}</Link></div>);

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