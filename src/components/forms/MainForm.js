import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layouts/Spinner'
import Form from '../forms/Form'

class MainForm extends Component {
  render() {
    return (
        <Consumer>
        {({ value, remove, onchanges }) => {
          const { resrates,symbols,inputVal } = value
            if ( resrates === undefined || resrates.lenght === 0 ) {
              return <Spinner/>
            }
            else {
              return (
                <React.Fragment>
                  <div className="row  h-100 justify-content-center align-items-center">
                      <Form 
                        rates={resrates} 
                        symbols={symbols} 
                        removeListItem={remove} 
                        inputVal={inputVal}
                        onchanges={onchanges}
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
