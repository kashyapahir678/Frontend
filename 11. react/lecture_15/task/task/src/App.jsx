import React from 'react';
import './App.css'
import { createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ProductId, { ProductLoader } from './components/ProductId';
// import Error from './components/Error';
import Product from './components/Product/Product';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrMessage from './components/ErrMessage';
import ProtectedRoutes from './components/protectedRoute/ProtectedRoutes';
import Login from './components/Login';
import Signup from './components/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />}>
        <Route index element={<ProtectedRoutes><Contact/></ProtectedRoutes>} />
        <Route path=':id' element={<ProductId />} loader={ProductLoader} errorElement={<ErrMessage />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
