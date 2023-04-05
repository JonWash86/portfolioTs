import React from 'react';

import pages from '../data/pages.json';


class Body extends React.Component{
    constructor(props){
        super(props);
        console.log('props:');
        console.log(props);
    }

    changePage(){
        this.setState();
    }
    render(){
        return (
            <div className='flex-child-element main-content'>
                <h1 id="headline">Jon Washington</h1>
                <h2 id="subheading">Software Engineer</h2>
                <a>{pages[0].text}</a>
            </div>
        )
    }
}

export default Body;