import React from 'react'
import Login from './Login'

class Main extends React.Component {

  state = {
    username: '',
    password: '',
    login: false,
    msg: ''
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        backgroundColor: '#38a61f',
        inset: 0
      }}>
      <div>{this.state.msg}</div>
        {!this.state.login &&
            <Login afterLogin={r => {
              this.setState({
                login: r.login,
                username: r.username,
                msg: r.msg
              })
            }}/>
            }
            {this.state.login && <div>
              <div>asdf</div>
              <button onClick={() => this.setState({ login: false })}>asdfasdf</button>
            </div>}
        {/* {this.state.login &&
          <StartPage
          sett={(login, msg) => this.setState({ login, msg })}
          username={this.state.username}/>} */}
      </div>
    )
  }
}

export default Main