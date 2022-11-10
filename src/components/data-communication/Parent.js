import React, { useContext } from 'react'

import Child from './Child';
import Button from '../../Shared/components/UI/Button'
import DataContext from '../../contexts/dataContext';

const Parent = () => {

    const dataCtx = useContext(DataContext);

    return (

        <div className='parent border border-danger p-4 position-relative'>
            <h4 className='pt-1 pb-4 px-2 position-absolute start-0 top-0'>Parent Count : <span className='fw-bolder text-success'>{dataCtx.parentCount}</span></h4>

            <div className='d-flex justify-content-around p-5'>
                <div>
                    <h5 className='fw-bolder'>Parent</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-secondary' onClick={dataCtx.onParentDecrement}>-</Button>
                        <h4 className='px-2 m-0'>{dataCtx.parentCount}</h4>
                        <Button type='button' className='btn btn-secondary' onClick={dataCtx.onParentIncrement}>+</Button>
                    </div>
                </div>
                <div className='text-center'>
                    <h5>In Child Component</h5>
                    <Button type='button' className='btn btn-success mx-1' onClick={dataCtx.onChildDecrement}>-</Button>
                    <Button type='button' className='btn btn-success mx-1' onClick={dataCtx.onChildIncrement}>+</Button>
                </div>
                <div className='text-center'>
                    <h5>In Grand-child Component</h5>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={dataCtx.onGrandChildDecrement}>-</Button>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={dataCtx.onGrandChildIncrement}>+</Button>
                </div>
            </div>
            <Child></Child>
        </div>
    )
}

export default Parent;
