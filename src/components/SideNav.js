import React from 'react';
import logo from '../assets/jonIcon2023.jpg';
import projects from '../data/projects.json';


class SideNav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='flex-child-element sideNav' >
                <img src={logo} alt='self portrait icon' height='120px' width='120px' />
                <div id='navLinks'>

                    <a>JW</a>
                    <a className="navItem">home</a>
                    <a className="navItem">portfolio</a>
                    <a className="navItem">resume</a>
                </div>
            </div>
        )
    }
}

export default SideNav;