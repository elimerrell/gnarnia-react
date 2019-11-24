import React, {Component} from 'react'
import Header from './Header'
import Map from './Map'

class Main extends Component {
  render() {
      return (
          <div>
            <Header />
            <Map />
          </div>
      )
  }
}

export default Main;