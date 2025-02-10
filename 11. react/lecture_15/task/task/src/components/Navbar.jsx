import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

  const {isAuth , setIsAuth, user} = useAuth();

  return (
    <div className='navbar'>
      <ul className='flex items-center gap-10 mb-1 bg-sky-900 text-white'>
        <Link className='py-2 p-4' to="/">Home</Link>
        <Link className='py-2 p-4' to="/about">About</Link>
        <Link className='py-2 p-4' to="/product">Product</Link>

        {isAuth == true && <span >Welcome {user.username}</span>}

        {
          isAuth === true ?
            <Link className='py-2 p-4' to="/logout" onClick={() => setIsAuth(false)}>Logout</Link>
            :
            <Link className='py-2 p-4' to="/login">Login</Link>
        }
        
        
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar