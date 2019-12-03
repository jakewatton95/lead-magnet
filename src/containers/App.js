import React, {Component} from 'react'
import MigrationForm from './MigrationForm.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render() {
    return (
      <React.Fragment>
        <MigrationForm/>
      </React.Fragment>
    )
  }

}
export default App