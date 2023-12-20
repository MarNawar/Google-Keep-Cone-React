import React, { createContext, useReducer, useContext } from 'react';
import { NoteReducer, uiReducer } from './GlobalReducers'; // Check the correct path
import { v4 as uuidv4 } from 'uuid';


export const NoteContext = createContext();

function GlobalContext({ children }) {
  const [notesState, notesDispatch] = useReducer(NoteReducer, {
    notes: [],
  });

  const addNote = (title, note, color) => {
    const id = uuidv4();
    notesDispatch({
      type: 'ADD_NOTE',
      payload: { id, title, note, color }, // Updated structure for dispatch
    });
  };

  const updateNote = (title, note, color, id)=>{
    notesDispatch({
      type:'UPDATE_NOTE',
      payload: { title, note, color, id }
    })
  }

  const deleteNote=(id)=>{
    notesDispatch({
      type: 'DELETE_NOTE',
      payload: id,
    })
  }

  const [uiState, uiDispatch] = useReducer(uiReducer, {
    sidebar: 'half',
    layout: 'grid',
  });

  return (
    <NoteContext.Provider value={{ notesState, notesDispatch, uiState, uiDispatch, addNote, updateNote,deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export default GlobalContext;

export function SomeComponent() {
  return useContext(NoteContext);
}
