import React, { useState } from 'react'
import UserContext from './UserConetext'

const UserContextProvider = ({children}) => {

    const [user,setUser] = useState({})

  return (
    <div>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider