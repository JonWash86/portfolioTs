import React from 'react';
import logo from '../assets/jonIcon2023.jpg';


class SideNav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='flex-child-element' >
                <img src={logo} alt='self portrait icon' height='120px' width='120px' />
                <a>JW</a>
                <a>home</a>
                <a>portfolio</a>
                <a>resume</a>
            </div>
        )
    }
}

export default SideNav;