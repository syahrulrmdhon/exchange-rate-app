import React from 'react'
import spinner from './Spinner.gif'

export default () => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading...."
                style={{margin: '40px auto',display: 'block'}}
            />
        </div>
    );
}