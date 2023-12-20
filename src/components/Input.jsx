import React, { useContext, useState } from 'react'
import ColorPicker from './colorPicker'
import { NoteContext } from '../context/GlobalContext'

function Input() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [displayColorPallet, setDisplayColorPallet] = useState(false)
  const [color, setColor] = useState('#fff')

  const {addNote} = useContext(NoteContext);

  function submitData(e){
    e.preventDefault();
    // console.log(displayColorPallet)
    addNote(title, note, color);
    setTitle('');
    setNote('');
    setColor('#fff');
  }

  function colorPiker(e){
    e.preventDefault();
    setDisplayColorPallet(prev=>{
      return !prev;
    })
  }
  
  return (
    <div>
      <form className='inputContainer'>
        <div className="mb-2">
          <input type="text" className="form-control" id="title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="mb-1">
          <input type="text" className="form-control" id="note" placeholder='Note' value={note} onChange={(e)=>setNote(e.target.value)}/>
        </div>
        {displayColorPallet?
          <ColorPicker color={color} setColor={setColor} setDisplayColorPallet={setDisplayColorPallet}/>:
          <>
            <button className='btn' onClick={colorPiker}><i className="fa-solid fa-palette fa-lg"></i>
            </button>
            <button type="submit" className="btn" onClick={submitData}><i className="fa-solid fa-notes-medical fa-lg"></i></button>
          </>
        }
      </form>
    </div>
  )
}

export default Input