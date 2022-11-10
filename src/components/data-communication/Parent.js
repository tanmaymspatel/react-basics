import React, { useState } from 'react'

import Child from './Child';
import Button from '../../Shared/components/UI/Button'
import DataContext from '../../contexts/dataContext';

const Parent = () => {

    const [parentCount, setPatentCount] = useState(0)
    const [childCount, setChildCount] = useState(0)
    const [grandChildCount, setGrandChildCount] = useState(0)

    const parentIncrementHandler = () => {
        setPatentCount(prevCount => prevCount + 1)
    }
    const parentDecrementHandler = () => {
        setPatentCount(prevCount => prevCount - 1)
    }

    const childDecrementHandler = () => {
        setChildCount(prevCount => prevCount - 1)
    }
    const childIncreamentHandler = () => {
        setChildCount(prevCount => prevCount + 1)
    }

    const grandChildDecreamentHandler = () => {
        setGrandChildCount(prevCount => prevCount - 1)
    }
    const grandChildIncreamentHandler = () => {
        setGrandChildCount(prevCount => prevCount + 1)
    }

    const dataContext = {
        grandChildCount: grandChildCount,
        onParentIncrement: parentIncrementHandler,
        onParentDecrement: parentDecrementHandler,
        onChildIncrement: childIncreamentHandler,
        onChildDecrement: childDecrementHandler,
        onGrandChildIncrement: grandChildIncreamentHandler,
        onGrandChildDecrement: grandChildDecreamentHandler,
    }

    return (

        <div className='parent border border-danger p-4 position-relative'>
            <h4 className='pt-1 pb-4 px-2 position-absolute start-0 top-0'>Parent Count : <span className='fw-bolder text-success'>{parentCount}</span></h4>

            <div className='d-flex justify-content-around p-5'>
                <div>
                    <h5 className='fw-bolder'>Parent</h5>
                    <div className='d-flex align-items-center'>
                        <Button type='button' className='btn btn-secondary' onClick={parentDecrementHandler}>-</Button>
                        <h4 className='px-2 m-0'>{parentCount}</h4>
                        <Button type='button' className='btn btn-secondary' onClick={parentIncrementHandler}>+</Button>
                    </div>
                </div>
                <div className='text-center'>
                    <h5>In Child Component</h5>
                    <Button type='button' className='btn btn-success mx-1' onClick={childDecrementHandler}>-</Button>
                    <Button type='button' className='btn btn-success mx-1' onClick={childIncreamentHandler}>+</Button>
                </div>
                <div className='text-center'>
                    <h5>In Grand-child Component</h5>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={grandChildDecreamentHandler}>-</Button>
                    <Button type='button' className='btn btn-danger text-light mx-1' onClick={grandChildIncreamentHandler}>+</Button>
                </div>
            </div>
            <DataContext.Provider value={dataContext}>
                <Child childCount={childCount}
                    onChildIncrement={childIncreamentHandler}
                    onChildDecrement={childDecrementHandler}
                    onParentIncrement={parentIncrementHandler}
                    onParentDecrement={parentDecrementHandler}
                    onGrandChildIncrement={grandChildIncreamentHandler}
                    onGrandChildDecrement={grandChildDecreamentHandler}
                ></Child>
            </DataContext.Provider>
        </div>
    )
}

export default Parent;
