import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import pages from '../data/pages.json';
import SideNav from './SideNav';
import SocialLinks from './SocialLinks';


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
        let bodyContent = pages.map(item => 
            <div id={item.id} className='bodySection'>
                {item.text.map(
                    paragraph => <p>{paragraph}</p>)
                }
            </div>);

        return (
            <div className='flex-child-element main-content'>
                    <h1 id='headline'>Jon Washington</h1>
                    <h2 id='subheading'>Software Engineer</h2>
                    <Routes>
                        <Route path='/test' element={<SocialLinks/>}/>
                    </Routes>
            </div>
        )
    }
}

export default Body;