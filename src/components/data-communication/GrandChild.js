import React, { useContext } from 'react'
import DataContext from '../../contexts/dataContext';
import Button from '../../Shared/components/UI/Button';

const GrandChild = () => {

    const dataCtx = useContext(DataContext);
    console.log(dataCtx);
    return (
        <div className='border border-success p-4 position-relative'>
            <h4 className='pt-1 pb-4 px-2  position-absolute start-0 top-0'>GranChild Count : <span className='fw-bolder text-success'>{dataCtx.grandChildCount}</span></h4>
            <div className='d-flex justify-content-around p-5'>
                <div className='text-center'>
                    <h5>In Parent component</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-secondary mx-1' onClick={dataCtx.onParentDecrement}>-</Button>
                        <Button type='button' className='btn btn-secondary mx-1' onClick={dataCtx.onParentIncrement}>+</Button>
                    </div>
                </div>
                <div>
                    <h5>In Child Component</h5>
                    <Button type='button' className='btn btn-success mx-1' onClick={dataCtx.onChildDecrement}>-</Button>
                    <Button type='button' className='btn btn-success mx-1' onClick={dataCtx.onChildIncrement}>+</Button>
                </div>
                <div className='text-center'>
                    <h5 className='fw-bolder'>Grand-child</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-danger text-light mx-1' onClick={dataCtx.onGrandChildDecrement}>-</Button>
                        <h4 className='px-2 m-0'>{dataCtx.grandChildCount}</h4>
                        <Button type='button' className='btn btn-danger text-light mx-1' onClick={dataCtx.onGrandChildIncrement}>+</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrandChild;
