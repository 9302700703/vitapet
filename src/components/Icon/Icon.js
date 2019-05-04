import React from 'react'
import ImageIcon from './ImageIcon'
import UndefinedIcon from './UndefinedIcon'
import UnknowUser from './UnknowUser'

class Icon extends React.Component {
  render () {
    return (
      <div style={{
        position: 'relative',
        height: this.props.size,
        width: this.props.size,
        padding: `calc(50% - ${this.props.size / 2}px)`
      }}>
        {this.props.icon({ img: this.props.img, size: this.props.size })}
      </div>
    )
  }
}

Icon.Type = {
  IMAGE_ICON: ImageIcon,
  UNDEFINED: UndefinedIcon,
  UNKNOW_USER: UnknowUser
}

export default Icon
