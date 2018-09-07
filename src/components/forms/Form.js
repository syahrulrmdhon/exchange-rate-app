import React from 'react'


const Form = (props) => {
    const  { rates,symbols} = props
    const ItemCurrency = []
        for (const i in rates) {
            const sym = Object.keys(rates).find(key => rates[key] === rates[i]);
            ItemCurrency.push(
                <div className='card-body' key={i}>
                    <span className='angka'>
                        {rates[i]}
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            style={{marginLeft:'10px'}} 
                            onClick={()=>props.removeListItem(i)}
                        >
                            &minus;
                        </button>
                    </span>
                    <h5>
                        {sym}
                        { /* hehehe */ }
                    </h5>
                            {symbols[sym]}
                    <br/>
                </div>
            )
        }
        return (
            <div className='col-md-8'>
                <div className='card mb-4 shadow-sm'>
                    <div className="card-header">
                        USD 
                        <span className='angka'>
                            <input 
                                className="form-control" 
                                type="number" 
                                defaultValue={props.inputVal} 
                            />
                        </span>
                    </div>
                        {ItemCurrency}
                    </div>
                </div>
        )
}

export default Form