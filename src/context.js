import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rates: [],
            symbols: [],
            inputVal: '1',
            valsymbol:'',
            resrates:[],
            link: `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD&symbols=CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW`
        }
        this.removeListItem = this.removeListItem.bind(this)
        this.onchanges = this.onchanges.bind(this)
        this.onoptionchanges = this.onoptionchanges.bind(this)
        this.handleurl = this.handleurl.bind(this)
      }

    async getlink() {
        const res = await axios.get(`${this.state.link}`)
        const sym = await axios.get(`https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v6/currencies`)
        
        this.setState({
            rates: res.data.rates,
            symbols: sym.data.results,
            resrates: res.data.rates
        })
    }

    async componentDidMount() {
        this.getlink()
    }

    removeListItem = key => {
        const rates = Object.assign({}, this.state.resrates)
        delete rates[key]

        this.setState({ resrates: rates })
    };
    
    onchanges = (e,Objects) => {
        const angka = e.target.value
        const rates = Object.assign({}, this.state.resrates)

        for (var i in Objects) {
            const key = Objects[i]
            rates[key] = this.state.rates[key] * angka
            this.setState({ resrates: rates })
        }
    }

    handleurl = () => {
        const links = this.state.link
        const param = this.state.valsymbol
        const a = links + param
        this.setState({link: a})
        console.log(a)
    }

    onoptionchanges = (e) => {
        const val = e.target.value
        this.setState({ valsymbol: val })
        return { val }
    }

  render() {
    return (
        <Context.Provider 
            value={{ 
                value: this.state, 
                remove: this.removeListItem, 
                onchanges: this.onchanges,
                onoptionchanges: this.onoptionchanges,
                handleurl: this.handleurl
            }}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;