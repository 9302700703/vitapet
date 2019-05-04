import React from 'react'

export default props =>
  <div style={{
    position: 'relative',
    display: 'flex',
    placeItems: 'center',
    margin: '0 10px'
  }}>
    {props.children}
  </div>