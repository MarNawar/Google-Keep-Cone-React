import React, { useContext, useEffect, useState } from 'react'
import ColorPicker from './colorPicker';
import { NoteContext } from '../context/GlobalContext';
import EditModal from "./EditModal"

function Grid({data}) {
  const [displayColorPallet, setDisplayColorPallet] = useState(false)
  const [color, setColor] = useState(data.color)
  const [title, setTitle] = useState(data.title)
  const [note, setNote] = useState(data.note);
  const [modalOpen, setModalOpen] = useState(false);

  const {updateNote, deleteNote} = useContext(NoteContext);

  function clrPicker(e){
    e.preventDefault();
    setDisplayColorPallet(prev=>{
      return !prev;
    })
  }

  function opnModal(e){
    e.preventDefault();
    setModalOpen(prev=>{
      return !prev;
    })
  }

  useEffect(()=>{
    // console.log('colour', color, note, title);
    if(color !== data.color){
      updateNote(data.title, data.note, color, data.id);
    }
    if((title!== data.title)||(note !== data.note)){
      updateNote(title, note, data.color, data.id);
    }

  },[color, title, note])

  return (
    <div className="card mb-3 mx-2 text-dark" style={{width: "15rem",
    backgroundColor:data.color}}>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.note}</p>
        
        {displayColorPallet?
          <ColorPicker color={color} setColor={setColor} setDisplayColorPallet={setDisplayColorPallet}/>:
          <>
            <button className='btn' onClick={clrPicker}><i className="fa-solid fa-palette fa-xs"></i></button>
          </>
        }
        {modalOpen?
          <EditModal title={title} note={note} setTitle={setTitle} setNote={setNote} setModalOpen={setModalOpen}/>:
          <button className="btn" onClick={opnModal}><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
        }
        <button className='btn'><i className="fa-solid fa-trash fa-xs"></i></button>
      </div>
    </div>
  )
}

export default Grid