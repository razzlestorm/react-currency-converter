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


//fetches JSON then saves the data to localStorage
  componentDidMount() {
    if (typeof(Storage) === "undefined") {
        // Web storage not supported! Sad times! Placeholder >
        alert("Oh no! Web storage isn't supported!");

    } else if (localStorage.getItem("JSONstring") === null) {
          //Checks if localstorage has stored the stringified JSON
        fetch(API+SECRET_ID)
          .then(response => response.json())
          .then(data => window.localStorage.setItem('JSONstring', JSON.stringify(data.rates)))
          .catch(err => console.error(this.props.url, err.toString()));


    } else if (localStorage.getItem("JSONstring")){

        this.setState({ rates_data: JSON.parse(localStorage.getItem('JSONstring') )});

        //SETUP INTERVAL TO START AN HOUR-LONG TIMER WHEN THIS STATE GETS SET HERE, WHICH CLEARS LOCAL STORAGE
      }
    }




render(){

const rates = this.state.rates_data;
  //turns this.state.rates_data into an array which can then be mapped in the return()
const currency = Object.keys(rates);

return(
   //maps the array given from currency, assigns a unique key to each div, and joins it with the value of rates_data at its current index
<div>
{currency.map((i) => <div key={i + 1}>{`${i} is trading at ${rates[i]}`}</div>)}
</div>
);

}

}

export default App;
