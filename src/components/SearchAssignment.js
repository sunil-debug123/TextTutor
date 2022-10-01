import React, { useState } from 'react';
import Table from './table';


export default function SearchAssignment () {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  
  return (
    <div style={{ marginLeft: '650px', padding: '10px' }}>
      <div style={{ fontFamily: 'Impact', color: 'blue' }}>
        <h1>Assignment-2</h1>
      </div>
      <br />
      <form>
        <input
          style={{ padding: '4px' }}
          type='search'
          value={inputText}
          placeholder='Search here...'
          aria-label='Search'
          onChange={inputHandler}
        />
        <button class='btn btn-success mx-2' type='submit'>
          Search
        </button>
      </form>
      <br />
     <Table input={inputText} />
    </div>
  )
}
