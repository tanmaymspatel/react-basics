import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DataCommunication from '../components/data-communication/DataCommunication'
import Home from '../components/Home'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<DataCommunication />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}

export default Routing
