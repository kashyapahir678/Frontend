import React, { useRef } from 'react'

const Counter = () => {

    const counterRef = useRef(0);

    const handleClick = () => {
        counterRef.current += 1;
        alert(`You clicked ${counterRef.current} times`)
    }

  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Counter