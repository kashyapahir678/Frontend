import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Exercise = () => {


    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)
    // console.log(data)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {

            setloading(true)
            setData(res.data)
        })
    }, [data])

    



    return (
        <div>
            {loading && <div>
                loading
            </div>}
            <ul>
                {
                    data.map((item) => {
                        return(
                            <li>{item.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Exercise
