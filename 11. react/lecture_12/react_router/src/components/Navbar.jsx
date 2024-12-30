import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/blog">Blog</Link> */}
        {/* <Link to="/faq">Faq</Link> */}
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar