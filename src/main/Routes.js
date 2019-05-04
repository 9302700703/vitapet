import React from 'react'
import PropTypes from 'prop-types'
// import { BrowserRouter as Router, Route, Link,  } from 'react-router-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createBrowserHistory } from 'history'
import routers from './routers'
import Login from './Login'
import { Workspace, Button, TopToolbar, TabBoard } from '../components'
import ttt from '../images/main.jpg'

import StaticView from './StaticView'

const getRouters = (routers) => {
  if (!routers) return null
  return routers.map((route, index) => {
    return <Route key={index} path={route.path} component={route.component}>
      {getRouters(route.children)}
    </Route>
  })
}

class Routes extends React.Component {

  render() {
    return (
      <div style={{
        position: 'fixed',
        backgroundColor: '#38a61f',
        backgroundImage: `url(${ttt})`,
        backgroundSize: '152px',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'scroll'
      }}>
        <Router history={createBrowserHistory()}>
          <Route component={StaticView}/>
          {/* <Route component={TopToolbar}/>
          <Route component={TabBoard}/> */}
          <div style={{
            position: 'relative',
            margin: '170px 150px 0 150px'
          }}>
            {getRouters(routers)}
          </div>
        </Router>
      </div>
    )
  }
}

export default Routes