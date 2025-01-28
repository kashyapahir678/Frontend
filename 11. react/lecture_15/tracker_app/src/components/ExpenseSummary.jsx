import React from 'react'

const ExpenseSummary = ({ state , setSummryModel}) => {

  const total = state.expenses.reduce((accumalte,currentValue) => {
    return accumalte + currentValue.amount
  }, 0) 



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Expense Summry
        </h3>
        <table className="table-fixed">
          <thead>
            <tr className='border-black border-2'>
              <th className='border-2 border-black p-2'>Description</th>
              <th className='border-2 border-black p-2'>Category</th>
              <th className='border-2 border-black p-2'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(state.expenses).map((item, index) => {
              return (
                <tr className=' border-black border-2 ' key={index}>
                  <td className='border-2 border-black p-1 text-center'>{item.description}</td>
                  <td className='border-2 border-black p-1 text-center'>{item.category}</td>
                  <td className='border-2 border-black p-1 text-center'>{item.amount}</td>
                </tr>
              )
            })}
            <tr className='border-black border-2 '>
              <td className=' col-span-2  p-1 text-center float-right pr-0 font-bold'>To </td>
              <td className='font-bold'>tal</td>
              <td className=' p-1 text-center '>{total} </td>
            </tr>
          </tbody>
        </table>
        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          onClick={() => setSummryModel(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ExpenseSummary