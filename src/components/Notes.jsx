import { useContext } from "react";
import Grid from "./Grid";
import { NoteContext } from "../context/GlobalContext";
import List from "./List";

function Notes() {
  const { notesState, uiState } = useContext(NoteContext);

  return (
    <div className={(uiState.layout === 'grid' && uiState.sidebar === 'expanded') ? 'notesContainer active' : 'notesContainer'}>
      {uiState.layout === 'grid' ? (
        <div className="container my-5">
          {/* Displaying notes in a grid layout */}
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-start'>
            {notesState.notes
              .filter((note) => {
                // Filtering notes based on search query
                if (note.title.toLowerCase().includes(notesState.searchQuery.toLowerCase()) || 
                    note.note.toLowerCase().includes(notesState.searchQuery.toLowerCase())) {
                  return true;
                }
              })
              .map((note) => {
                return <Grid key={note.id} data={note} />;
              })}
          </div>
        </div>
      ) : (
        <div className="container my-3">
          {/* Displaying notes in a list layout */}
          <div className='row gy-3 flex-column justify-content-center align-items-center'>
            {notesState.notes
              .filter((note) => {
                // Filtering notes based on search query
                if (note.title.toLowerCase().includes(notesState.searchQuery.toLowerCase()) || 
                    note.note.toLowerCase().includes(notesState.searchQuery.toLowerCase())) {
                  return true;
                }
              })
              .map((note) => {
                return <List key={note.id} data={note} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
