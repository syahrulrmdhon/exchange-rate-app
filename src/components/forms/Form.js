import React from 'react'
import { Consumer } from '../../context';

const Form = (props) => {
    return (
        <Consumer>
            {value => {
            const { rates } = value
            const a = []
            for (const i in rates) {
                a.push(
                    <div className='card-body'>
                        <span className='angka'>
                            {rates[i]}
                            <button type="button" className="btn btn-danger" style={{marginLeft:'10px'}} onClick={this.onClickClose}>
                                &minus;
                            </button>
                        </span>
                        <h5>
                            {Object.keys(rates).find(key => rates[key] === rates[i])}
                            { /* hehehe */ }
                        </h5>
                        <br/>
                    </div>
                )
            }
                return (
                    <div className='col-md-8'>
                        <div className='card mb-4 shadow-sm'>
                            <div className="card-header">
                                USD <span className='angka'>1</span>
                            </div>
                            {a}
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default Form