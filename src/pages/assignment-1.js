import React, { useState } from 'react'
import BpButton from '../components/BpButton'
import Bpdata from '../components/Bpdata'

const btn = [
  {
    id: 1,
    btnText: 'Bp-Up'
  },
  { id: 2, btnText: 'Bp-Down' },
  { id: 3, btnText: 'Bp-Normal' }
]
export default function Assignment1 () {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState('')
  const [input, getInputData] = useState(null)

  const hi = id => {
    if (visible) {
      setVisible(false)
    } else {
      setVisible(id)
    }
  }

  const handlepress = event => {
    const value = event.target.value
    if (event.key == 'Enter') {
      getInputData(value)
      // setVisible(false)
    }
  }
  return (
    <div>
      <div style={{ marginLeft: '650px', fontFamily: 'Impact', color: 'red' }}>
        <h1>Assignment-1</h1>
      </div>
      <div style={{ marginLeft: '650px' }}>
        {visible ? (
          <input type='text' name='bp' onKeyPress={handlepress} />
        ) : null}
      </div>
      <div style={{ marginLeft: '580px' }}>
        {btn.map(list => {
          return (
            <BpButton bid={list.id} btnText={list.btnText} handleClick={hi} />
          )
        })}
      </div>
      <div>
        <Bpdata  />
        {visible == 1 ? <Bpdata bpup={input} /> : null}
        {visible == 2 ? <Bpdata bpdown={input} /> : null}
        {visible == 3 ? <Bpdata bpnormal={input} /> : null}
      </div>
    </div>
  )
}
