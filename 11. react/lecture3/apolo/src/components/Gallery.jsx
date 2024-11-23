import React from 'react'

export const Image = () => {
    return (
     <>
       <img className='h-40 w-40' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
       <p className='text-red-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, dolorem placeat. Impedit quam magni commodi inventore eaque. Excepturi quisquam, dolore labore dicta unde a. Culpa nesciunt ex iure consequatur sint!</p>
     </>
    )
  }

const Gallery = () => {
  return (
    <>
       <Image/>
    <Image/>
    <Image/>
    </>
  )
}

export default Gallery

