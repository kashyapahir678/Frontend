import React, { useState } from 'react'
import ThemContext from './ThemeContext'


const ThemeContextProvider = ({children}) => {

    const [theme,setTheme] = useState()
    const [value,setValue] = useState(false)

  return (
    <ThemContext.Provider value={{setTheme,value,setValue}}>
        {children}
    </ThemContext.Provider>
  )
}

export default ThemeContextProvider