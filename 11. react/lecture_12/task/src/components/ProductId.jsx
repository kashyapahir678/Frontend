import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductId = () => {

    // const {id} = useParams();

    // const data = useLoaderData();
    // console.log(data,"data loader")
    

    // console.log(id, "product")

  return (
    <div>ProductId - {id}</div>
  )
}


// export const CareerLoader = async ({params}) => {
//     const {id} = params
//     console.log(id)
//     const res = await fetch(`https://fakestoreapi.com/products/`+id);
//     return res.json();
// };

export default ProductId