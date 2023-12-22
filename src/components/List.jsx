import React, { useContext, useEffect, useState } from 'react';
import ColorPicker from './colorPicker';
import { NoteContext } from '../context/GlobalContext';
import EditModal from "./EditModal";

function List({ data }) {
  // State variables to manage color picker, color, title, note, and modal visibility
  const [displayColorPallet, setDisplayColorPallet] = useState(false);
  const [color, setColor] = useState(data.color);
  const [title, setTitle] = useState(data.title);
  const [note, setNote] = useState(data.note);
  const [modalOpen, setModalOpen] = useState(false);

  // Accessing the updateNote and deleteNote functions from NoteContext
  const { updateNote, deleteNote } = useContext(NoteContext);

  // Function to handle color picker toggle
  function toggleColorPicker(e) {
    e.preventDefault();
    setDisplayColorPallet(prev => !prev);
  }

  // Function to open or close the edit modal
  function toggleModal(e) {
    e.preventDefault();
    setModalOpen(prev => !prev);
  }

  // Function to delete a note
  function deleteNoteFn(e) {
    e.preventDefault();
    deleteNote(data.id);
  }

  // Effect to update note data when color, title, or note changes
  useEffect(() => {
    if (color !== data.color) {
      updateNote(data.title, data.note, color, data.id);
    }
    if ((title !== data.title) || (note !== data.note)) {
      updateNote(title, note, data.color, data.id);
    }
  }, [color, title, note]);

  return (
    <div className="card text-dark note" style={{ width: "40rem", backgroundColor: data.color }}>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.note}</p>

        {/* Check if color picker or edit modal should be displayed */}
        {displayColorPallet ?
          <ColorPicker color={color} setColor={setColor} setDisplayColorPallet={setDisplayColorPallet} />
          :
          <>
            {/* Button to toggle color picker */}
            <button className='btn' onClick={toggleColorPicker}><i className="fa-solid fa-palette fa-xs"></i></button>
            {modalOpen ?
              <>
                {/* Edit modal */}
                <EditModal title={title} note={note} setTitle={setTitle} setNote={setNote} bgColor={color} setModalOpen={setModalOpen} />
                <button className="btn"><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
              </>
              :
              <button className="btn" onClick={toggleModal}><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
            }
            {/* Button to delete the note */}
            <button className='btn' onClick={deleteNoteFn}><i className="fa-solid fa-trash fa-xs"></i></button>
          </>
        }
      </div>
    </div>
  )
}

export default List;
