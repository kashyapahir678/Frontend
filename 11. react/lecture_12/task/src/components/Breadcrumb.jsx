import React from 'react'
import { useLocation, Link } from 'react-router-dom'


const Breadcrumb = () => {

  const location = useLocation();

  let pageLink = '';

  console.log(location, "location")

  const pagePath = location.pathname;
  console.log(pagePath, "Pagepath")

  const splitpath = pagePath.split("/");
  console.log(splitpath, "splitpath")

  const filterpath = splitpath.filter((item) => item !== '');
  console.log(filterpath,"filterpath")

  // const lendth = filterpath.length <= 1

  const printpath = filterpath.map((item) => {

    console.log(item.length >= 1 ? "" : "/")

    pageLink += `/${item}`
    return(
      <>
       <div>
          
          <ul className='breadcrumb_ul'>
            <li><Link to={pageLink}>{item}  </Link></li>
          </ul>
          {item.length <=1 ? "" : "/"}
       </div>
      </>
    )
  })

  console.log(printpath)




  return (
    <div className='breadcrumb'>
      {
        printpath
      }
    </div>
  )
}

export default Breadcrumb