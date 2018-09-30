import React, { Component } from "react";
import "./App.css";
import { getWeather } from "./services/weather";
import { AVAILABLE_MONTHS, PDX_LATITUDE, PDX_LONGITUDE } from "./constants";
import MonthSelector from "./components/MonthSelector";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMonthChange = this.handleMonthChange.bind(this);

    this.state = {
      weather: null,
      month: AVAILABLE_MONTHS[0]
    };
  }

  async handleMonthChange(event) {
    this.setState({ month: event.target.value });
    await this.fetchWeatherAndSetState();
  }

  async componentDidMount() {
    await this.fetchWeatherAndSetState();
  }

  async fetchWeatherAndSetState() {
    const weather = await getWeather(this.state.month, PDX_LATITUDE, PDX_LONGITUDE);
    this.setState({ weather });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cascade Energy</h1>
        </header>
        <MonthSelector
          currentMonth={this.state.month}
          onMonthChange={this.handleMonthChange}
        />
        <p>{JSON.stringify(this.state.weather)}</p>
        <p className="App-intro">
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </p>
      </div>
    );
  }
}

export default App;
