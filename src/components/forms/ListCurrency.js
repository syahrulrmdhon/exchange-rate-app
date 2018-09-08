import React from 'react'


const ListCurrency = (props) => {
    const  { rates,symbols} = props
    const ItemCurrency = []
    const Objects = []
        for (const i in rates) {
            const sym = Object.keys(rates).find(key => rates[key] === rates[i]);
            ItemCurrency.push(
                <div className='card-body' key={i}>
                    <span className='angka'>
                        {symbols[i].currencySymbol} {rates[i]}
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
                        {symbols[i].currencyName}
                    <br/>
                </div>
            )
            Objects.push(i)
        }
        return (
            <div className='col-md-8'>
                <div className='card mb-4 shadow-sm'>
                    <div className="card-header">
                        <h5>USD</h5>
                        United States Dollars
                        <span className='angka'>
                            <input 
                                className="form-control" 
                                type="number" 
                                style={{width:'100px'}}
                                defaultValue={props.inputVal}
                                onChange={(e)=>props.onchanges(e,Objects)}
                            />
                        </span>
                    </div>
                        {ItemCurrency}
                    </div>
                </div>
        )
}

export default ListCurrency