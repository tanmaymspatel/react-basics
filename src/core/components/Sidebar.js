import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className='side-header d-flex align-items-center justify-content-center'>
        <h4>React Basics</h4>
      </div>
      <div className='d-flex flex-column flex-grow-1'>
        <div className='flex-grow-1 p-3'>
          <ul className='nav '>
            <NavLink className='nav-link p-2 border-radius my-1' NavLink to='/'>Data Communication</NavLink>
            <NavLink className='nav-link p-2 border-radius my-1' NavLink to='/home'>Home</NavLink>
          </ul>
        </div>
        <div className='p-3'>
          <ul>side nav 2</ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
