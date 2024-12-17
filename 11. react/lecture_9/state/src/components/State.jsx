import React, { useEffect, useState } from 'react'
import { AnimalList } from './Data'

const State = () => {

    const [index, setIndex] = useState(0);
    const [input, setInput] = useState(index)
    const [direction, setDirection] = useState("");
    const [show, setShow] = useState(false)

    const handleNext = () => {
        setDirection("right");
        if (index == 9) {
            setIndex(0)
        }
        else {
            setIndex(index + 1);
        }
    }

    const handlePrev = () => {
        setDirection("left");
        if (index > 0) {
            setIndex(index - 1)
        }
        else {
            setIndex(index)
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handlesubmit = () => {
        setIndex(input - 1)

    }

    const handleShow = () => {
        setShow(true)
    }
    const listCard = [AnimalList[index]];


    return (
        <div>

            {/* <h1 className='text-center m-3'>{index} Card</h1> */}

            <div className='flex flex-wrap justify-around gap-y-2 my-5'>


                {listCard.map((item) => {
                    return (
                        <div key={item.id} id='cardImg'
                            className={`${direction === "right" ? "slide-in-right" : "slide-in-left"}
                            max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
                            <a href="#">
                                <img className="rounded-t-lg h-52 w-full object-cover" src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>

                                {show &&
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                }

                                {!show ?
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleShow}>
                                        Read more
                                    </a>
                                    :
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setShow(false)}>
                                        less more
                                    </a>}
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='flex text-center justify-evenly my-4'>
                <button className='py-2 px-4 text-white bg-black cursor-pointer font-bold rounded-md' onClick={handlePrev}>Previous</button>
                <div className='flex text-black  font-bold rounded-md py-2 px-4 border-2'>
                    <input
                        className='px-4 py2 border-top '
                        type="number"
                        placeholder='Enter the number'

                        onChange={handleChange} value={input} />
                    <button className='bg-black cursor-pointer text-white py-2 px-4' onClick={handlesubmit}>Click</button>
                </div>

                <button className='py-2 px-4 text-white outline-dotted bg-black cursor-pointer font-bold rounded-md' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default State