import React from 'react'

class Workspace extends React.Component {
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
      >{this.props.children}</div>
    )
  }
}

export default Workspace
