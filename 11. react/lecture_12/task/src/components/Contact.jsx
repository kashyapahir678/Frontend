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
    }, [user])

    return (
        <>

            <div className='usercard'>
                {
                    user.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.image} alt="" />
                                <h2>{item.title}</h2>/
                                <p>{item.description.slice(0, 40)}</p>
                                <Link to={`${item.id}`}>View</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}



export default Contact