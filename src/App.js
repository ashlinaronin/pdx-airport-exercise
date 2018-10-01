import React, { Component } from "react";
import { getWeather } from "./services/weather";
import { countDaysAcAndHeatUsed } from "./utils/countDays";
import { AVAILABLE_MONTHS, PDX_LATITUDE, PDX_LONGITUDE } from "./constants";
import MonthSelector from "./components/MonthSelector";
import WeatherReportList from "./components/WeatherReportList";
import WeatherReportSummary from "./components/WeatherReportSummary";
import ErrorMessage from "./components/ErrorMessage";
import LoadingIndicator from "./components/LoadingIndicator";
import "./App.css";

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

  async componentDidMount() {
    await this.fetchWeatherAndSetState();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { month } = this.state;

    if (month !== prevState.month) {
      await this.fetchWeatherAndSetState();
    }
  }

  async handleMonthChange(event) {
    this.setState({ month: event.target.value });
  }

  async fetchWeatherAndSetState() {
    this.setState({ loading: true, error: "" });

    const { month, year } = this.state;

    try {
      const weather = await getWeather(
        month,
        year,
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
    const {
      month,
      year,
      loading,
      error,
      weather,
      daysAcUsed,
      daysHeatUsed
    } = this.state;

    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">PDX HVAC Report</h1>
        </header>
        <main>
          <section>
            <MonthSelector
              currentMonth={month}
              onMonthChange={this.handleMonthChange}
            />
          </section>
          <section>
            <LoadingIndicator loading={loading} />
            <ErrorMessage message={error} />
          </section>
          <section>
            {!loading && <WeatherReportList weatherDataArray={weather} />}
          </section>
          <section>
            {weather.length > 0 &&
              !loading && (
                <WeatherReportSummary
                  daysAcUsed={daysAcUsed}
                  daysHeatUsed={daysHeatUsed}
                  month={month}
                  year={year}
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
