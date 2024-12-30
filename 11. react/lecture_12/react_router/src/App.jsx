
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// const Route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/>    
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact',
//         element: <Contact/>
//       },
//       {
//         path: '/blog', 
//         element: <Blog/>
//       },
//       {
//         path: '/faq',
//         element: <Faq/>
//       },
//       {
//         path: '*',
//         element: <Error/>
//       },
//     ]
//   },
// ])

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
    {/* <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/faq' element={<Faq/>}/>
        </Routes>
    </BrowserRouter>       */}

    <RouterProvider Router={Router}/>
    </>
  )
}

export default App
