import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EditCard = ({ books, editedBook }) => {

  const { id } = useParams()


  const bookToEdit = books.find((book) => book.id === parseInt(id))
  console.log(bookToEdit, "edit")

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(books.title);
  const [author, setAuthor] = useState(books.author);
  const [price, setPrice] = useState(books.price);
  const [desc, setDesc] = useState(books.desc);
  const [status, setStatus] = useState(books.status);


  useEffect(() => {
    if (bookToEdit) {
      setImage(bookToEdit.image || null);
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setPrice(bookToEdit.price);
      setDesc(bookToEdit.desc);
      setStatus(bookToEdit.status);
    }
  }, [bookToEdit]);

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { id: parseInt(id), title, author, price, image, desc, status }
    editedBook(updatedBook)
    navigate("/")
  }

  if (!bookToEdit) {
    return <p>Book not found!!!</p>
  }

  return (
    <div>
      <h2 className='text-center font-serif text-xl'>edit card</h2>
      <form className="max-w-sm mx-auto bg-slate-500 p-4 rounded-md my-2" onSubmit={handleSubmit}>
        <div className="mb-5" >
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Image</label>
          <input type="file" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book title'
            onChange={handleImage} ref={fileInputRef} />
          {image && <img src={image} alt="Preview" style={{ width: "100px" }} />}
        </div >
        <div className="mb-5" >
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Title</label>
          <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book title' value={title}
            onChange={(e) => setTitle(e.target.value)} name='title' required />
        </div >
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Author</label>
          <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book author' value={author}
            onChange={(e) => setAuthor(e.target.value)} name='author' required />
        </div>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Price</label>
          <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book price' value={price}
            onChange={(e) => setPrice(e.target.value)} name='price' required />
        </div>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Description</label>
          <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book price' value={desc}
            onChange={(e) => setDesc(e.target.value)} name='desc' required />
        </div>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Status</label>
          <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book price' value={status}
            onChange={(e) => setStatus(e.target.value)} name='desc' required />
        </div>
        <div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Book</button>
        </div>
      </form >
    </div>
  )
}

export default EditCard