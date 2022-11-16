import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import PropsAndState from '../components/data-communication/PropsAndState'
const DataCommunication = React.lazy(() => import('../components/data-communication/DataCommunication'))
const FormikForm = React.lazy(() => import('../components/form/FormikForm'))
const EmployeeForm = React.lazy(() => import('../components/crud/EmployeeForm'))
const EmployeeList = React.lazy(() => import('../components/crud/EmployeeList'))

const Routing = () => {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
                <Route path='/' element={<PropsAndState />} />
                <Route path='/data-communication' element={<DataCommunication />} />
                <Route path='/form' element={<FormikForm />} />
                <Route path='/employee-list' element={<EmployeeList />} />
                <Route path='/employee-form' element={<EmployeeForm />} />
                <Route path='/edit-emolyee/:id' element={<EmployeeForm />} />
            </Routes>
        </Suspense>
    )
}

export default Routing
