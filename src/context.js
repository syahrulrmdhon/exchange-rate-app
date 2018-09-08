import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allres: [],
      rates: [],
      symbols: [],
      inputVal: "1",
      valsymbol: "CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW",
      resrates: [],
      link: `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD&symbols=`
    };
    this.removeListItem = this.removeListItem.bind(this);
    this.onchanges = this.onchanges.bind(this);
    this.onoptionchanges = this.onoptionchanges.bind(this);
    this.handleurl = this.handleurl.bind(this);
  }

  async getlink() {
    const res = await axios.get(`${this.state.link + this.state.valsymbol}`);
    const allres = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD`
    );
    const sym = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v6/currencies`
    );

    this.setState({
      rates: res.data.rates,
      allres: allres.data.rates,
      symbols: sym.data.results,
      resrates: res.data.rates
    });
  }

  async componentDidMount() {
    this.getlink();
  }

  removeListItem = key => {
    const rates = Object.assign({}, this.state.resrates);
    delete rates[key];

    const valsymbol = this.state.valsymbol;
    if (valsymbol.startsWith(key)) {
      const sym = valsymbol.replace(new RegExp(key + ",", "gi"), "");
      this.setState({ valsymbol: sym });
      console.log(sym);
    } else {
      const sym = valsymbol.replace(new RegExp("," + key, "gi"), "");
      this.setState({ valsymbol: sym });
      console.log(sym);
    }

    this.setState({ resrates: rates });
  };

  onchanges = (e, Objects) => {
    const angka = e.target.value;
    const rates = Object.assign({}, this.state.resrates);

    for (var i in Objects) {
      const key = Objects[i];
      rates[key] = this.state.rates[key] * angka;
      this.setState({ resrates: rates });
    }
  };

  handleurl = () => {
    const links = this.state.link;
    const valsymbol = this.state.valsymbol;
    const a = links + valsymbol;
    this.setState({ link: a });
  };

  onoptionchanges = e => {
    const val = e.target.value;
    const valsymbol = this.state.valsymbol;
    const vals = valsymbol + val;
    this.setState({ valsymbol: vals });
  };

  render() {
    return (
      <Context.Provider
        value={{
          value: this.state,
          remove: this.removeListItem,
          onchanges: this.onchanges,
          onoptionchanges: this.onoptionchanges,
          handleurl: this.handleurl
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
