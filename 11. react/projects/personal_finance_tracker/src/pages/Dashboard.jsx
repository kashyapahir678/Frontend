import React from 'react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
    <div className="max-w-3xl mx-auto bg-white p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Personal Finance Tracker</h1>
      <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-md">
        <h2>Total Balance</h2>
        <p className="text-xl font-semibold">$0.00</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-green-500 text-white p-4 rounded-md">
          <h3>Income</h3>
          <p className="text-lg font-semibold">$0.00</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-md">
          <h3>Expenses</h3>
          <p className="text-lg font-semibold">$0.00</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard