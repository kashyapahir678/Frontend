import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
        </ul>
        <main>
          <Breadcrumb/>
          <Outlet/>
        </main>
    </div>
  )
}

export default Navbar