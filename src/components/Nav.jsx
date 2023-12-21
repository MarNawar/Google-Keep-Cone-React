import { useContext } from 'react'
import { NoteContext } from '../context/GlobalContext';

function Nav() {
  const { uiState,uiDispatch, filterBySearchQuery } = useContext(NoteContext);

  function changeLayout(){
    uiDispatch({
      type: 'CHANGE_LAYOUT',
    })
  }
  function openSidebar(){
    
    uiDispatch({
      type : 'OPEN_SIDEBAR',
    })
  }


  return (
    <nav className="navbar fixed-top" style={{backgroundColor: "#ffffff", boxShadow: 'inset 0 -1px 0 0 #dadce0'}}>
      <div className="container-fluid mx-5">
        <button id="toggle" className="toggle" onClick={openSidebar}>
          <i className="fa fa-bars"></i>
        </button>
        <div className="logo">
          <a className="navbar-brand" style={{color:'#5f6368'}}><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="KEEP" />Keep</a>
        </div>
        <form className="d-flex" role="search" style={{width:'50%'}}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
            e.preventDefault();
            filterBySearchQuery(e.target.value);
          }}/>
          
        </form>
        <button className='btn my-2' onClick={changeLayout}>{uiState.layout!=='grid'?<i className="fa-solid fa-table-cells-large fa-lg"></i>:<i className="fa-solid fa-list-ul fa-lg"></i>}</button>
      </div>
    </nav>
  )
}

export default Nav