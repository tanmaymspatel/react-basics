import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmployeeForm from '../components/crud/EmployeeForm'
import EmployeeList from '../components/crud/EmployeeList'

import DataCommunication from '../components/data-communication/DataCommunication'
import PropsAndState from '../components/data-communication/PropsAndState'
import FormikForm from '../components/form/FormikForm'
import Home from '../components/Home'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<PropsAndState />} />
            <Route path='/data-communication' element={<DataCommunication />} />
            <Route path='/home' element={<Home />} />
            <Route path='/form' element={<FormikForm />} />
            <Route path='/employee-list' element={<EmployeeList />} />
            <Route path='/employee-form' element={<EmployeeForm />} />
            <Route path='/edit-emolyee/:id' element={<EmployeeForm />} />
        </Routes>
    )
}

export default Routing
