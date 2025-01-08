import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <h1 className='text-center text-2xl font-serif py-3 bg-gray-500'>E-Library Management System</h1>
        <hr />
        <div className='navbar_links flex justify-center gap-3 p-4 font-serif '>
            <Link to="/" className='hover:bg-sky-500 bg-sky-600 py-2 px-4 font-extralight'>BookList</Link>
            <Link to="/add" className='hover:bg-sky-500 bg-sky-600 py-2 px-4 font-extralight'>Add Books</Link>
            <Link to="/bookdetail" className='hover:bg-sky-500 bg-sky-600 py-2 px-4 font-extralight'>Cart</Link>
        </div>
    </header>

    <Outlet/>
    </>
  )
}

export default Header