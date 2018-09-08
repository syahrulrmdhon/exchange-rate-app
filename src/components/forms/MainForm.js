import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layouts/Spinner'
import ListCurrency from '../forms/ListCurrency'

class MainForm extends Component {
  render() {
    return (
        <Consumer>
        {({ value, remove, onchanges, onoptionchanges }) => {
          const { resrates,symbols,inputVal } = value
            if ( resrates === undefined || resrates.lenght === 0 ) {
              return <Spinner/>
            }
            else {
              return (
                <React.Fragment>
                  <div className="row  h-100 justify-content-center align-items-center">
                      <ListCurrency 
                        rates={resrates} 
                        symbols={symbols} 
                        removeListItem={remove} 
                        inputVal={inputVal}
                        onchanges={onchanges}
                        onoptionchanges={onoptionchanges}
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
