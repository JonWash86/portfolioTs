import React from 'react';

import projects from '../data/projects.json';

const Projects = () => 
{
    let projList = projects.map(item => 
        <div>
            <p> <a className='projTitle'>{item.title} </a><a className='projDate'>({item.dateComplete})</a></p>
            <a className='projLink' href={item.github} target='_blank'>github</a> / <a className='projLink' href={item.liveSite} target='_blank'>live site</a>
            {item.description.map(item => 
                <div>
                    <p>{item}</p>
                </div>
            )}
        </div>);

    return (
        <div>
            <h3>what I've been working on:</h3>
            <div className='textContainer'>
                {projList}
            </div>
        </div>
    )
}

export default Projects;