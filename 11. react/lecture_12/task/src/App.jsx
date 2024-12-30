
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ProductId, { CareerLoader } from './components/ProductId';

function App() {

  

  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/> } />
          <Route path=':id' element={<ProductId/>} loader={CareerLoader}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
