import React from 'react'
import { Link } from 'react-router-dom'


const BookCard = ({ seachFilterData, books, setBooks }) => {

  const handledelete = (id) => {
    setBooks(books.filter((item) => item.id !== id))
  }

  // console.log(books, "book")
  return (
    <div className='bookcard'>
      {seachFilterData.length === 0 &&
        <div className='flex items-center justify-center w-[100vh] h-[100%]'>
          <h2 className='text-xl font-serif '>No product found !!!</h2>
        </div>}
      {
        seachFilterData.map((item, index) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
              <a href="#" className='relative'>
                <img className="rounded-t-lg max-h-[200px] w-full object-cover" src={item.image} alt={item.title} />
                <div className='absolute top-3 right-2'>
                  <span className='px-3 py-1 bg-slate-500-500 rounded-lg bg-slate-600 text-white font-sans '>{item.status}</span>
                </div>
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-white"> Title : {item.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-green-400">Price : {item.price}</p>
                <div className='flex items-center justify-center gap-1'>
                  <Link to={`${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View in Detail
                  </Link>
                  <Link to={`/edit/${item.id}`} className="inline-flex items-center px-3 py-2 float-right text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg--700 dark:focus:ring-blue-800">
                    Edit Card
                  </Link>
                  <button onClick={() => handledelete(item.id)} className="inline-flex items-center px-3 py-2 float-right text-sm font-medium text-center text-black bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:red:bg-blue-700 dark:focus:ring-red-800">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>

  )
}

export default BookCard