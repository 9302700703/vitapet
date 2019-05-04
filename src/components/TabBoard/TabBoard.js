import React from 'react'

class TabBoard extends React.Component {
  render () {
    return (
      <div
        style={{
          position: 'relative',
          backgroundColor: '#eaeaea',
          border: '1px #DDDDDD solid',
          borderRadius: '6px',
          padding: '10px',
          margin: '3px',
          boxShadow: `${this.props.shadow || 'black'} -2px 5px 5px`
        }}
      >
        <button
          style={{
            backgroundColor: '#0B0',
            border: '0px #0A0 solid',
            borderRadius: '15px',
            height: '30px',
            width: '100px',
          }}
        >asdf</button>
      </div>
    )
  }
}

export default TabBoard
