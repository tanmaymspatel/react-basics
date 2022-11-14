import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import employeeServices from '../../Services/employeeServices';
import Button from '../../Shared/components/UI/Button';

/**
 * @name EmployeeList
 * @returns List of the employees from the back-end
 */
const EmployeeList = () => {

    /**
     * @name employeeList,setEmployeeList
     * @desc: employeeList for employee List , setEmployeeList to set data to employeeList
     */
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees()
    }, [])

    /**
   * @name navigate 
   * @descrption to navigate programmatically
   */
    const navigate = useNavigate();


    /**
    * @name addEmployeeHandler
    * @description method to navigate to the employee form
    */
    const addEmployeeHandler = () => { navigate('/employee-form') }

    /**
     * @name getEmployees
     * @description method to call get getEmployees form empService and set data to employeeList 
     */
    const getEmployees = async () => {
        const response = await employeeServices.getEmployees();
        const data = await response.data;
        setEmployees(data);
    }

    /**
     * @name deleteEmployeeHandler
     * @description Used to delete the employee record from the list
     * @param {*} id 
     */
    const deleteEmployee = async (id) => {
        await employeeServices.deleteEmployee(id);
        getEmployees();
        alert('Employee Deleted!')
    }

    /**
     * @name editEmployeeHandler
     * @description Navigate to the employee form 
     * @param {*} id 
     */
    const editEmployee = (id) => {
        navigate(`/employee-form/${id}`)
    }

    /**
     * @name employeeList
     * @description Rendered list of the employees
     */
    const employeeList = employees.map(employee => {
        return (
            <tr className='align-middle' key={employee.id}>
                <td className='py-3'>{employee.id}</td>
                <td className='py-3'>{employee.firstName}</td>
                <td className='py-3'>{employee.lastName}</td>
                <td className='py-3'>{employee.emailId}</td>
                <td className='py-3'>
                    <Button type='button' className='btn btn-secondary' onClick={() => { editEmployee(employee.id) }}>Edit</Button>
                    <Button type='button' className='btn btn-danger ms-2 text-light' onClick={() => { deleteEmployee(employee.id) }}>Delete</Button>
                </td>
            </tr>
        )
    }
    );

    return (
        <div className='w-75 mx-auto py-3'>
            <div className='text-end'>
                <Button type="button" className="btn btn-secondary" onClick={addEmployeeHandler}>Add Employee</Button>
            </div>
            <div className='py-3'>
                <h4 className='fw-bold p-2'>Employee List</h4>
            </div>
            <div>
                <table className='table table-striped table-hover text-center'>
                    <thead>
                        <tr className='py-1 bg-dark text-light align-middle'>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>last Name</th>
                            <th>Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
