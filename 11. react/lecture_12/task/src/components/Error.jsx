import React from 'react'

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <a href="/" style={{ textDecoration: "none", color: "blue" }}>
        Go Back to Home
      </a>
    </div>
  )
}

export default Error