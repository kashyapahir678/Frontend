import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

  const {isAuth , setIsAuth, user} = useAuth();

  return (
    <div className='navbar'>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>

        {isAuth == true && <span style={{color: "white"}}>Welcome {user.username}</span>}

        {
          isAuth === true ?
            <Link to="/logout" onClick={() => setIsAuth(false)}>Logout</Link>
            :
            <Link to="/login">Login</Link>
        }
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar