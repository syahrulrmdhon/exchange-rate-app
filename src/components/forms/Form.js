import React from 'react'

const Form = (props) => {
    const  { hasil_fetch } = props 
    return (
        <div className='col-md-12'>
            <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                    <h5>{Object.keys(hasil_fetch)[0]} : {hasil_fetch.USD}</h5>
                </div>
                <div className='card-body'>
                    <h5>{hasil_fetch.IDR}</h5>
                </div>
            </div>
        </div>
    )
}

export default Form