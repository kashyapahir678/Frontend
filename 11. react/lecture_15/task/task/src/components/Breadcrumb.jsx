import React from 'react'
import { Link } from 'react-router-dom'


const Breadcrumb = () => {
  return (
    <div>
         <h2>This is Breadcrumb  component</h2>
         <div className='bredcrumb'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
         </div>
      </div>
  )
}

export default Breadcrumb