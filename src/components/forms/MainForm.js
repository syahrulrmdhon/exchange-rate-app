import React, { Component } from 'react'
import { Consumer } from '../../context'
import Form from '../forms/Form'

class MainForm extends Component {
  render() {
    return (
        <Consumer>
        {value => {
          const { rates,heading,symbols } = value
            if ( rates === undefined || rates.lenght === 0 ) {
              return <h1>Hai</h1>
            }
            else {
              return (
                <React.Fragment>
                  <h3 className="text-center-mb">{heading}</h3>
                  <div className="row  h-100 justify-content-center align-items-center">
                      <Form rates={rates} symbols={symbols}/>
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
