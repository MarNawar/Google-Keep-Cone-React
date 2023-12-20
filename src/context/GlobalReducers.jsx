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
          transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
        }
      case 'UPDATE_NOTE' :
        console.log('update', action.payload)
        return {
          ...state,
          notes : state.notes.map((note)=>{
            return note.id===action.payload.id? action.payload: note
          })
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
        console.log(state.sidebar)
        return {
          ...state,
          sidebar: state.sidebar === 'half'? 'full' : 'half'
        }
      default :
        return state;
  }
}