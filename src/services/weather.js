import { API_BASE_URL } from "../config";

export async function getWeather(month, year, latitude, longitude) {
  const url = `${API_BASE_URL}/month/${month}/${year}/${latitude}/${longitude}`;
  const response = await fetch(url);
  return response.json();
}
