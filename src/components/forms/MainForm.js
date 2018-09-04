import React, { Component } from 'react'
import { Consumer } from '../../context'
import Form from '../forms/Form'

class MainForm extends Component {
  render() {
    return (
        <Consumer>
        {value => {
          const { hasil_fetch,heading } = value
            if ( hasil_fetch === undefined || hasil_fetch.lenght === 0 ) {
              return <h1>Hai</h1>
            }
            else {
              return (
                <React.Fragment>
                  <h3 className="text-center-mb">{heading}</h3>
                  <div className="row">
                      <Form hasil_fetch={hasil_fetch}/>
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
