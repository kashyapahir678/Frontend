import React from 'react'
import Button from './Button'

const Card = () => {
  return (
    <div className='card'>
        <div>
            <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="" />
        </div>
        <div>
            <h2>This is card</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, distinctio?</p>
            <Button/>
        </div>
    </div>
  )
}

export default Card