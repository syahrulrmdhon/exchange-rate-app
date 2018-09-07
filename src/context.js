import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rates: [],
            symbols: [],
            inputVal: '1',
        }
        this.removeListItem = this.removeListItem.bind(this);
        this.onchanges = this.onchanges.bind(this)
      }

    async componentDidMount() {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD&symbols=CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW`)
        const sym = await axios.get(`https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v6/currencies`)
        
        console.log(res.data)
        console.log(sym.data.results)
        
        this.setState({
            rates: res.data.rates,
            symbols: sym.data.results
        })
    }

    removeListItem = key => {
        const rates = Object.assign({}, this.state.rates)
        delete rates[key]

        this.setState({ rates })
    };
    
    onchanges = (key,value) => {
        //const ratess = Object.values(this.state.rates[key])
        //const results = ratess * value

        //this.setState({results})
    }

  render() {
    return (
        <Context.Provider value={{ value: this.state, remove: this.removeListItem, onchanges: this.onchanges }}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;