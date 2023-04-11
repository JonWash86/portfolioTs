import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import About from '../pages/about';
import Home from '../pages/home';
import Projects from '../pages/projects';


class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='flex-child-element main-content'>
                    <h1 id='headline'>Jon Washington</h1>
                    <h2 id='subheading'>Software Engineer</h2>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                    </Routes>
            </div>
        )
    }
}

export default Body;