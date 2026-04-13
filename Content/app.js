import { getWeather } from "./api.js";
import { addCity, hasCity } from "./store.js";
import { createCard } from "./ui.js";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const container = document.getElementById("cardContainer");

// 🔥 Default cities
const defaultCities = ["Delhi", "Kolkata"];

// 🔥 Load city (Reusable function)
async function loadCity(city, isDefault = false) {
  if (hasCity(city)) return;

  try {
    const data = await getWeather(city);
    addCity(city);

    // 👇 pass isDefault flag to UI
    const card = createCard(data, isDefault);
    container.appendChild(card);
  } catch (error) {
    console.log(`Error loading ${city}`);
  }
}

// 🔍 Handle search
async function handleSearch() {
  const city = input.value.trim();

  if (!city) return;

  if (hasCity(city)) {
    alert("City already added");
    return;
  }

  // 👇 user searched cities are NOT default
  await loadCity(city, false);
  input.value = "";
}

// 🎯 Event listeners
button.addEventListener("click", handleSearch);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});

// 🚀 Load default cities on app start
window.addEventListener("DOMContentLoaded", () => {
  // 👇 mark them as default (non-removable)
  defaultCities.forEach(city => loadCity(city, true));
});