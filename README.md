## 🌦️ Weather App
I created this weather application to practice clean coding and build reusable components using simple JavaScript. The app has a clean and minimal interface with a light color combination to keep it visually simple and user-friendly. It is mainly designed for use in India, so I have set the Indian time zone as the default. By default, it shows weather for Delhi and Kolkata, and users can easily add or remove other cities as per their need.
---
Live link:
---

## 🚀 Features

* 🌍 Search weather by city name
* 🏙️ Multi-city support (add multiple cities)
* 🔒 Default cities (Delhi & Kolkata cannot be removed)
* ❌ Remove user-added cities
* 🌡️ Real-time temperature, humidity & wind speed
* 🎨 Clean and modern UI
* ⚡ Fast and lightweight (no frameworks)

---

## 🧠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript (ES6 Modules)
* **API:** OpenWeatherMap API
* **Architecture:** Modular (API, UI, State separation)

---

## 📁 Project Structure

```
weather-app/
│
├── index.html
├── css/
│   └── styles.css
│
├── Content/
│   ├── app.js        # Main logic
│   ├── api.js        # API handling
│   ├── ui.js         # UI rendering
│   └── store.js      # State management
```

---

## ⚙️ How It Works

1. On load, the app automatically displays weather for:

   * Delhi
   * Kolkata

2. Users can:

   * Search any city
   * Add multiple cities
   * Remove added cities

3. The app prevents:

   * Duplicate cities
   * Removal of default cities

---

## 🔑 API Setup (IMPORTANT)

This project uses the OpenWeather API.

### (Basic)

Add your API key inside:

```
Content/api.js
```

---



## ▶️ Run the Project

### Clone the repository

```
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

## 🚀 Future Improvements

* 📊 5-day weather forecast
* 📍 Auto-detect user location
* 💾 LocalStorage (persist cities)
* 🎨 Dynamic weather icons
* 📱 Responsive mobile design
* 🌐 Deployment (Vercel + Render)

---

## 💣 Known Limitations

* API key exposed in frontend (if not using backend)
* No offline support
* Basic error handling

---

## 👨‍💻 Author

**Yamini Vashisth**

---

⭐ If you like this project, consider giving it a star!
