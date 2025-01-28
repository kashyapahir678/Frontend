import { useLoaderData , useParams } from 'react-router-dom'

const ProductId = () => {

  const { id } = useParams();

  console.log(id);

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
     throw new Response("Product not found",{status: 404})
   }
   
   return response.json();
}



export default ProductId



// const [product, setProduct] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchProduct = async () => {
//     try {
//       const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
//       if(!res.ok){
//         throw new Response("Product not found", { status: 404 });
//       }
//       else{
//         setProduct(res.data)
//         console.log(res)
//         setLoading(false)
//       }
//     }
//     catch (err) {
//       setError("Failed to fetch product details.");
//       setLoading(false);
//     }
//   }
//   fetchProduct();
// }, [])

// if (loading) return <p>Loading...</p>;
// if (error) return <p>{error}</p>;