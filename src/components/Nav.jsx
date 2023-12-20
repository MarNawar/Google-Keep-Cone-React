import { useContext } from 'react'
import { NoteContext } from '../context/GlobalContext';

function Nav() {
  const { uiState,uiDispatch } = useContext(NoteContext);

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
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid mx-5">
        <button id="toggle" className="toggle" onClick={openSidebar}>
          <i className="fa fa-bars"></i>
        </button>
        <div className="logo">
          <a className="navbar-brand" style={{color:'#5f6368'}}><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="KEEP" />Keep</a>
        </div>
        <form className="d-flex" role="search" style={{width:'50%'}}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <button className='btn my-2' onClick={changeLayout}>{uiState.layout!=='grid'?<i className="fa-solid fa-table-cells-large fa-xs"></i>:<i className="fa-solid fa-bars fa-xs"></i>}</button>
      </div>
    </nav>
  )
}

export default Nav