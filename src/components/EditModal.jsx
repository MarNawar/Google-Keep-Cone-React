import React from 'react';
import './Modal.css';

function EditModal({ title, note, setTitle, setNote, bgColor ,setModalOpen }) {

  // Function to close the edit modal
  function closeModal(e) {
    e.preventDefault();
    // Toggles the modal state to close it
    setModalOpen(prev => !prev);
  }

  return (
    <div className="editModal-container" id="editModal">
      <div className="editModal">
        {/* Close button */}
        <button className="close-btn" id="close" onClick={closeModal}>
          <i className="fa fa-times"></i>
        </button>
        <div className="editModal-header">
          <h3>Update Note</h3>
        </div>
        <div className="editModal-content" style={{backgroundColor:bgColor}}>
          {/* Form for editing note */}
          <form className="editModal-form" id="form">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="form-input"
                style={{backgroundColor:bgColor}}
                value={title}
                onChange={(e) => {
                  e.preventDefault(); 
                  setTitle(e.target.value) 
                }}
              />
            </div>
            <div>
              <label htmlFor="note">Note</label>
              <input
                type="text"
                id="note"
                placeholder="Note"
                className="form-input"
                style={{backgroundColor:bgColor}}
                value={note}
                onChange={(e) => {
                  e.preventDefault(); 
                  setNote(e.target.value) 
                }}
              />
            </div>
            {/* Submit button to confirm changes and close modal */}
            <input
              type="submit"
              value="Submit"
              id="btn"
              className="submit-btn"
              onClick={closeModal} // Calls the closeModal function when clicked
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
