
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import Error from './pages/Error'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Navbar/>,
    children: [
      {
        path: '/',
        element: <Home/> 

        
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/blog', 
        element: <Blog/>
      },
      {
        path: '/faq',
        element: <Faq/>
      },
      {
        path: '*',
        element: <Error/>
      },
    ]
  },
])

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

    <RouterProvider router={Route}/>
    </>
  )
}

export default App
