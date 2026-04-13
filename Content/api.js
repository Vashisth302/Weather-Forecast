const API_KEY = "93194c745e247ffee4086bfcd2228235";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
}