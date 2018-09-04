import React from 'react'

const Form = (props) => {
    const  { hasil_fetch } = props 
    return (
        <div className='col-md-12'>
            <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                    <h5>1 USD</h5>
                </div>
                <div className='card-body'>
                    <h5>
                        {hasil_fetch.IDR} {Object.keys(hasil_fetch).find(key => hasil_fetch[key] === hasil_fetch.IDR)}
                        { /* hehehe */ }
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Form