import React from 'react'
import { connect } from 'react-redux'
import { branch, renderNothing, compose } from 'recompose'

import { request } from '../../server'
import { Workspace, AvatarEditor } from '../../components'
import ttt from '../../images/main.jpg'
// import AvatarEditor from 'react-avatar-editor'

class UserInfoModal extends React.Component {

  state = {
    hoverForgot: false,
    width: 100,
    scale: 1.2,
    img: null
  }

  setEditorRef = (editor) => this.editor = editor

  render () {
    return (
      <div style={{
        position: 'absolute',
        top: '32px',
        right: 0,
        left: 0,
        zIndex: 1
      }}>
        <Workspace>
          <AvatarEditor
            // ref={this.setEditorRef}
            image={ttt}
            buttonClick={avatar => this.props.dispatch({ type: 'AVATAR', avatar })}
            // width={this.state.width}
            // height={100}
            // border={50}
            // color={[255, 255, 255, 0.6]} // RGBA
            // scale={this.state.scale}
            // rotate={0}
          />
          {/* <button onClick={() => this.setState({ width: this.state.width + 10 })}>+width</button>
          <button onClick={() => this.setState({ scale: this.state.scale + 0.1 })}>+scale</button>
          <button onClick={() => this.setState({ scale: this.state.scale - 0.1 })}>-scale</button>
          <button onClick={() => this.setState({ img: this.editor.getImage().toDataURL() })}>editor</button>
          <Workspace>
            <div style={{
              position: 'relative',
              backgroundColor: '#38a61f',
              backgroundImage: `url(${this.state.img})`,
              backgroundSize: '300px',
              inset: 0,
              height: 400
            }}>
            </div>
            <button onClick={() => console.log(this.state.img)}>asdf</button>
          </Workspace> */}
          {/* <div style={{
            position: 'relative',
            backgroundColor: '#38a61f',
            backgroundImage: `url(${ttt})`,
            backgroundSize: '300px',
            inset: 0
          }}></div> */}
          {/* <input placeholder='Имя пользователя' style={{
            position: 'relative',
            margin: '5px 0'
          }} onChange={e => this.setState({ username: e.target.value })}/>
          <input placeholder='Пароль'  style={{
            position: 'relative',
            margin: '5px 0'
          }} onChange={e => this.setState({ password: e.target.value })}/>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center'
          }}>
            <button style={{
              position: 'relative',
            }} onClick={() => {
              request(
                'login',
                {
                  username: this.state.username,
                  password: this.state.password
                }
              )
              .then(r => {
                // console.log(r)
                this.props.afterLogin(r)
              })
            }}>Войти</button>
            <div
              onMouseOver={() => this.setState({ hoverForgot: true })}
              onMouseOut={() => this.setState({ hoverForgot: false })}
              style={{
                marginLeft: '50px',
                fontSize: '14px',
                color: this.state.hoverForgot ? '#44f' : '#11F',
                cursor: 'pointer'
              }}
            >Забыли пароль</div>
          </div> */}
        </Workspace>
      </div>
    )
  }
}

export default compose(
  branch(({show}) => !show, renderNothing),
  connect(
    state => {
      // console.log(state)
      return {}
    }
  ),
)(UserInfoModal)
