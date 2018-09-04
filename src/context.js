import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        hasil_fetch: [],
        heading: 'Currency converter'
    };

    componentDidMount() {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD`)
        .then(res => {
            console.log(res.data.rates)
            this.setState({hasil_fetch: res.data.rates})
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