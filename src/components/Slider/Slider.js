import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { between } from '../utils'

class Slider extends React.Component {

  state = {
    left: this.props.defaultPosition,
    nodeX: 0,
    nodeWidth: 0
  }

  componentDidMount () {
    this.setState({
      nodeWidth: ReactDOM.findDOMNode(this).getBoundingClientRect().width
    })
  }

  onMouseDown = () => {
    this.setState({ nodeX: ReactDOM.findDOMNode(this).getBoundingClientRect().x })
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('mouseup', this.onMouseUp)
  }

  onMouseMove = e => {
    // Половина ширины бегунка
    const halfRoller = 6
    // Позиция мыши относительно начала элемента
    const position = e.clientX - this.state.nodeX - halfRoller
    // Максмиальная позиция мыши
    const max = this.state.nodeWidth - 20 + 4
    // Минимальная позиция мыши
    const min = 4
    // Относительная позиция бегунка (от 0 до 1)
    const share = (between(position, max, min) - min) / (max - min)
    console.log(ReactDOM.findDOMNode(this).getBoundingClientRect())
    console.log(e.clientX)

    this.setState({ left: between(position, max, min) })
    this.props.slide(share)
  }

  onMouseUp = e => {
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('mouseup', this.onMouseUp)
  }

  render () {
    const { width } = this.props
    return (
      <div onMouseDown={this.onMouseDown} style={{
        position: 'relative',
        width: width,
        height: 30,
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      }}>
        <div
          style={{
            position: 'absolute',
            width: `calc(100% - 22px)`,
            height: '4px',
            backgroundColor: '#888',
            borderRadius: '3px',
            top: 'calc(50% - 3px)',
            left: `calc(50% - ${(this.state.nodeWidth - 20) / 2}px)`,
            border: '1px #555 solid'
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            background: '#eee',
            border: '1px #333 solid',
            borderRadius: '6px',
            top: 'calc(50% - 6px)',
            left: this.state.left
          }}
        ></div>
      </div>
    )
  }
}

Slider.defaultProps = {
  width: '100%',
  defaultPosition: 4
}

Slider.propTypes = {
  // Начальная позиция бегунка
  defaultPosition: PropTypes.number,
  // Ширина
  width: PropTypes.string,
  // Действие при перемещении бегунка
  slide: PropTypes.func.isRequired
}

export default Slider
