import React from 'react'
import { useContext } from 'react'
import UserContext from '../usecontext/UserConetext'


const Profile = () => {

  const {user} = useContext(UserContext)
  console.log(user)

  return (
    <div className='detail_box'>
       <span>Username :- {user.username}</span>
       <span>Password :- {user.password}</span>
    </div>
  )
}

export default Profile