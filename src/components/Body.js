import React from 'react';

class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='flex-child-element'>
                site content is rendered here.
            </div>
        )
    }
}

export default Body;