import React, { useContext, useState } from 'react';
import ColorPicker from './colorPicker';
import { NoteContext } from '../context/GlobalContext';

function Input() {
  // State variables for managing title, note, color picker visibility, and color
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [displayColorPallet, setDisplayColorPallet] = useState(false);
  const [color, setColor] = useState('#fff');

  // Accessing the addNote function from NoteContext
  const { addNote } = useContext(NoteContext);

  // Function to handle form submission
  function submitData(e) {
    e.preventDefault();
    // Add a new note with the current title, note, and selected color
    addNote(title, note, color);
    // Clear input fields and reset color to default
    setTitle('');
    setNote('');
    setColor('#fff');
  }

  // Function to toggle color picker visibility
  function toggleColorPicker(e) {
    e.preventDefault();
    setDisplayColorPallet(prev => !prev);
  }

  return (
    <div>
      <form className='inputContainer'>
        {/* Input field for title */}
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Input field for note */}
        <div className="mb-1">
          <input
            type="text"
            className="form-control"
            id="note"
            placeholder='Note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        {/* Check if color picker should be displayed */}
        {displayColorPallet ? (
          <ColorPicker color={color} setColor={setColor} setDisplayColorPallet={setDisplayColorPallet} />
        ) : (
          <>
            {/* Button to toggle color picker */}
            <button className='btn' onClick={toggleColorPicker}><i className="fa-solid fa-palette fa-lg"></i></button>
            {/* Button to submit the note */}
            <button type="submit" className="btn" onClick={submitData}><i className="fa-solid fa-notes-medical fa-lg"></i></button>
          </>
        )}
      </form>
    </div>
  )
}

export default Input;
