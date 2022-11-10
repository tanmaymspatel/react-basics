import React from 'react'
import Button from '../../Shared/components/UI/Button';
import GrandChild from './GrandChild';

const Child = (props) => {
    return (
        <div className='border border-secondary p-4 position-relative'>
            <h4 className='pt-1 pb-4 px-2 position-absolute start-0 top-0'>Child Count : <span className='fw-bolder text-success'>{props.childCount}</span></h4>
            <div className='d-flex justify-content-around p-5'>
                <div className='text-center'>
                    <h5>In Parent component</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-secondary mx-1' onClick={props.onParentDecrement}>-</Button>
                        <Button type='button' className='btn btn-secondary mx-1' onClick={props.onParentIncrement}>+</Button>
                    </div>
                </div>
                <div>
                    <h5 className='fw-bolder'> Child</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-success mx-1' onClick={props.onChildDecrement}>-</Button>
                        <h4 className='px-2 m-0'>{props.childCount}</h4>
                        <Button type='button' className='btn btn-success mx-1' onClick={props.onChildIncrement}>+</Button>
                    </div>
                </div>
                <div className='text-center'>
                    <h5>In Grand-child Component</h5>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={props.onGrandChildDecrement}>-</Button>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={props.onGrandChildIncrement}>+</Button>
                </div>
            </div>
            <GrandChild></GrandChild>
        </div>
    )
}

export default Child;
