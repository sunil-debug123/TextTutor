import React, { useState } from 'react';
const data = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Rahul'
  },
  {
    id: 3,
    name: 'James'
  },
  {
    id: 4,
    name: 'Amit'
  },
  {
    id: 5,
    name: 'Vishal'
  },
  {
    id: 6,
    name: 'Prince'
  }
]

export default function Table (props) {
    const [Newlist, updateList] = useState(data);

  const filteredData = Newlist.filter(list => {
    if (props.input === '') {
      return list
    }
    else {
      return list.name.toLowerCase().includes(props.input)
    }
  })
  const handleClick = (e) =>{
   const cid = e.currentTarget.id
    updateList(Newlist.filter(item => item.id != cid));
   
  }
  return (
    <div style={{marginRight:"600px"}}>
      <table class='table' >
        <thead style={{backgroundColor : "black", color : "white" , textAlign : "center"}}>     
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
      
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr id={item.id} onClick={handleClick}>
              <th scope='row'>{item.id}</th>
              <td >{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
