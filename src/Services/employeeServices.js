import axios from "axios";

const baseUrl = 'http://localhost:3000'

/**
 * @name getEmployee
 * @description service to get Employee
 * @returns json data
 */
const getEmployees = () => axios.get(`${baseUrl}/employees`)
/**
 * @name getUserById
 * @description service to get User by id
 * @returns json data
 */
const getEmployeeById = (id) => axios.get(`${baseUrl}/employees/${id}`)
/**
 * @name addEmployee
 * @description service to add Employee
 */
const addEmployee = (Employee) => axios.post(`${baseUrl}/employees`, Employee)
/**
 * @name updateEmployee
 * @description service to update Employee
 */
const updateEmployee = (id, data) => axios.put(`${baseUrl}/employees/${id}`, data)
/**
 * @name deleteEmployee
 * @description service to delete Employee
 */
const deleteEmployee = (id) => axios.delete(`${baseUrl}/employees/${id}`)


const employeeServices = {
    getEmployees,
    addEmployee,
    updateEmployee,
    getEmployeeById,
    deleteEmployee
}

export default employeeServices