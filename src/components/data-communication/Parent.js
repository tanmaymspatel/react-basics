import React from 'react'
import Child from './Child';

const Parent = () => {
    return (
        <div className='parent border border-danger p-3'>
            I m the Parent
            <Child></Child>
        </div>
    )
}

export default Parent;
