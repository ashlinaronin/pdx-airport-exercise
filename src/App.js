import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getWeather} from "./services/weather";
import {PDX_LATITUDE, PDX_LONGITUDE} from "./constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    };
  }

  async componentDidMount() {
    const weather = await getWeather(PDX_LATITUDE, PDX_LONGITUDE);
    this.setState({ weather });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          {JSON.stringify(this.state.weather)}
        </p>
        <p className="App-intro">
          Powered by Dark Sky
        </p>
      </div>
    );
  }
}

export default App;
