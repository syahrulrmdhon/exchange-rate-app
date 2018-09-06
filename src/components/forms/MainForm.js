import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layouts/Spinner'
import Form from '../forms/Form'

class MainForm extends Component {
  render() {
    return (
        <Consumer>
        {(value,removeListItem) => {
          const { rates,heading,symbols } = value
            if ( rates === undefined || rates.lenght === 0 ) {
              return <Spinner/>
            }
            else {
              return (
                <React.Fragment>
                  <h3 className="text-center-mb">{heading}</h3>
                  <div className="row  h-100 justify-content-center align-items-center">
                      <Form rates={rates} symbols={symbols} removeListItem={this.props.removeListItem}/>
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
