import React from 'react'
import { Workspace, AvatarEditor } from '../../components'
import ttt from '../../images/main.jpg'

class Main extends React.Component {
  render () {
    return (
      <div>
        <Workspace>
          Главная страница
          <Workspace>
            <AvatarEditor
              image={ttt}
            />
          </Workspace>
        </Workspace>
      </div>
    )
  }
}

export default Main
