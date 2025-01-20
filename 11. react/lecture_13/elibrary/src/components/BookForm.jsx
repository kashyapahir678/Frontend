import React, { useReducer, useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const intialvalue = {
  image : null,
  title : "",
  author: "",
  price: "",
  desc: "",
  status: ""
}

const reducer = (state,action) => {
  switch(action.type){
    case "FORMFIELD":
      return {...state, [action.field]: [action.value]}
    case "RESET":
      return intialvalue
    default:
      return state;
  }
}

const BookForm = ({addBook}) => {
  
  // const [image, setImage] = useState(null);
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [price, setPrice] = useState("");
  // const [desc, setDesc] = useState("");
  // const [status, setStatus] = useState("");

  const [state,dispatch] = useReducer(reducer,intialvalue);

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({type: "FORMFIELD", field: "image", value: reader.result}) 
      };
      reader.readAsDataURL(file);
    }
  }

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // addBook({title,author,price,image,desc,status})
    // setTitle("");
    // setAuthor("");
    // setPrice("");
    // setImage(null)
    addBook(state);
    dispatch({type: "RESET"})
    navigate("/")
  }


  return (


    <form className = "max-w-sm mx-auto bg-slate-500 p-4 rounded-md my-2" onSubmit={handleSubmit}>
      <div className = "mb-5" >
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Image</label>
        <input type="file" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book title' 
          onChange={handleImage} ref={fileInputRef} required />
          {state.image && <img src={state.image} alt="Preview" style={{ width: "100px" }} />}
      </div >
      {/* <div className = "mb-5" >
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Title</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book title' value={title}
          onChange={(e) => setTitle(e.target.value)} name='title' required/>
      </div >
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Author</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book author' value={author}
          onChange={(e) => setAuthor(e.target.value)} name='author' required/>
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Price</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book price' value={price}
          onChange={(e) => setPrice(e.target.value)} name='price' required/>
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Description</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book price' value={desc}
          onChange={(e) => setDesc (e.target.value)} name='desc' required/>
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Status</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter the book price' value={status}
          onChange={(e) => setStatus(e.target.value)} name='desc' required/>
      </div> */}

{["title", "author", "price", "desc", "status"].map((field) => (
        <div className="mb-5" key={field}>
          <label
            htmlFor={field}
            className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white"
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            id={field}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`Enter the book ${field}`}
            value={state[field]}
            onChange={(e) =>
              dispatch({ type: "FORMFIELD", field, value: e.target.value })
            }
            required
          />
        </div>
      ))}

      <div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Books</button>
      </div>
    </form >

  )
}

export default BookForm