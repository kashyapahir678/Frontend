import React, { useReducer } from 'react'
import ExpenseContext from './ExpenseContext'
import { ExpenseReducer } from '../reducer/ExpenseReducer'

const intialstate = {
  expenses: [
    {
      id : 1,
      description: "For home",
      amount: 120,
      category: "grocery",
    },
    {
      id: 2,
      description: "Rent",
      amount: 550,
      category: "Housing"
    },
    {
      id: 3,
      description: "Fuel",
      amount: 480,
      category: "Traveling"
    },
  ]
}

const ExpenseContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ExpenseReducer, intialstate);

  console.log(state)


  return (
      <ExpenseContext.Provider value={{ state, dispatch }}>
        {children}
      </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider