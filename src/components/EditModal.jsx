import React from 'react';
import './Modal.css'

function EditModal({ title, note, setTitle, setNote, setModalOpen }) {

  function closeModal(){
    setModalOpen(prev=>{
      return !prev;
    })
  }

  return (
    <div className="editModal-container" id="editModal">
      <div className="editModal">
        <button className="close-btn" id="close">
          <i className="fa fa-times"></i>
        </button>
        <div className="editModal-header">
          <h3>Update Note</h3>
        </div>
        <div className="editModal-content">
          <form className="editModal-form" id="form">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="form-input"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="note">Note</label>
              <input
                type="text"
                id="note"
                placeholder="Note"
                className="form-input"
                value={note}
                onChange={(e) => { setNote(e.target.value) }}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              id="btn"
              className="submit-btn disabled"
              onClick={closeModal}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditModal;
