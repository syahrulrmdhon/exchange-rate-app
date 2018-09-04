import React from 'react'
import ItemCurrency from '../forms/ItemCurrency'

const Form = (props) => {
    const  { rates } = props
    return (
        <div className='col-md-8'>
            <div className='card mb-4 shadow-sm'>
                <div className="card-header">
                    USD <span className='angka'>1</span>
                </div>
                <ItemCurrency rates={rates}/>
            </div>
        </div>
    )
}

export default Form