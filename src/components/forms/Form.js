import React from 'react'

const Form = (props) => {
    const  { hasil } = props
    return (
        <div className='col-md-6'>
            <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                    <h5>{hasil.IDR}</h5>
                </div>
            </div>
        </div>
    )
}

export default Form