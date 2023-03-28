import React from 'react';
import bodyText from '../data/bodyText.json';


class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='flex-child-element main-content'>
                <h1>Jon Washington</h1>
                <h2>Software Engineer</h2>
                <a>{bodyText[0].text}</a>
            </div>
        )
    }
}

export default Body;