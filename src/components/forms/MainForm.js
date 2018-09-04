import React, { Component } from 'react'
import { Consumer } from '../../context'
import Form from '../forms/Form'

class MainForm extends Component {
  render() {
    return (
        <Consumer>
        {value => {
          const { hasil,heading } = value
            if ( hasil === undefined || hasil.lenght === 0 ) {
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
