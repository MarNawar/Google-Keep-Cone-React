import { useContext } from "react"
import Grid from "./Grid"
import Note from "./Note"
import { NoteContext } from "../context/GlobalContext";


function Notes() {
  const { notesState,uiState } = useContext(NoteContext); 



  return (
    <div className= {(uiState.layout==='grid'&&uiState.sidebar === 'full')?'notesContainer active':'notesContainer'}>      
      {uiState.layout==='grid'?
      <div className="container my-5 " >   
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-start'>
          {notesState.notes
          .filter((note)=>{
            if(note.title.includes(notesState.searchQuery)||note.note.includes(notesState.searchQuery)){
              return true;
            }
          }).map((note)=>{
            return <Grid key={note.id} data = {note}/>
          })}
          
        </div>
      </div>
      :
      <div className="container my-3 ">
        <div className='row gy-3 flex-column justify-content-center align-items-center'>
        {notesState.notes
        .filter((note)=>{
          if(note.includes(notesState.searchQuery)){
            return true;
          }
        })
        .map((note)=>{
            return <Note key={note.id} data = {note}/>
          })}
        </div>
      </div> 
      }
    </div>
  )
}

export default Notes