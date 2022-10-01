import React, { useState } from 'react'

export default function Texttutils () {
  const [text, setText] = useState()
  const [characters, setCharacters] = useState(0)

  const handleUp = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }
  const handlelow = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }
  const handleclear = () => {
    setText("");
    setCharacters(0)
  }
  const handleChange = e => {
   setText(e.target.value);
   const count = setCharacters(e.target.value.length)

  }
  return (
    <div style={{ marginLeft: '500px', padding: '10px' }}>
      <div style={{ marginLeft: '200px', fontFamily: 'Impact', color: 'red' }}>
        <h1>Text Editor</h1>
      </div>
      <br />
      <h1>Enter Text Here</h1>
      <textarea
        cols={'70'}
        value={text}
        rows='10'
        onChange={handleChange}
      ></textarea>{' '}
      <br />
      <div className='m-1'>
      <button type='button' class='btn btn-primary mx-1' onClick={handleUp}>
        Convert to Uppercase
      </button>
      <button type='button' class='btn btn-primary mx-1' onClick={handlelow}>
        Convert to Lowecase
      </button>
      <button type='button' class='btn btn-primary mx-1' onClick={handleclear}>
        Clear All
      </button>
      </div>
      <div className='container my-3'>
        
      <h2>Your Text Summary</h2>
      <p>Number of characters are {characters}</p>
      </div>
    </div>
  )
}
