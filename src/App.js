import React, { Component } from 'react';
import SECRET_ID from './id.js';
import './App.css';



const API = 'https://openexchangerates.org/api/latest.json?app_id=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rates_data: [],

    };
  }

  componentDidMount() {
    fetch(API+SECRET_ID)
      .then(response => response.json())
      .then(data => this.setState({ rates_data: data.rates }))
      .catch(err => console.error(this.props.url, err.toString()));
  }



render(){
  const rates = this.state.rates_data;
  const currency = Object.keys(rates);

  return (
  <div>
{currency.map((i) => <div key={i + 1}>{`${i} is trading at ${rates[i]}`}</div>)}
</div>
  )
}
}

export default App;
