import React from 'react'

import { TopToolbar } from '../../components'

class StaticView extends React.Component {
  render () {
    return (
      <div>
        <TopToolbar { ...this.props }/>
      </div>
    )
  }
}

export default StaticView
