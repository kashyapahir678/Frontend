import { useLoaderData , useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const ProductId = () => {

  const { id } = useParams();

  const data = useLoaderData()
  
  return (
      <div className='singleProduct'>
        <div>
          <img src={data.image} alt='' style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <button>Add to cart</button>
        </div>
      </div>
  )
}


export const ProductLoader = async({params}) => {

   const {id} = params;

   const response = await fetch(`https://fakestoreapi.com/products/${id}`);

   if(!response.ok){
     throw new Error("Product not found")
   }
   

   
   return response.json();
}



export default ProductId


