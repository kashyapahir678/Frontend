import React, { useState } from 'react'
import { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'

const AddExpense = ({ showAdd, setShowAdd }) => {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")

  const { dispatch } = useContext(ExpenseContext)

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADDED",
      payload: { description, amount, category }
    });
    setDescription('');
    setAmount('');
    setCategory('');
    setShowAdd(false)
  }


  return (
    <>
      {showAdd && <div className='container m-auto p-4 '>
                <form className="max-w-sm mx-auto">
                  <div className="mb-5">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <input type="text" id="large-input" value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                    <input type="text" id="base-input" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className='mb-5'>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                    <input type="text" id="small-input" value={category} onChange={(e) => setCategory(e.target.value)} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div>
                    <button className='w-full my-2 px-3 py-2 bg-blue-500 rounded-md font-bold' onClick={(e) => handleAdd(e)}>Add Expense</button>
                  </div>
                </form>
            </div>}
    </>
  )
}

export default AddExpense