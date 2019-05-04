import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar-editor'

import Slider from '../Slider'
import Button from '../Button'

class AvatarEditor extends React.Component {

  state = {
    avatar: null,
    scale: 1
  }

  setEditorRef = editor => this.editor = editor

  saveAvatar = () => this.props.buttonClick(this.editor.getImage().toDataURL())

  removeAvatar = () => this.props.buttonClick(null)

  slide = share => this.setState({ scale: 1 + share * this.props.scale })

  render () {
    const { image, width, height, border, borderRadius } = this.props
    return (
      <div>
        <Avatar
          ref={this.setEditorRef}
          image={image}
          width={width}
          height={height}
          border={border}
          borderRadius={borderRadius}
          scale={this.state.scale}
          rotate={0}
        />
        <Slider
          slide={this.slide}
        />
        <Button title='Сохранить' onClick={this.saveAvatar}/>
        {/* <button onClick={this.removeAvatar}>Удалить</button> */}
        <Button title='Удалить' onClick={this.removeAvatar}/>
      </div>
    )
  }
}

AvatarEditor.defaultProps = {
  scale: 4,
  width: 285,
  height: 285,
  border: 0,
  borderRadius: 142.5
}

AvatarEditor.propTypes = {
  image: PropTypes.string.isRequired,
  scale: PropTypes.number,
  buttonClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  border: PropTypes.number
}

export default AvatarEditor

