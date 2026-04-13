const cities = new Set();

export function addCity(city) {
  cities.add(city.toLowerCase());
}

export function hasCity(city) {
  return cities.has(city.toLowerCase());
}

export function removeCity(city) {
  cities.delete(city.toLowerCase());
}