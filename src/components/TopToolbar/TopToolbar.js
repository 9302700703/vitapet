import React from 'react'
import Button from './Button'
import LoginField from '../../views/Login'
import Item from './Item'
import Link from '../Link'

class TimeBox extends React.Component {

  state = {
    t: 0,
    ttt: false
  }

  componentDidMount () {
    setInterval(() => {
      const date = new Date()
      this.setState({
        t: `${
          date.getHours()
        }${
          this.state.ttt ? ':' : ':'
        }${
          date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
        }${
          this.state.ttt ? ':' : ':'
        }${
          date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
        }`,
        ttt: !this.state.ttt
      })}, 500)
  }

  render () {
    return (
      <div>
        {this.state.t}
      </div>
    )
  }
}

class TopToolbar extends React.Component {
  render () {
    return (
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        top: '0',
        height: '35px',
        backgroundColor: '#6d6',
        width: '100%',
      }}>
        <Button
          title='Главная'
          onClick={() => this.props.history.push('/main')}/>
        <Button
          title='Заводикам'
          onClick={() => this.props.history.push('/breeder')}/>
        <Button
          title='Ветеринарам'
          onClick={() => this.props.history.push('/vet')}/>
        <Button
          title='Форум'
          onClick={() => this.props.history.push('/forum')}/>
        <Button
          title='О нас'
          onClick={() => this.props.history.push('/about')}/>
        <div style={{
          position: 'absolute',
          display: 'flex',
          right: '0'
          // alignItems: 'center',
          // top: '0',
          // height: '35px',
          // backgroundColor: '#6d6',
          // width: '100%',
        }}>
          <Item>
            <LoginField/>
          </Item>
          <Item>
            <TimeBox/>
          </Item>
        </div>
        {/* <Link/> */}
        {/* <TimeBox/> */}
      </div>
    )
  }
}

TopToolbar.Button = Button

export default TopToolbar
