import React, { useState } from 'react';
import './App.css'
import BookList from './components/BookList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookData from './data/books'
import BookDetail from './BookDetail';
import BookCard from './components/BookCard';
import EditCard from './components/EditCard';


function App() {

  const [books, setBooks] = useState(BookData);

  const handleAddBook = (newbook) => {
    setBooks([...books, { id: books.length + 1, ...newbook }])
  }

  // for update the data state
  const editedBook = (update) => {
    setBooks(books.map((books) => books.id === update.id ? update : books))
  }  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BookList books={books} setBooks={setBooks} />}>
            <Route index element={<BookCard  />} />
          </Route>
          <Route path="/add" element={<AddBook addBook={handleAddBook} />} />
          <Route path="/edit/:id" element={<EditCard books={books} editedBook={editedBook}/>} />
          <Route path=':id' element={<BookDetail books={books}  />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
