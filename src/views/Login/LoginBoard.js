import React from 'react'
import { branch, renderNothing } from 'recompose'

import { request } from '../../server'
import Workspace from '../../components/Workspace'

class LoginBoard extends React.Component {

  state = {
    hoverForgot: false
  }

  render () {
    return (
      <div style={{
        position: 'absolute',
        top: '32px',
        right: 0,
        left: 0
      }}>
        <Workspace>
          <input placeholder='Имя пользователя' style={{
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
          </div>
        </Workspace>
      </div>
    )
  }
}

export default branch(({show}) => !show, renderNothing)(LoginBoard)
