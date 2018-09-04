import React, { Component } from 'react'
import { Consumer } from '../../context'

class ItemCurrency extends Component {

  render() {
    return (
        <Consumer>
        {value => {
          const { rates } = value
              return (
                <React.Fragment>
                     <div className='card-body'>
                        <span className='angka'>
                            {rates.CAD}
                            <button type="button" className="btn btn-danger" style={{marginLeft:'10px'}} onClick={this.onClickClose}>
                                &minus;
                            </button>
                        </span>
                        <h5>
                            {Object.keys(rates).find(key => rates[key] === rates.CAD)}
                        </h5>
                        <br/>
                    </div>
                    <div className='card-body'>
                        <span className='angka'>
                            {rates.IDR}
                            <button type="button" className="btn btn-danger" style={{marginLeft:'10px'}} onClick={this.onClickClose}>
                                &minus;
                            </button>
                        </span>
                        <h5>
                            {Object.keys(rates).find(key => rates[key] === rates.IDR)}
                            { /* hehehe */ }
                        </h5>
                        <br/>
                    </div>
                    <div className='card-body'>
                        <span className='angka'>
                            {rates.GBP}
                            <button type="button" className="btn btn-danger" style={{marginLeft:'10px'}} onClick={this.onClickClose}>
                                &minus;
                            </button>
                        </span>
                        <h5>
                            {Object.keys(rates).find(key => rates[key] === rates.GBP)}
                        </h5>
                        <br/>
                    </div>
                    <div className='card-body'>
                        <span className='angka'>
                            {rates.CHF}
                            <button type="button" className="btn btn-danger" style={{marginLeft:'10px'}} onClick={this.onClickClose}>
                                &minus;
                            </button>
                        </span>
                        <h5>
                            {Object.keys(rates).find(key => rates[key] === rates.CHF)}
                        </h5>
                        <br/>
                    </div>
                    <div className='card-body'>
                        <span className='angka'>
                            {rates.SGD}
                            <button type="button" className="btn btn-danger" style={{marginLeft:'10px'}} onClick={this.onClickClose}>
                                &minus;
                            </button>
                        </span>
                        <h5>
                            {Object.keys(rates).find(key => rates[key] === rates.SGD)}
                        </h5>
                        <br/>
                    </div>
                </React.Fragment>
              )
          }
        }
      </Consumer>
    )
  }
}

export default ItemCurrency
