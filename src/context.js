import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        rates: [],
        heading: 'Currency converter'
    };

    componentDidMount() {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD`)
        .then(res => {
            console.log(res.data)
            this.setState({rates: res.data.rates})
        })
        .catch(err => console.log(err));
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