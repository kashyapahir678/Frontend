import React, { useContext, useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import EditExpense from './EditExpense';
import ExpenseSummary from './ExpenseSummary';

const ExpenseList = ({setShowAdd}) => {

  const { state, dispatch } = useContext(ExpenseContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);


  // view Expense
  const handleView = (expense) => {
    setSelectedExpense(expense)
    setIsModalOpen(true);
  }

  const [editModalOpen,setEditModalOpen] = useState(false)

  // Edit Expense
  const handleEdit = (expense) => {
    setEditModalOpen(true)
    setSelectedExpense(expense)
  }

  // Remove Expense
  const handleRemove = (id,event) => {
    event.stopPropagation();
    dispatch({type: "REMOVE", id: id})
  }

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedExpense(null); 
  };

  // expense Summary
  const [summryModel,setSummryModel] = useState(false)

  
  const handleExpenseSummry = () => {
    setSummryModel(true)
  }

  return (
    <div>
      <h2 className='text-xl font-serif font-semibold text-center py-4'>This is ExpenseList Component</h2>
      <button className='bg-blue-400 text-white py-2 px-4 rounded-md mb-4' onClick={() => setShowAdd(true)}>ADD</button>
      <button className='bg-black text-white py-2 px-4 rounded-md mb-4 float-right' onClick={handleExpenseSummry}>Expense Summary</button>
      <div className='grid grid-cols-3 gap-4'>
        {state.expenses.length === 0 ? (
          <li>No expenses added yet.</li>
        ) : (
          state.expenses.map((expense, index) => (
            <div key={index} className='bg-slate-300 rounded-md p-4 cursor-pointer relative space-y-3' >
              <span className='h-8 w-8 text-center text-red-500 absolute top-2 right-2 cursor-pointer font-bold' 
                    onClick={(event) => handleRemove(expense.id,event)}
              >X</span>
              <li><strong>Description</strong> :- {expense.description}</li>
              <li> <strong>Amount</strong> :- {expense.amount}</li>
              <li> <strong>Category</strong> :- {expense.category}</li>
              <button className='bg-blue-400 text-white py-1 px-4 rounded-md ' onClick={() => handleEdit(expense)}>Edit</button>
              <button className='bg-blue-400 text-white py-1 px-4 rounded-md float-right' onClick={() => handleView(expense)}>View</button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && selectedExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Expense Details
            </h3>
            <ul className="space-y-3">
              <li>
                <strong>Description:</strong> {selectedExpense.description}
              </li>
              <li>
                <strong>Amount:</strong> ${selectedExpense.amount}
              </li>
              <li>
                <strong>Category:</strong> {selectedExpense.category}
              </li>
            </ul>
            <button
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {summryModel && <ExpenseSummary state={state} setSummryModel={setSummryModel}/>}

      {editModalOpen && <EditExpense setEditModalOpen={setEditModalOpen} selectedExpense={selectedExpense} />}

    </div>
  )
}

export default ExpenseList