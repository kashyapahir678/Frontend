import React from 'react'
import { useRef } from 'react'

const InputFocus = () => {

    const inputRef = useRef(null);
    console.log(inputRef)

    const handleFocus = () => {
        inputRef.current.focus();
    }

  return (
    <div>
        <input type="text" ref={inputRef} placeholder='enter your name'/>
        <button onClick={handleFocus}>Focus on Input</button>
    </div>
  )
}

export default InputFocus