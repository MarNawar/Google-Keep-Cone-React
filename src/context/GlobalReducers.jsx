export const NoteReducer = function(state, action){
  switch(action.type){
      case 'ADD_NOTE' :
        return {
          ...state,
          notes: [action.payload, ...state.notes]
        }
      case 'DELETE_NOTE' :
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload)
        }
      case 'UPDATE_NOTE' :
        return {
          ...state,
          notes : state.notes.map((note)=>{
            return note.id===action.payload.id? action.payload: note
          })
        }
      case 'UPDATE_SEARCH_QUERY' :
        return {
          ...state,
          searchQuery : action.payload,
        }
      default :
        return state;
  }
}

export const uiReducer = function (state, action){
  switch(action.type){
    case 'CHANGE_LAYOUT' :
        return {
          ...state,
          layout: state.layout==='grid'? 'list' : 'grid'
        }
      case 'OPEN_SIDEBAR' :
        return {
          ...state,
          sidebar: state.sidebar === 'collapsed'? 'expanded' : 'collapsed'
        }
      default :
        return state;
  }
}