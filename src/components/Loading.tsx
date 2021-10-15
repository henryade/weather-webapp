import React from 'react'

const Loading = ({ width = "3rem", height = "3rem" }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow" role="status" style={{ width, height }}>
        <span className="visually-hidden">L...</span>
      </div>
    </div>
  )
}

export default Loading;
