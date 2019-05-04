import React from 'react'

class Button extends React.Component {

  state = {
    isClicked: false
  }
  
  render () {
    const { isClicked } = this.state
    return (
      <div
        style={{
          display: 'inline',
          border: '1px solid #777',
          borderRadius: '7px',
          padding: `3px ${isClicked ? '7px' : '8px'} 3px ${isClicked ? '9px' : '8px'}`,
          width: 'max-content',
          color: '#555',
          backgroundColor: isClicked ? '#e3e3e3' : '#fafafa',
          borderTopColor: '#afafaf',
          borderLeftColor: '#afafaf',
          margin: '3px',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none'
        }}
        onMouseDown={() => this.setState({ isClicked: true})}
        onMouseUp={() => this.setState({ isClicked: false})}
        onClick={this.props.onClick}
      >{this.props.title}</div>
    )
  }
}

export default Button
