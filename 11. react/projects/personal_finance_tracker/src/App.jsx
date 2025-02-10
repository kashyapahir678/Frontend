import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <div className='container m-auto'>
         <h2 className='font-medium text-sky-500'>Personal Finance Tracker</h2>
         <AppRoutes/>
      </div>
    </>
  )
}

export default App
