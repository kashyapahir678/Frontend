import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HiArrowLongRight } from "react-icons/hi2";

const Pagination = () => {

    const [data, setData] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const item = 5;

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data)
            })
    }, [])

    const handlePage = (num) => {
        console.log(num)
        setCurrentPage(num)
        if(num == 1){
            setData(data.slice(0,6))
        }
        else if(num == 2){
            setData(data.slice(6,11))
        }
    }


    return (
        <div className='container'>

            <div className='pagaination'>
                <div className='blog'>
                    {
                        data.slice(0, 6).map((item, index) => {
                            return (


                                <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                    <img src={item.image} alt="" />

                                    <div>
                                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{item.title}</p>
                                        <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                            View <span><HiArrowLongRight /></span>
                                        </a>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

            <nav aria-label="Page navigation example ">
                <ul className="flex items-center justify-center -space-x-px text-sm mt-2 ">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handlePage(1)}>1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handlePage(2)}>2</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handlePage(3)}>3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >Next</a>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default Pagination