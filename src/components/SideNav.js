import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/jonIcon2023.jpg';
import resume from '../assets/Washington_Jonathan_Resume.pdf';
import pages from '../data/pages.json';


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
                    <div><Link id="resume" className="navItem" to={resume} target="_blank">resume&#8599;</Link></div>
                </div>
            </div>
        )
    }
}

export default SideNav;