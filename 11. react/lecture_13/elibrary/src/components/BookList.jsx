import React, {useState} from 'react'
import BookCard from './BookCard'
import FilterBar from './FilterBar'

const BookList = ({books,setBooks}) => {

  const [serachInput,setSerachInput] = useState("")

  const seachFilterData = books.filter((item) => {
    const title = typeof item.title === "string" ? item.title : "";
    return title.toLowerCase().includes(serachInput.toLowerCase())
  });


  return (

    <div className='bookList'>
        <h2 className='text-center font-serif text-xl'>Book List Component</h2>
        <FilterBar setSerachInput={setSerachInput} serachInput={serachInput} />
        <BookCard books={books} seachFilterData={seachFilterData} setBooks={setBooks}/>
    </div>
  )
}

export default BookList