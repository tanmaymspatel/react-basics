import React from 'react'
import GrandChild from './GrandChild';

const Child = (props) => {
    return (
        <div className='border border-secondary p-4'>
            I m the child
            <GrandChild></GrandChild>
        </div>
    )
}

export default Child;
