import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='side-header d-flex align-items-center justify-content-center'>
        <h4>React Basics</h4>
      </div>
      <div className='d-flex flex-column flex-grow-1'>
        <ul className='flex-grow-1 py-3'>side nav 1</ul>
        <ul className='py-3'>side nav 2</ul>
      </div>
    </>
  )
}

export default Sidebar
