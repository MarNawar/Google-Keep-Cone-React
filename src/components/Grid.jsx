import React, { useContext, useEffect, useState } from 'react';
import ColorPicker from './colorPicker';
import { NoteContext } from '../context/GlobalContext';
import EditModal from "./EditModal";

function Grid({ data }) {
  // States to manage color picker, color, title, note, and modal
  const [displayColorPallet, setDisplayColorPallet] = useState(false);
  const [color, setColor] = useState(data.color);
  const [title, setTitle] = useState(data.title);
  const [note, setNote] = useState(data.note);
  const [modalOpen, setModalOpen] = useState(false);

  // Accessing the NoteContext for update and delete functionalities
  const { updateNote, deleteNote } = useContext(NoteContext);

  // Function to toggle color picker visibility
  function toggleColorPicker(e) {
    e.preventDefault();
    setDisplayColorPallet(prev => !prev);
  }

  // Function to toggle modal visibility
  function toggleModal(e) {
    e.preventDefault();
    setModalOpen(prev => !prev);
  }

  // Function to delete the note
  function deleteNoteFn(e) {
    e.preventDefault();
    deleteNote(data.id);
  }

  // Effect to update note when color, title, or note changes
  useEffect(() => {
    // Update note when color changes
    if (color !== data.color) {
      updateNote(data.title, data.note, color, data.id);
    }

    // Update note when title or note changes
    if ((title !== data.title) || (note !== data.note)) {
      updateNote(title, note, data.color, data.id);
    }
  }, [color, title, note]);

  return (
    <div className="card mb-3 mx-2 text-dark note" style={{ width: "15rem", backgroundColor: data.color }}>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.note}</p>

        {displayColorPallet ? (
          <ColorPicker color={color} setColor={setColor} setDisplayColorPallet={setDisplayColorPallet} />
        ) : (
          <>
            {/* Button to open color picker */}
            <button className='btn' onClick={toggleColorPicker}><i className="fa-solid fa-palette fa-xs"></i></button>
            {/* Check if modal is open */}
            {modalOpen ? (
              // If modal is open, display the EditModal component
              <>
                <EditModal title={title} note={note} setTitle={setTitle} setNote={setNote} bgColor={color} setModalOpen={setModalOpen} />
                {/* Button to close the modal */}
                <button className="btn"><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
              </>
            ) : (
              // If modal is closed, display button to open modal
              <button className="btn" onClick={toggleModal}><i className="fa-solid fa-pen-to-square fa-xs"></i></button>
            )}
            {/* Button to delete note */}
            <button className='btn' onClick={deleteNoteFn}><i className="fa-solid fa-trash fa-xs"></i></button>
          </>
        )}
      </div>
    </div>
  );
}

export default Grid;
