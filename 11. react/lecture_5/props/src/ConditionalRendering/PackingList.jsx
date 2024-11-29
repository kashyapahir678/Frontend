import React from 'react'

// const Item = ({name, isPacked}) => {
//         if(isPacked){
//            return <li>{name}</li>
//         }
//         return <del>{name}</del>

// }

// const Item = ({name, isPacked}) => {
//     return(
//         <li>
//             {isPacked ? name : null}
//         </li>
//     )

// }

const Item = ({name, isPacked}) => {
    return(
        <li>
            {name} {isPacked && '✅'}
        </li>
    )

}

const PackingList = () => {
  return (
    <section>
      <h1>Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Watch" 
        />
        <Item 
          isPacked={true} 
          name="Bike" 
        />
        <Item 
          isPacked={false} 
          name="Gaming PC" 
        />
        <Item 
          isPacked={true} 
          name="Ps5" 
        />
        <Item 
          isPacked={false} 
          name="Cap" 
        />
      </ul>
    </section>
  )
}

export default PackingList