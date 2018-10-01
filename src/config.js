export const API_BASE_URL =
  process.env.REACT_APP_ENV === "production"
    ? "//ashlin.me/pdx-airport/api/weather"
    : "http://localhost:5555/weather";
