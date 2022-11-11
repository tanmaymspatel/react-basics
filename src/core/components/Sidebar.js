import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className='side-header d-flex align-items-center justify-content-center'>
        <h4>React Basics</h4>
      </div>
      <div className='d-flex flex-column flex-grow-1'>
        <nav className='flex-grow-1 p-3'>
          <ul className='nav d-flex flex-column'>
            <li className='nav-item p-2 '>
              <NavLink className='nav-link border-radius' to='/'>Props</NavLink>
            </li>
            <li className='nav-item p-2'>
              <NavLink className='nav-link border-radius' to='/data-communication'>Data Communication</NavLink>
            </li>
            <li className='nav-item p-2'>
              <NavLink className='nav-link border-radius' to='/form'>Formik Form</NavLink>
            </li>
          </ul>
        </nav>
        <nav className='p-3'>
          <ul>side nav 2</ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
