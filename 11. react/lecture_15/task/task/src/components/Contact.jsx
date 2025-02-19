import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {


    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                return (res.json())
            })
            .then((data) => {
                setUser(data)
            })
    }, [])

    return (
        <>
            <div className='product'>

                <div className='flex items-center justify-between flex-wrap'>
                    {
                        user.map((item, index) => {
                            return (
                                <div key={index} className='grow-1 w-[300px] min-h-[300px] h-auto border-2 border-black'>
                                    <img src={item.image} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>{item.description.slice(0, 40)}</p>
                                    <Link to={`${item.id}`}>View</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}



export default Contact