import { removeCity } from "./store.js";

export function createCard(data, isDefault = false) {
  const card = document.createElement("div");
  card.className = "card";

  // 🔒 Hide remove button for default cities
  const removeButton = isDefault
    ? "" 
    : `<button class="remove-btn">Remove</button>`;

  card.innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.weather[0].description}</p>
    <h3>${Math.round(data.main.temp)}°C</h3>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h</p>
    ${removeButton}
  `;

  // ✅ Only attach remove logic if NOT default
  if (!isDefault) {
    card.querySelector(".remove-btn").addEventListener("click", () => {
      removeCity(data.name);
      card.remove();
    });
  }

  return card;
}