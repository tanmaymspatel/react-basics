import React, { useState } from 'react'
import Button from '../../Shared/components/UI/Button';
import PropsChild from './PropsChild';

const PropsAndState = () => {

    const [showData, setShowData] = useState(false);
    const [count, setCount] = useState(0)

    const dataToggleHandler = () => {
        setShowData(previousState => !previousState)
    }

    const increamentHandler = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decreamentHandler = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className='border border-danger p-3'>
            <h3 className='p-1'>Parent</h3>
            {/* Start : Counter */}
            <div className='d-flex align-items-center my-4 justify-content-center'>
                <Button type="button" className='btn btn-secondary' onClick={decreamentHandler}>-</Button>
                <h6 className='px-2'>{count}</h6>
                <Button type="button" className='btn btn-secondary' onClick={increamentHandler}>+</Button>
            </div>
            {/* End : Counter */}
            {showData && <h4 className='text-success mb-3'>Data Manipulation from the child</h4>}
            <PropsChild dataToChild="It is the data from parent Component" onDataToggle={dataToggleHandler} showData={showData} />

        </div>
    )
}

export default PropsAndState;
