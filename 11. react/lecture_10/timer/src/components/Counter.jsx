import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [time, setTime] = useState(0);
    const [run, setRun] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState("gray");

    const miniute = new Date(time);
    


    useEffect(() => {
        if (run && time > 0) {
            let id = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(id)
        }
        else if (time == 0) {
            setRun(false)
        }
    }, [time, run])



    const handlestart = () => {
        setRun(true);
        setBackgroundColor("black");
    }

    const handlestop = () => {
        setRun(false);
        setBackgroundColor("yellow");
    }
    const handlereset = () => {
        setTime(0);
        setBackgroundColor("white");
    }


    return (
        <div style={{ backgroundColor: backgroundColor, height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", margin: "auto", transition: "background-color 0.5s ease" }}>
            <h2 className='h1 my-5 text-center'>React counter app</h2>
            <input className='input my-2 ' type="text" placeholder='enter the number' onChange={(e) => setTime(parseInt(e.target.value))} value={time} />
            <div className='btn_container'>
                <button className='btn' id='start' onClick={handlestart}>Start</button>
                <button className='btn' onClick={handlestop}>Stop</button>
                <button className='btn' onClick={handlereset}>Reset</button>
            </div>
            <h2 className='btn text-center bg-purple-500'>{time > 0 ? `${time} second remaining` : 'time up'}</h2>
            
        </div>
    )
}

export default Counter

