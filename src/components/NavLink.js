import React from 'react';

const NavLink = (props) => {
    return <a onClick={props.navigate}>{props.name}</a>
}

export default NavLink;