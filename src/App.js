import React, { Component } from "react";
import "./App.css";
import { getWeather } from "./services/weather";
import { AVAILABLE_MONTHS, PDX_LATITUDE, PDX_LONGITUDE } from "./constants";
import MonthSelector from "./components/MonthSelector";
import WeatherReportList from "./components/WeatherReportList";
import WeatherReportSummary from "./components/WeatherReportSummary";
import ErrorMessage from "./components/ErrorMessage";
import LoadingIndicator from "./components/LoadingIndicator";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMonthChange = this.handleMonthChange.bind(this);

    this.state = {
      weather: [],
      error: "",
      loading: true,
      month: AVAILABLE_MONTHS[0]
    };
  }

  async handleMonthChange(event) {
    this.setState({ month: event.target.value });
  }

  async componentDidMount() {
    await this.fetchWeatherAndSetState();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.month !== prevState.month) {
      await this.fetchWeatherAndSetState();
    }
  }

  async fetchWeatherAndSetState() {
    this.setState({ loading: true, error: "" });
    try {
      const weather = await getWeather(
        this.state.month,
        PDX_LATITUDE,
        PDX_LONGITUDE
      );
      this.setState({ weather, loading: false, error: "" });
    } catch (err) {
      this.setState({
        error: "Error fetching weather data. Please try again later.",
        loading: false
      });
    }
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
        <LoadingIndicator loading={this.state.loading} />
        <ErrorMessage message={this.state.error} />
        <WeatherReportList weatherDataArray={this.state.weather} />
        {this.state.weather.length > 0 && (
          <WeatherReportSummary
            weatherDataArray={this.state.weather}
            month={this.state.month}
          />
        )}
        <p className="App-intro">
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </p>
      </div>
    );
  }
}

export default App;
