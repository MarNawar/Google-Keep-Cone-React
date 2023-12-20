import React from 'react'

function Note({ data }) {

  return (
    <div className="card  text-dark" style={{width: "40rem",
    backgroundColor:data.color}}>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.note}</p>
        <button className='btn '><i className="fa-solid fa-palette fa-xs"></i></button>
        <button className="btn"><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
        <button className='btn'><i className="fa-solid fa-trash fa-xs"></i></button>
      </div>
    </div>
  )
}

export default Note