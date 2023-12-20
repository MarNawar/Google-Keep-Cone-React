import React from 'react'

function Grid({data}) {

  // const data = {
  //   title: 'Title1',
  //   note : 'Note1 With supporting text b',
  //   bgColor: 'green'
  // }
  return (
    <div className="card mb-3 mx-2 text-dark" style={{width: "15rem",
    backgroundColor:data.color}}>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.note}</p>
        <button className='btn'><i className="fa-solid fa-palette fa-xs"></i></button>
        <button className="btn"><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
        <button className='btn'><i className="fa-solid fa-trash fa-xs"></i></button>
      </div>
    </div>
  )
}

export default Grid