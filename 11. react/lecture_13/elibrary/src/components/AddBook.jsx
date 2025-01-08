import React from 'react'
import BookForm from './BookForm'

const AddBook = ({addBook}) => {
    
  return (
    <div className=''>
        <h1 className='text-center font-serif'>Add a New Book </h1>
        <BookForm addBook={addBook}/>
    </div>
  )
}

export default AddBook