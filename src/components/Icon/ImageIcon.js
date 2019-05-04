import React from 'react'

const ImageIcon = props => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#38a61f',
        backgroundImage: `url(${props.img})`,
        height: `${props.size}px`,
        width: `${props.size}px`,
        backgroundSize: `${props.size}px`,
        borderRadius: `${props.size}px`
        // inset: 0,
        // overflow: 'scroll'
      }}
    >
      {/* asdf */}
    </div>
  )
}

export default ImageIcon
