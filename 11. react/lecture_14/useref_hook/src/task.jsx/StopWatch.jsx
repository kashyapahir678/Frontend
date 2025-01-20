import React, { useRef, useState } from 'react'

const StopWatch = () => {

   const [time,setTime] = useState(0);

   const StopWatchRef = useRef(null)

   const handlestart = () => {
      StopWatchRef.current = setInterval(() => {
         setTime((prev) => prev +1)
      }, 1000)
   }

   const handlepause = () => {
      clearInterval(StopWatchRef.current)
      StopWatchRef.current = null
   }
   const handlereset = () => {
      StopWatchRef.current = null
      setTime(0)
   }

  return (
    <div>
        <h2>{time}</h2>

        <button onClick={handlestart}>Start</button>
        <button onClick={handlepause}>Pause</button>
        <button onClick={handlereset}>Reset</button>
    </div>
  )
}

export default StopWatch