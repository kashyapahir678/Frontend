import React, { useState } from 'react'
import { AnimalList } from './Data'

const State = () => {

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        // if(index == ){
        //     setIndex(index)
        // }
        // else{
        //     setIndex(index + 1)
        // }
    }

    const handlePrev = () => {
        if(index > 0){
            setIndex(index - 1)
        }
        else{
            setIndex(index)
        }
    }

    const listCard = [AnimalList[index]];

    return (
        <div>

            <h1>Card Number is {index}</h1>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>

            <div className='flex flex-wrap justify-around gap-y-2'>


                {listCard.map((item) => {
                    return (
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg h-52 w-full object-cover" src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                </a>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default State