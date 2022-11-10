import React, { useContext } from 'react'

import DataContext from '../../contexts/dataContext';
import Button from '../../Shared/components/UI/Button';
import GrandChild from './GrandChild';

const Child = () => {

    const dataCtx = useContext(DataContext);


    return (
        <div className='border border-secondary p-4 position-relative'>
            <h4 className='pt-1 pb-4 px-2 position-absolute start-0 top-0'>Child Count : <span className='fw-bolder text-success'>{dataCtx.childCount}</span></h4>
            <div className='d-flex justify-content-around p-5'>
                <div className='text-center'>
                    <h5>In Parent component</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-secondary mx-1' onClick={dataCtx.onParentDecrement}>-</Button>
                        <Button type='button' className='btn btn-secondary mx-1' onClick={dataCtx.onParentIncrement}>+</Button>
                    </div>
                </div>
                <div>
                    <h5 className='fw-bolder'> Child</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-success mx-1' onClick={dataCtx.onChildDecrement}>-</Button>
                        <h4 className='px-2 m-0'>{dataCtx.childCount}</h4>
                        <Button type='button' className='btn btn-success mx-1' onClick={dataCtx.onChildIncrement}>+</Button>
                    </div>
                </div>
                <div className='text-center'>
                    <h5>In Grand-child Component</h5>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={dataCtx.onGrandChildDecrement}>-</Button>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={dataCtx.onGrandChildIncrement}>+</Button>
                </div>
            </div>
            <GrandChild></GrandChild>
        </div>
    )
}

export default Child;
