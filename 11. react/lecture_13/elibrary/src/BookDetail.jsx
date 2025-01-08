import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const BookDetail = ({ books}) => {

  const { id } = useParams()

  const filterData = books.filter((item) => item.id == id);

  return (
    <div className='h-[400px] w-[80%] bg-white-300 m-auto shadow-md'>
      {
        filterData.map((item,index) => {
          return (
            <div className='flex h-full' key={index}>
              <div className='flex-1 bg-white  w-full h-auto'>
                <img src={item.image} alt="" className='h-[100%] w-[100%] object-contain' />
              </div>
              <div className='flex-1 p-3 flex flex-col justify-center items-start'>
                <h1 className='my-2'><span className='font-bold text-[17px]'>Book Title :-</span>{item.title}</h1>
                <div className='flex flex-col font-serif'>
                  <p className='my-2'>
                    <span className='font-bold text-[17px] '>Book Author :-</span>
                    {item.author}
                  </p>
                  <p className='my-2'><span className='font-bold text-[17px]'>Book Description :-</span>{item.desc}</p>
                  <p className='my-2'><span className='font-bold text-[17px]'>Book Price :-</span>{item.price}</p>
                  <span></span>
                </div>
                {item.status == "unread" ?
                <div>
                  <strong className='underline text-sky-400'>unRead Book</strong>
                </div>   
                : <strong className='underline text-sky-400'>Already Read Book</strong>
                }

                <div className='flex items-center gap-4 justify-between'>
                  <div className='mt-5'>
                    <Link className='bg-slate-800 text-white py-2 px-4 rounded-md' to="/">Back to Home</Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default BookDetail