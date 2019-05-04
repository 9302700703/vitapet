import React from 'react'
import { connect } from 'react-redux'

import Icon from '../../components/Icon'
import LoginBoard from './LoginBoard'
import UserInfoModal from './UserInfoModal'

class LoginField extends React.Component {

  state = {
    showLoginBoard: false,
    showUserInfo: false
  }

  render () {
    return (
      <div style={{
        position: 'relative',
        display: 'flex'
      }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'center',
          height: '30px',
          width: '175px',
          fontSize: '13px',
          right: '-15px',
          backgroundColor: '#090',
          borderRadius: '15px 0 0 15px',
          zIndex: '1',
          cursor: 'pointer',
          paddingLeft: '10px',
          overflow: 'hidden'
        }}>{this.props.login ? this.props.username : 'Зарегестрироваться'}</div>
        <div
          onClick={() => {
            this.setState({ showUserInfo: !this.state.showUserInfo })
          }}
          style={{
            position: 'relative',
            height: '30px',
            width: '30px',
            backgroundColor: 'yellow',
            borderRadius: '15px',
            zIndex: '2'
          }}
        >
          {this.props.avatar
            ? <Icon icon={Icon.Type.IMAGE_ICON} img={this.props.avatar} size={30}/>
            : <Icon icon={Icon.Type.UNKNOW_USER} size={20}/>}
        </div>
        <div
          onClick={() => {
            this.props.login
              ? this.props.dispatch({ type: 'LOG_OUT' })
              : this.setState({ showLoginBoard: !this.state.showLoginBoard })
          }}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30px',
            width: '100px',
            fontSize: '13px',
            left: '-15px',
            backgroundColor: this.state.showLoginBoard ? '#0b0' : '#090',
            borderRadius: '0 15px 15px 0',
            zIndex: '1',
            cursor: 'pointer'
          }}
        >{this.props.login ? 'Выйти' : 'Войти'}</div>
        <LoginBoard
          afterLogin={r => {
            r.login && this.props.dispatch({ type: 'LOG_IN', username: r.username }) &&
              this.setState({ showLoginBoard: false })
          }}
          show={this.state.showLoginBoard}/>
        <UserInfoModal
          show={!this.state.showUserInfo}
        />
      </div>
    )
  }
}

export default connect(
  state => {
    // console.log(state)
    return {
      login: state.login.login,
      username: state.login.username,
      avatar: state.avatar.avatar
    }
  }
)(LoginField)
