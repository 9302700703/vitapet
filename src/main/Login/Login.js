import React from 'react'
import { request } from '../../server'

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  render () {
    return (
      <div style={{
        position: 'fixed',
        backgroundColor: 'transparent',
        display: 'flex',
        inset: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'relative',
          backgroundColor: '#DDDDDD',
          height: '190px',
          width: '400px',
          border: '1px CC solid',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <input style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '300px'
          }} onChange={e => this.setState({ username: e.target.value })}/>
          <input style={{
            position: 'absolute',
            top: '90px',
            left: '40px',
            width: '300px'
          }} onChange={e => this.setState({ password: e.target.value })}/>
          <button style={{
            position: 'absolute',
            top: '140px'
          }} onClick={() => {
            request(
              'login',
              {
                username: this.state.username,
                password: this.state.password
              }
            ).then(r => {
              this.props.afterLogin(r)
            })
          }}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login
