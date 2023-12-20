import React, { useState } from 'react';
import './colorPicker.css'

function ColorPicker({color, setColor, setDisplayColorPallet}) {

  const handleColorChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  function closeColorPicker(e){
    e.preventDefault();
    setDisplayColorPallet(prev=>{
      return !prev;
    })
  }

  return (
    <div className="container py-3">
      
          <button className='clr colr1' onClick={(e)=>{
            e.preventDefault();
            setColor('#ffffff')}}></button>
          <button className='clr clr2' onClick={(e)=>{
            e.preventDefault();
            setColor('#faafa8')}}></button>
          <button className='clr clr3' onClick={(e)=>{
            e.preventDefault();
            setColor('#e2f6d3')}}></button>
          <button className='clr clr4' onClick={(e)=>{    
            e.preventDefault();
            setColor('#d3bfdb')}}></button>
          <input
            type="color"
            className="clr"
            value={color}
            onChange={handleColorChange}
          />
          <button className='clr done' onClick={closeColorPicker}><i className="fa-regular fa-circle-check"></i></button>
    </div>
  );
}

export default ColorPicker;
