import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrMessage = () => {

    const error = useRouteError();
    console.log(error,"error")

  return (
    <div>{error.message}</div>
  )
}

export default ErrMessage