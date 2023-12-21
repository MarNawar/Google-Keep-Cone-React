import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { NoteReducer, uiReducer } from './GlobalReducers'; // Check the correct path
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../customHooks/useLocalStorage';

// Create a context for the notes
export const NoteContext = createContext();

function GlobalContext({ children }) {
  // Retrieve notes data from local storage, using a custom hook
  const [value, setValueInStorage] = useLocalStorage('notes', []);
  // Retrieve and set the layout type from local storage
  const [layout, setLayout] = useLocalStorage('layout', 'list');

  // Initialize notesState with the retrieved notes and an empty search query
  const [notesState, notesDispatch] = useReducer(NoteReducer, {
    notes: value,
    searchQuery: '',
  });

  // Function to add a new note
  const addNote = (title, note, color) => {
    const id = uuidv4();
    notesDispatch({
      type: 'ADD_NOTE',
      payload: { id, title, note, color },
    });
  };

  // Function to update a note
  const updateNote = (title, note, color, id) => {
    notesDispatch({
      type: 'UPDATE_NOTE',
      payload: { title, note, color, id },
    });
  };

  // Function to delete a note
  const deleteNote = (id) => {
    notesDispatch({
      type: 'DELETE_NOTE',
      payload: id,
    });
  };

  // Function to filter notes by search query
  const filterBySearchQuery = (query) => {
    notesDispatch({
      type: 'UPDATE_SEARCH_QUERY',
      payload: query,
    });
  };

  // Initialize the UI state with sidebar and layout information
  const [uiState, uiDispatch] = useReducer(uiReducer, {
    sidebar: 'collapsed',
    layout: layout,
  });

  // Update local storage when the notes state changes
  useEffect(() => {
    setValueInStorage(notesState.notes);
  }, [notesState]);

  // Update layout in local storage when UI state changes
  useEffect(() => {
    setLayout(uiState.layout);
  });

  // Provide the context value to the components
  return (
    <NoteContext.Provider
      value={{
        notesState,
        notesDispatch,
        uiState,
        uiDispatch,
        addNote,
        updateNote,
        deleteNote,
        filterBySearchQuery,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export default GlobalContext;

// // Example of using the context in another component
// export function SomeComponent() {
//   return useContext(NoteContext);
// }
