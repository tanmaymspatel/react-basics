import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from 'yup';

import Button from '../../Shared/components/UI/Button'
/**
 * @name Form
 * @description A simple form with the help of formik form library
 * @returns a form
 */
const FormikForm = () => {

  // values of form fields
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    additionalInformation: "",
    skills: ['']
  };

  /**
     * @name onSubmit
     * @description Triggers when the submit button is clicked
     * @param {*} values - The latest value of the form which is submitted 
     */
  const onSubmit = values => {
    console.log(values);
  }

  /**
   * @name validate 
   * @description use to store the error object manually without the Yup
   * @param {*} values - Form Field values
   * @returns error object
   */
  /*
  const validate = values => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = "This Field is Required!"
    }
    if (!values.lastName) {
      errors.lastName = "This Field is Required!"
    }
    if (!values.email) {
      errors.email = "This Field is Required!"
    }

    return errors;
  }
  */

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required!'),
    lastName: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Format').required('Required!'),
  })

  // formik object for configuring the form
  /* const formik = useFormik({
     initialValues,
     onSubmit,
     validationSchema,
   });
 */
  /*return (
    <div className='w-75 m-auto py-3'>
      <form onSubmit={formik.handleSubmit} className='border-radius px-5 py-4 shadow-lg bg-info'>
        <div className="my-3">
          <label className='mb-1' htmlFor="firstName">First Name : </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name='firstName'
            placeholder="Enter First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName} />
          <div>
            {formik.errors.firstName && formik.touched.firstName ? <small className='text-danger'>{formik.errors.firstName}</small> : null}
          </div>
        </div>
        <div className="my-3">
          <label className='mb-1' htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name='lastName'
            placeholder="Enter Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName} />
          <div>
            {formik.errors.lastName && formik.touched.lastName ? <small className='text-danger'>{formik.errors.lastName}</small> : null}
          </div>
        </div>
        <div className="my-3">
          <label className='mb-1' htmlFor="email">Email address : </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />
          <div>
            {formik.errors.email && formik.touched.email ? <small className='text-danger'>{formik.errors.email}</small> : null}
          </div>
        </div>
        <div className='mt-4 text-end'>
          <Button type="submit" className="ms-3 btn btn-secondary">Submit</Button>
        </div>
      </form>
    </div>
  );*/

  return (
    <div className='w-75 mx-auto py-4 px-5 my-5 shadow-lg border-radius overflow-auto'>
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
            <label className='mb-1' htmlFor="email">Email address : </label>
            <Field type="email" className="form-control" id="email" name='email' placeholder="Enter email" />
            <ErrorMessage name='email'>
              {errorMsg => <small className="text-danger">{errorMsg}</small>}
            </ErrorMessage>
          </div>
          <div className="my-3">{/* address - custom component */}
            <label className='mb-1' htmlFor="address">Address : </label>
            <FastField name='address'>
              {props => {
                console.log('hello');
                const { field, meta } = props;
                return (
                  <div>
                    < input type='text' id='address' className="form-control"
                      placeholder="Enter Address" {...field} />
                    {meta.touched && meta.error ? <small className="text-danger">{meta.error}</small> : null}
                  </div>
                )
              }
              }
            </FastField>
          </div>
          <div className="my-3">{/* skills*/}
            <label className='mb-1' htmlFor="skills">Skills : </label>
            <FieldArray name="skills">
              {
                (arrayProps) => {
                  const { push, remove, form } = arrayProps;
                  const { values } = form;
                  const { skills } = values;
                  return (
                    <div>
                      {skills.map((skill, index) => (
                        <div key={index} className='d-flex my-1'>
                          <Field type='text' name={`skills[${index}]`} className='form-control w-75' />
                          {index >= 1 && <Button type='button' className='btn btn-danger text-light mx-2' onClick={() => remove(index)}> - </Button>}
                          <Button type='button' className='btn btn-secondary mx-1' onClick={() => push('')}> + </Button>
                        </div>
                      ))}
                    </div>
                  )
                }
              }
            </FieldArray>
          </div>
          <div className="my-3">{/* additional information */}
            <label className='mb-1' htmlFor="addInfo">Additional Information : </label>
            <Field as='textarea' className="form-control" id="addInfo" name='addInfo' placeholder="Enter Additional Information" />
            <ErrorMessage name='addInfo'>
              {errorMsg => <small className="text-danger">{errorMsg}</small>}
            </ErrorMessage>
          </div>
          <div className='mt-4 text-end'>
            <Button type="submit" className="ms-3 btn btn-secondary">Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );

};


export default FormikForm;
