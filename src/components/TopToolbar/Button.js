import React from 'react'

class Button extends React.Component {

  state = {
    mouseDown: false
  }

  render () {
    return (
      <div style={{
        position: 'relative',
        padding: '0px 10px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
      }}>
        <div
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: this.state.mouseDown ? '0.1' : '0'
           
          }}
          onMouseDown={() => this.setState({ mouseDown: true })}
          onMouseUp={() => this.setState({ mouseDown: false })}
          onClick={this.props.onClick}
        ></div>
        <div>{this.props.title}</div>
      </div>
    )
  }
}

export default Button
