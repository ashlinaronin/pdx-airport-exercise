import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getWeather} from "./services/weather";
import {AVAILABLE_MONTHS, PDX_LATITUDE, PDX_LONGITUDE} from "./constants";
import MonthSelector from './components/MonthSelector';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMonthChange = this.handleMonthChange.bind(this);

    this.state = {
      weather: null,
      month: AVAILABLE_MONTHS[0]
    };
  }

  handleMonthChange(event) {
    this.setState({ month: event.target.value });
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
        <MonthSelector currentMonth={this.state.month} onMonthChange={this.handleMonthChange} />
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
