import React from 'react'
import useBreadcrumbs from "use-react-router-breadcrumbs";


const Breadcrumb = () => {

    const breadcrumbs = useBreadcrumbs();

  return (
    // <div className='bredcrumb_container'>
    //      <h2 className='heading_bredcrumb'>This is Breadcrumb  component</h2>
    //      <div className='bredcrumb'>
    //       <ul>
    //         <li><Link to="/product">Product / </Link></li>
    //         <li><Link to="/product/:id">Single Product</Link></li>
    //       </ul>
    //      </div>

    //   </div>
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
  )
}

export default Breadcrumb