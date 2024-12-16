import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [time,setTime] = useState(0);
    const [run,setRun] = useState(false)

    useEffect(() => {
        if(run && time > 0){
            let id = setInterval(() => {
                setTime((prev) => prev - 1)
            },1000)
            return () => clearInterval(id)
        }
        else if(time == 0){
            setRun(false)
        }
    }, [time,run])

  return (
    <div>
        <h2>THis is react counter app</h2>
        <input type="text" placeholder='enter the number' onChange={(e) => setTime(parseInt(e.target.value))} value={time} />
        <button onClick={() => setRun(true)}>Start</button>
        <button onClick={() => setRun(false)}>Stop</button>
        <button onClick={() => setRun(0)}>Reset</button>
        <h2 className='btn'>{time > 0 ? `${time} remaining` : 'time up'}</h2>

    </div>
  )
}

export default Counter