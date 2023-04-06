import React from 'react';

import socials from '../data/socials.json';

class SocialLinks extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let links = socials.map(item => 
            <a className='social-icon' href={item.href} target='blank'><img src={item.icon} width='45px' height='45px' alt={item.name} /></a>
        )

        return(
            // <div className='social-links'>Social Links will sit here!</div>
            <div className='social-links'>{links}</div>
        )
    }
}

export default SocialLinks;
