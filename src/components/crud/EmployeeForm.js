import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as Yup from 'yup';

import employeeServices from '../../Services/employeeServices';
import Button from '../../Shared/components/UI/Button'

/**
 * @name EmployeeForm
 * @returns An employee registration form form 
 */
const EmployeeForm = () => {

    const [formTitle, setFormTitle] = useState('Add Employee')

    const { id } = useParams()

    /**
     * @nama navigate
     * @description Used to navigate to lists after submitting the data of the form
     */
    const navigate = useNavigate();

    /**
     * @name initialValues
     * @description Initial values of the form field
     */
    const initialValues = {
        firstName: "",
        lastName: "",
        emailId: "",
    };

    /**
     * @name onSubmit
     * @description Triggers when the submit button is clicked and after that resets the form
     * @param {*} values - The latest value of the form which is submitted 
     */
    const onSubmit = async (values, { resetForm }) => {
        await employeeServices.addEmployee(values);
        resetForm({ values: '' });
        navigate('/employee-list')
    }

    /**
     * @name validationSchema
     * @description Used to give validation conditions to the form fields
     */
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        emailId: Yup.string().email('Invalid Email Format').required('Required!'),
    })


    const [patchValue, setPatchValue] = useState(initialValues)
    const [editMode, setEditMode] = useSearchParams({})

    /**
     * @name getEmployeeById
     * @desc: calls  getEmployeeById from service and sets page title and button tile to Update, patches value to feilds
     */
    const getEmployeeById = () => {
        employeeServices.getEmployeeById(id).then(res => {
            setPatchValue(res.data)
        })
    }

    useEffect(() => {
        if (id) {
            setFormTitle('Edit Employee');
            getEmployeeById();
            setEditMode({ edit_mode: 'on' })
        }
    }, [id])

    return (
        <div className='w-50 mx-auto py-4 px-5 my-5 shadow-lg border-radius overflow-auto'>
            <h4 className="text-center py-3">{formTitle}</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="my-3"> {/* first name */}
                        <label className='mb-1' htmlFor="firstName">First Name : </label>
                        <Field type="text" className="form-control" id="firstName" name='firstName' placeholder="Enter first name" />
                        <ErrorMessage name='firstName' >
                            {errorMsg => <small className="text-danger">{errorMsg}</small>}
                        </ ErrorMessage>
                    </div>
                    <div className="my-3">{/* last name */}
                        <label className='mb-1' htmlFor="lastName">Last Name : </label>
                        <Field type="text" className="form-control" id="lastName" name='lastName' placeholder="Enter last name" />
                        <ErrorMessage name='lastName' >
                            {errorMsg => <small className="text-danger">{errorMsg}</small>}
                        </ErrorMessage>
                    </div>
                    <div className="my-3">{/* email */}
                        <label className='mb-1' htmlFor="emailId">Email address : </label>
                        <Field type="email" className="form-control" id="emailId" name='emailId' placeholder="Enter email Id" />
                        <ErrorMessage name='emailId'>
                            {errorMsg => <small className="text-danger">{errorMsg}</small>}
                        </ErrorMessage>
                    </div>
                    <div className='mt-4 text-end'>
                        <Button type="submit" className="ms-3 btn btn-secondary">Submit</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default EmployeeForm;
