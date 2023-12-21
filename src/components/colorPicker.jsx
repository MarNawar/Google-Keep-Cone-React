import React from 'react';
import './colorPicker.css';

function ColorPicker({ color, setColor, setDisplayColorPallet }) {

  // Function to handle color change using color input
  const handleColorChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  // Function to close color picker
  function closeColorPicker(e) {
    e.preventDefault();
    setDisplayColorPallet(prev => !prev);
  }

  return (
    <div className="container py-3" >
      {/* Buttons to select predefined colors */}
      <button className='clr colr1' onClick={(e) => {
        e.preventDefault();
        setColor('#ffffff');
      }}></button>
      <button className='clr clr2' onClick={(e) => {
        e.preventDefault();
        setColor('#faafa8');
      }}></button>
      <button className='clr clr3' onClick={(e) => {
        e.preventDefault();
        setColor('#e2f6d3');
      }}></button>
      <button className='clr clr4' onClick={(e) => {
        e.preventDefault();
        setColor('#d3bfdb');
      }}></button>
      {/* Input for selecting a custom color */}
      <input
        type="color"
        className="clrInput"
        value={color}
        onChange={handleColorChange}
      />
      {/* Button to confirm selected color and close color picker */}
      <button className='done' onClick={closeColorPicker}><i className="fa-regular fa-circle-check"></i></button>
    </div>
  );
}

export default ColorPicker;
