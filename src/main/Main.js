import React from 'react'
import Routes from './Routes'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as comReducers from '../components/reducers'
import * as viewReducers from '../views/reducers'

class Main extends React.Component {

  render() {
    return (
      <Provider store={createStore(combineReducers({
        ...comReducers,
        ...viewReducers
      }))}>
        <Routes/>
      </Provider>
    )
  }
}

export default Main