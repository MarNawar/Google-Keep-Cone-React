import React, { useContext } from 'react';
import { NoteContext } from '../context/GlobalContext';

function Sidebar() {
  const { uiState } = useContext(NoteContext);

  return (
    <>
      {/* Conditional rendering based on the sidebar state */}
      {uiState.sidebar === 'expanded' ? (
        // Sidebar with expanded options
        <div className='sidebar active'>
          <ul>
            <li><a href="#"><i className="fa-regular fa-lightbulb"></i><span className='mx-3'>Notes</span></a></li>
            <li><a href="#"><i className="fa-regular fa-bell"></i><span className='mx-3'>Reminder</span></a></li>
            <li><a href="#"><i className="fa-solid fa-box-archive"></i><span className='mx-3'>Archive</span></a></li>
            <li><a href="#"><i className="fa-regular fa-trash-can"></i><span className='mx-3'>Trash</span></a></li>
          </ul>
        </div>
      ) : (
        // Sidebar with collapsed options
        <div className='sidebar'>
          <ul>
            <li><a href="#"><i className="fa-regular fa-lightbulb"></i></a></li>
            <li><a href="#"><i className="fa-regular fa-bell"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-box-archive"></i></a></li>
            <li><a href="#"><i className="fa-regular fa-trash-can"></i></a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
