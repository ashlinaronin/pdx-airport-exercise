import React, { Component } from "react";
import "./App.css";
import { getWeather } from "./services/weather";
import { AVAILABLE_MONTHS, PDX_LATITUDE, PDX_LONGITUDE } from "./constants";
import MonthSelector from "./components/MonthSelector";
import WeatherReportList from "./components/WeatherReportList";
import WeatherReportSummary from "./components/WeatherReportSummary";
import ErrorMessage from "./components/ErrorMessage";
import LoadingIndicator from "./components/LoadingIndicator";
import { countDaysAcAndHeatUsed } from "./utils/countDays";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMonthChange = this.handleMonthChange.bind(this);

    this.state = {
      weather: [],
      daysAcUsed: 0,
      daysHeatUsed: 0,
      error: "",
      loading: true,
      month: AVAILABLE_MONTHS[0],
      year: new Date().getFullYear()
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
        this.state.year,
        PDX_LATITUDE,
        PDX_LONGITUDE
      );
      const { daysAcUsed, daysHeatUsed } = countDaysAcAndHeatUsed(weather);
      this.setState({
        weather,
        daysAcUsed,
        daysHeatUsed,
        loading: false,
        error: ""
      });
    } catch (err) {
      this.setState({
        error: "Error fetching weather data. Please try again later.",
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">PDX HVAC Report</h1>
        </header>
        <main>
          <section>
            <MonthSelector
              currentMonth={this.state.month}
              onMonthChange={this.handleMonthChange}
            />
          </section>
          <section>
            <LoadingIndicator loading={this.state.loading} />
            <ErrorMessage message={this.state.error} />
          </section>
          <section>
            {!this.state.loading && (
              <WeatherReportList weatherDataArray={this.state.weather} />
            )}
          </section>
          <section>
            {this.state.weather.length > 0 &&
              !this.state.loading && (
                <WeatherReportSummary
                  daysAcUsed={this.state.daysAcUsed}
                  daysHeatUsed={this.state.daysHeatUsed}
                  month={this.state.month}
                  year={this.state.year}
                />
              )}
          </section>
        </main>
        <footer className="app__footer">
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </footer>
      </div>
    );
  }
}

export default App;
