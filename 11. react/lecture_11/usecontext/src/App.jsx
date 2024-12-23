
import './App.css'
// import Login from './component/Login'
// import Profile from './component/Profile'
// import UserContextProvider from './usecontext/UserContextProvider'
import ThemeContextProvider from './themecontext/ThemeContextProvider'
import Card from './component/Card'
import ToggleButton from './component/ToggleButton'

function App() {

  return (
    <>
      {/* <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider> */}

      <ThemeContextProvider>
         <ToggleButton/>
         <Card/>
      </ThemeContextProvider>
    </>
  )
}

export default App
