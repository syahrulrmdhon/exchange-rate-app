import React, { Component } from 'react'
import { Consumer } from '../../context'

class MainForm extends Component {
  render() {
    return (
        <Consumer>
        {value => {
          const { country,heading } = value
            if ( country === undefined || country.lenght === 0 ) {
              return <h1>Hai</h1>
            }
            else {
              return (
                <React.Fragment>
                  <h3 className="text-center-mb">{heading}</h3>
                  <div className="row">
                    
                  </div>
                </React.Fragment>
              )
            }
          }
        }
      </Consumer>
    )
  }
}

export default MainForm
