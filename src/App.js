import React, { Component } from 'react';
import { request } from './server'

// class Login extends Component {

//   state = {
//     username: '',
//     password: ''
//   }

//   render () {
//     return (
//       <div>
//         <div>Имя пользователя</div>
//         <input
//           onChange={e => this.setState({ username: e.target.value })}
//         />
//         <div>Пароль</div>
//         <input
//           onChange={e => this.setState({ password: e.target.value })}
//         />
//         <button onClick={() => {
//           request(
//             'login',
//             {
//               username: this.state.username,
//               password: this.state.password
//             }

//           ).then(r => {
//             console.log(r)
//             this.props.afterLogin(r)
//           })
//         }}>submit</button>
//       </div>
//     )
//   }
// }

// class StartPage extends Component {
//   render () {
//     return (
//       <div>
//         <div>{`Приветствую вас, ${this.props.username}`}</div>
//         <button onClick={() => {
//           this.props.sett(false, '')
//         }}>Назад</button>
//       </div>

//     )
//   }
// }

class App extends Component {

  state = {
    username: '',
    password: '',
    login: false,
    msg: ''
  }

  render() {
    return (
      <div>
        {!this.state.login &&
          <div>
            <Login afterLogin={r => {
              this.setState({
                login: r.login,
                username: r.username,
                msg: r.msg
              })
            }}/>
            <div>{this.state.msg}</div>
          </div>}
        {this.state.login &&
          <StartPage
          sett={(login, msg) => this.setState({ login, msg })}
          username={this.state.username}/>}
      </div>
    );
  }
}

export default App;
