
import './App.css'
import { createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ProductId, { ProductLoader } from './components/ProductId';
import Error from './components/Error';
import Product from './components/Product/Product';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Navbar />,
//   },
//   {
//     path : '/',
//     element : <Home />,
//   },
//   {
//     path : '/',
//     element : <About />,
//   },
//   {
//     path : '/contact',
//     element : <Contact />,
//   },
//   {
//     path : '/contact/:id',
//     element : <ProductId /> ,
//   },
//   {
//     path : '*',
//     element : <Error />,
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />}>
        <Route index element={<Contact />} />
        <Route path=':id' element={<ProductId /> } loader={ProductLoader}/>
      </Route>
      <Route path='*' element={<Error />} />

    </Route>
  )
)

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:id' element={<ProductId />} loader={ProductLoader} />
        <Route path='*' element={<Error />} />
      </Routes> */}
      {/* </BrowserRouter> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
