import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layouts/Spinner'
import Form from '../forms/Form'

class MainForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '1',
    }
  }
  onChange() {
    
  }
  render() {
    return (
        <Consumer>
        {({ value, remove }) => {
          const { rates,heading,symbols } = value
            if ( rates === undefined || rates.lenght === 0 ) {
              return <Spinner/>
            }
            else {
              return (
                <React.Fragment>
                  <h3 className="text-center-mb">{heading}</h3>
                  <div className="row  h-100 justify-content-center align-items-center">
                      <Form 
                        rates={rates} 
                        symbols={symbols} 
                        removeListItem={remove} 
                        inputVal={this.state.inputVal}
                      />
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
