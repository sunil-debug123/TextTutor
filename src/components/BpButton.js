import * as React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

export default function BpButton ({ btnText , handleClick ,bid }) {
  return (
    <Button  onClick={()=>handleClick(bid)} variant='contained' style={{ marginLeft: 20, marginTop: 50 }}>
      {btnText}
    </Button>
  )
}
BpButton.prototype = {
  btnText: String
}
BpButton.defaultProps = {
  btnText: ''
}
