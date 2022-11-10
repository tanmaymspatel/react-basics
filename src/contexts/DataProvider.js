import React, { useState } from 'react'
import DataContext from './dataContext'

const DataProvider = props => {

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
        parentCount: parentCount,
        childCount: childCount,
        grandChildCount: grandChildCount,
        onParentIncrement: parentIncrementHandler,
        onParentDecrement: parentDecrementHandler,
        onChildIncrement: childIncreamentHandler,
        onChildDecrement: childDecrementHandler,
        onGrandChildIncrement: grandChildIncreamentHandler,
        onGrandChildDecrement: grandChildDecreamentHandler,
    }


    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
