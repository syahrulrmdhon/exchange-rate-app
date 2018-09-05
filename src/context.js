import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        rates: [],
        symbols: [],
        heading: 'Currency converter'
    };

    async componentDidMount() {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD`)
        const sym = await axios.get(`https://cors-anywhere.herokuapp.com/http://data.fixer.io/api/symbols?access_key=759c0a107a45ea8fb09d3ff7a74f6b53`)
        
        console.log(res.data)
        console.log(sym.data)
        
        this.setState({
            rates: res.data.rates,
            symbols: sym.data.symbols
        })
    }

  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;