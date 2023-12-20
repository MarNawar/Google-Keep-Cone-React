import React, { useContext, useEffect, useState } from 'react'
import ColorPicker from './colorPicker';
import { NoteContext } from '../context/GlobalContext';

function Note({ data }) {
  const [displayColorPallet, setDisplayColorPallet] = useState(false)
  const [color, setColor] = useState(data.color)

  const {updateNote, deleteNote} = useContext(NoteContext);

  function clrPicker(e){
    e.preventDefault();
    setDisplayColorPallet(prev=>{
      return !prev;
    })
  }

  function openModal(e){

  }

  useEffect(()=>{
    console.log('colour', color);
    if(color !== data.color){
      updateNote(data.title, data.note, color, data.id);
    }

  },[color])


  return (
    <div className="card  text-dark" style={{width: "40rem",
    backgroundColor:data.color}}>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.note}</p>
        
        {displayColorPallet?
          <ColorPicker color={color} setColor={setColor} setDisplayColorPallet={setDisplayColorPallet}/>:
          <>
            <button className='btn' onClick={clrPicker}><i className="fa-solid fa-palette fa-xs"></i></button>
            <button className="btn" onClick={openModal}><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
            <button className='btn'><i className="fa-solid fa-trash fa-xs"></i></button>
          </>
        }
      </div>
    </div>
  )
}

export default Note