const API_BASE_URL = "http://localhost:5000/weather";

export async function getWeather(month, latitude, longitude) {
  const url = `${API_BASE_URL}/month/${month}/${latitude}/${longitude}`;
  const response = await fetch(url);
  return await response.json();
}
