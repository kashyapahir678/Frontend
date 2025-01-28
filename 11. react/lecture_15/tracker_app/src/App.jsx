
import { useState } from 'react'
import './App.css'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'
import ExpenseContextProvider from './context/ExpenseContextProvider'


function App() {

  const [showAdd,setShowAdd] = useState(false)

  return (
    <>
      <h1 className='text-xl font-serif font-semibold text-center py-4 bg-slate-300'>Expense Tracker App</h1>
      <ExpenseContextProvider>
        <div className='container m-auto max-w-screen-md'>
          <AddExpense showAdd={showAdd} setShowAdd={setShowAdd}/>
          <ExpenseList setShowAdd={setShowAdd}/>
        </div>
      </ExpenseContextProvider>
    </>
  )
}

export default App
