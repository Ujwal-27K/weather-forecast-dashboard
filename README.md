<div align="center">

# 🌤️ Weather Forecast Dashboard

### *Professional Weather App with Real-time Data & Advanced Forecasting*

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![API Integration](https://img.shields.io/badge/API-WeatherAPI-FF6B6B?style=for-the-badge)](https://weatherapi.com/)
[![Responsive Design](https://img.shields.io/badge/Design-Responsive-4ECDC4?style=for-the-badge)](/)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://weather-forecast-dashboard-iota.vercel.app/)

🌍 **A comprehensive weather forecasting application built with React and modern web technologies**

[🚀 Live Demo](https://weather-forecast-dashboard-iota.vercel.app/) • [📖 Documentation](#-features) • [🤝 Contributing](#-contributing) • [💻 GitHub](https://github.com/Ujwal-27K/weather-forecast-dashboard)

</div>

---

## ✨ About The Project

A modern, responsive **weather forecast dashboard** web application that provides comprehensive weather information including current conditions, 5-day forecasts, air quality monitoring, and marine weather data. Built with **React**, **Vite**, and featuring an intuitive interface with city search suggestions, keyboard shortcuts, and data export functionality.

### 🎯 Why This Project?

- **🌍 Comprehensive Data**: Real-time weather, forecasts, air quality, and marine conditions
- **🎨 Beautiful Interface**: Modern glassmorphism design with smooth animations
- **⚡ Lightning Fast**: Built with Vite for optimal performance and user experience
- **📱 Mobile-First**: Fully responsive design that works beautifully across all devices
- **♿ Accessible**: WCAG 2.1 compliant with full keyboard navigation support
- **🌙 Dark Mode**: Beautiful dark theme with system preference detection

---

## 🚀 Live Demo & Features

### 🎮 **Interactive Features**

<table>
<tr>
<td width="50%">

### 🌤️ **Weather Functionality**
- ✅ **Real-time Weather Data** - Current conditions with temperature, humidity, pressure
- ✅ **5-Day Forecast** - Detailed daily weather predictions with hourly breakdown
- ✅ **Marine Weather** - Tide information, wave heights, water temperature
- ✅ **Air Quality Monitoring** - Pollutant levels with health impact indicators
- ✅ **Weather Alerts** - Real-time severe weather warnings
- ✅ **Astronomical Data** - Sunrise/sunset times, moon phases, UV index

</td>
<td width="50%">

### 🛠️ **Technical Excellence**
- ✅ **City Search Suggestions** - Smart autocomplete with real-time suggestions
- ✅ **Keyboard Shortcuts** - Spacebar to refresh, T for theme, H for hourly
- ✅ **Data Export** - CSV download functionality for weather data
- ✅ **Geolocation Support** - Automatic location detection
- ✅ **Dark/Light Mode** - Beautiful theme switching with persistence
- ✅ **Progressive Web App** - App-like experience with offline capabilities

</td>
</tr>
</table>

### 🎮 **User Experience Guide**

| 🎯 Action | 🎮 Method | 📝 Description |
|-----------|-----------|----------------|
| **Refresh Weather** | `Click Refresh` or `Spacebar` | Updates all weather data for current location |
| **Search Cities** | `Type in search box` | Real-time city suggestions with autocomplete |
| **Toggle Theme** | `Press T key` or `Theme button` | Switch between light and dark modes |
| **View Hourly Data** | `Press H key` or `Hourly button` | Toggle between daily and hourly forecasts |
| **Export Data** | `Download button` | Export weather data to CSV format |
| **Use Current Location** | `Location button` | Detect and use your current GPS location |

---

## 🛠️ Built With

<div align="center">

### **Frontend Stack**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

### **Build Tools & APIs**
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![WeatherAPI](https://img.shields.io/badge/WeatherAPI-FF6B6B?style=for-the-badge)
![Geolocation API](https://img.shields.io/badge/Geolocation_API-4ECDC4?style=for-the-badge)

### **Deployment & Version Control**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

### 🏗️ **Project Architecture**

**📁 Root Directory:**
- `public/` - Static assets
  - `index.html` - HTML template
  - `manifest.json` - PWA configuration
  - `favicon.ico` - App icon

**📁 Source Code (`src/`):**
- `components/` - React Components
  - `LoadingSpinner.jsx` - Loading states and animations
  - `WeatherIcon.jsx` - Dynamic weather condition icons

- `hooks/` - Custom React Hooks
  - `useWeatherData.js` - Weather API integration
  - `useLocalStorage.js` - Persistent storage management
  - `useGeolocation.js` - GPS location detection
  - `useKeyboardShortcuts.js` - Keyboard navigation

- `services/` - API Services
  - `weatherApi.js` - WeatherAPI.com integration

- `utils/` - Utility Functions
  - `helpers.js` - Date formatting, unit conversion, CSV export

- `App.jsx` - Main application component
- `App.css` - Complete styling with glassmorphism design
- `index.jsx` - React entry point
- `index.css` - Global styles and CSS variables

**📁 Configuration:**
- `package.json` - Dependencies & scripts
- `vite.config.js` - Build configuration
- `.env.example` - Environment variables template

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** v18.0+ - [Download here](https://nodejs.org/)
- **npm** v9.0+ - (Comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **WeatherAPI.com Account** - [Sign up for free](https://weatherapi.com/)

### ⚡ Installation & Setup

Follow these simple steps to get your development environment running:

1️⃣ **Clone the repository**

git clone https://github.com/Ujwal-27K/weather-forecast-dashboard


2️⃣ **Navigate to project directory**

cd weather-forecast-dashboard


3️⃣ **Install dependencies**

npm install

4️⃣ **Set up environment variables**

copy .env.example .env.local

Add your WeatherAPI.com API key to `.env.local`:

VITE_WEATHER_API_KEY=your_api_key_here
VITE_API_BASE_URL=http://api.weatherapi.com/v1


5️⃣ **Start development server**

npm run dev


6️⃣ **Open your browser**
Navigate to `http://localhost:5173`

### 🎯 **Available Scripts**

npm run dev # 🚀 Start development server
npm run build # 📦 Build for production
npm run preview # 👀 Preview production build
npm run lint # 🧹 Run ESLint for code quality


---

## 📖 Usage Guide

### 🌤️ **Getting Started with Weather Data**

1. **🌍 Automatic Location**: The app loads with Mumbai weather by default
2. **🔍 Search Cities**: Type in the search box for real-time city suggestions
3. **📍 Use GPS**: Click "Use My Location" for automatic location detection
4. **🌙 Theme Toggle**: Switch between light and dark modes
5. **⚡ Quick Actions**: Use keyboard shortcuts for lightning-fast navigation

### ⌨️ **Keyboard Shortcuts**

| Key | Action | Description |
|-----|---------|-------------|
| `Spacebar` | **Refresh Weather** | Updates all weather data |
| `T` | **Toggle Theme** | Switch between light/dark mode |
| `H` | **Toggle Hourly View** | Switch between daily/hourly forecast |
| `C` | **Copy Location** | Copy current location to clipboard |
| `Escape` | **Clear Search** | Clear search input and suggestions |
| `↑↓` | **Navigate Suggestions** | Navigate through city suggestions |
| `Enter` | **Select Suggestion** | Select highlighted city suggestion |

### 🌍 **Weather Data Features**

| Feature | Description | Data Source |
|---------|-------------|-------------|
| **Current Weather** | Real-time temperature, conditions, feels-like | WeatherAPI.com |
| **5-Day Forecast** | Daily high/low temperatures, conditions | WeatherAPI.com |
| **Hourly Forecast** | 24-hour detailed weather breakdown | WeatherAPI.com |
| **Air Quality** | PM2.5, CO, NO2, O3 levels with health indices | WeatherAPI.com |
| **Marine Weather** | Tide times, wave heights, water temperature | WeatherAPI.com |
| **Astronomy** | Sunrise/sunset, moon phases, UV index | WeatherAPI.com |

---

## 🌐 API Integration & Technical Details

### 🌤️ **WeatherAPI.com Integration**

This project integrates seamlessly with the [WeatherAPI.com](https://weatherapi.com/) for comprehensive weather data:

// Example API call
const response = await fetch(
${API_BASE}/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=yes&alerts=yes
);


### ✨ **API Features**

- 🌍 **Global Coverage** - Weather data for millions of cities worldwide
- 🎯 **Real-time Data** - Current conditions updated every 15 minutes
- 📅 **Extended Forecasts** - Up to 10 days of detailed forecasts
- 🌬️ **Air Quality Data** - Complete pollutant monitoring
- 🚨 **Weather Alerts** - Severe weather warnings and advisories
- ⚡ **Fast Response** - Optimized for real-time applications

### 🛠️ **Technical Implementation**

- **State Management**: React hooks with efficient state handling
- **Error Boundaries**: Comprehensive error handling and user feedback
- **Performance**: Optimized with `useCallback`, `useMemo`, and debouncing
- **Accessibility**: Full ARIA implementation for screen readers
- **Responsive Design**: CSS Grid and Flexbox with glassmorphism effects
- **PWA Ready**: Service worker and manifest for app-like experience

---

## 📱 Responsive Design & Browser Support

### 📊 **Breakpoint Strategy**

<div align="center">

| 📱 Device Type | 📏 Breakpoint | 🎨 Layout Strategy |
|----------------|---------------|-------------------|
| **Mobile Portrait** | `< 480px` | Single column, touch-optimized buttons |
| **Mobile Landscape** | `480px - 768px` | Optimized spacing, larger touch targets |
| **Tablet** | `768px - 992px` | Enhanced grid layout, better readability |
| **Desktop** | `992px - 1200px` | Full feature layout, optimal information density |
| **Large Desktop** | `1200px+` | Maximum visual impact, expanded details |

</div>

### 🌐 **Browser Compatibility**

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile Browsers** (iOS Safari, Chrome Mobile, Samsung Internet)

### ♿ **Accessibility Features**

- 🎯 **WCAG 2.1 Compliant** - AA accessibility standards
- ⌨️ **Full Keyboard Navigation** - Complete mouse-free operation
- 🔊 **Screen Reader Support** - Comprehensive ARIA implementation
- 🎨 **High Contrast Support** - Accessible color combinations
- 🎭 **Reduced Motion** - Respects user motion preferences
- 🌙 **Dark Mode** - Eye-friendly dark theme option

---

## 🚀 Deployment Guide

### 🌐 **Deploy to Vercel (Recommended)**

Vercel provides the best experience for React applications:

1️⃣ **Install Vercel CLI**

npm install -g vercel

2️⃣ **Build your project**

vercel --prod

4️⃣ **Configure Environment Variables**

Add your `VITE_WEATHER_API_KEY` in Vercel dashboard

### 🔧 **Environment Variables for Production**

VITE_WEATHER_API_KEY=your_production_api_key
VITE_API_BASE_URL=http://api.weatherapi.com/v1
VITE_APP_NAME=Weather Forecast Dashboard


---

## 🤝 Contributing

We love contributions from the community! Here's how you can help make this project even better:

### 🌟 **Ways to Contribute**

- 🐛 **Bug Reports** - Found an issue? Let us know!
- ✨ **Feature Requests** - Have an idea? We'd love to hear it!
- 🔧 **Code Contributions** - Submit pull requests
- 📚 **Documentation** - Help improve our docs
- 🎨 **Design Suggestions** - Make it even more beautiful

### 🛠️ **Development Workflow**

1️⃣ **Fork the repository** on GitHub
2️⃣ **Clone your fork**

git clone https://github.com/Ujwal-27K/weather-forecast-dashboard


3️⃣ **Create a feature branch**

git checkout -b feature/amazing-weather-feature

4️⃣ **Make your changes and commit**

git add .
git commit -m "feat: add amazing weather feature"

5️⃣ **Push to your fork**

git push origin feature/amazing-weather-feature


6️⃣ **Create a Pull Request** on GitHub

### 📝 **Commit Message Convention**

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` ✨ New features
- `fix:` 🐛 Bug fixes
- `docs:` 📚 Documentation updates
- `style:` 🎨 Code style changes (formatting, etc.)
- `refactor:` 🔧 Code refactoring
- `test:` 🧪 Adding or updating tests
- `chore:` 🏗️ Build process or auxiliary tool changes

---

## 📋 Roadmap & Future Enhancements

### 🎯 **Coming Soon**

- [ ] 🗺️ **Interactive Maps** - Weather radar and satellite imagery
- [ ] 📊 **Weather Charts** - Temperature and precipitation graphs  
- [ ] 🌡️ **Unit Conversion** - Celsius/Fahrenheit, km/h to mph
- [ ] 📱 **Push Notifications** - Weather alerts and daily briefings
- [ ] 💾 **Favorite Locations** - Save multiple cities for quick access
- [ ] 🎯 **Weather Widgets** - Embeddable weather components
- [ ] 📈 **Historical Data** - Past weather trends and comparisons

### 💡 **Long-term Vision**

- [ ] 🤖 **AI Weather Insights** - Personalized weather recommendations
- [ ] 📷 **Photo Weather** - Weather-appropriate activity suggestions
- [ ] 👥 **Social Features** - Share weather updates with friends
- [ ] 🌐 **Multi-language** - Internationalization support
- [ ] 📊 **Weather Analytics** - Personal weather usage insights
- [ ] ⌚ **Wearable Support** - Apple Watch and Android Wear integration

---

## 🐛 Troubleshooting & FAQ

### ❓ **Common Issues**

<details>
<summary><strong>🚫 API Key Issues</strong></summary>

If you're getting API errors:

1. Check your `.env.local` file has the correct API key
2. Verify your WeatherAPI.com account is active
3. Ensure you haven't exceeded your API quota
4. Restart the development server after adding the key

Check your environment variables
echo $VITE_WEATHER_API_KEY
</details>

<details>
<summary><strong>🌍 Location Not Found</strong></summary>

If city searches aren't working:

1. Check your internet connection
2. Try searching with more specific terms
3. Use latitude,longitude format for precise locations
4. Clear browser cache and restart

Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

Clear Vite cache
npm run dev -- --force

Check Node.js version
node --version # Should be 18.0+
</details>

### 💻 **System Requirements**

- **Node.js**: 18.0 or higher
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 1GB for project and dependencies
- **Internet**: Stable connection for API calls
- **Browser**: Modern browser with ES6+ support

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

**MIT License** - Copyright (c) 2025 [Ujwal Khairnar]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

---

## 🙏 Acknowledgments & Credits

### 🌤️ **Special Thanks**

- **[WeatherAPI.com](https://weatherapi.com/)** - For providing comprehensive weather data API
- **[React Team](https://reactjs.org/)** - For creating such an incredible framework
- **[Vite Team](https://vitejs.dev/)** - For the lightning-fast build tool
- **[Vercel](https://vercel.com/)** - For seamless deployment and hosting
- **[Lucide React](https://lucide.dev/)** - For beautiful, consistent icons

### 🎯 **Design Inspiration**

- Modern weather app interfaces and design patterns
- Material Design and Apple Human Interface Guidelines
- Glassmorphism design trends and visual effects
- Accessibility-first design principles

### 📚 **Learning Resources**

- [React Documentation](https://reactjs.org/docs)
- [WeatherAPI.com Documentation](https://weatherapi.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

<div align="center">

## 💎 **Project Creator**

### **Ujwal Khairnar**
#### *Full Stack Developer & Weather Enthusiast*

**© 2025 Ujwal Khairnar. All rights reserved.**

*Passionate about creating beautiful, accessible, and performant weather applications.*

---

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=firefoxbrowser&logoColor=white)](https://portfolio-eta-blush-qsq9j1ksqi.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ujwal-khairnar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ujwal-27K/weather-forecast-dashboard)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ujwal.khairnar.uk@gmail.com)

---

### 🌟 **If this project helped you, please consider starring it!**

[![GitHub stars](https://img.shields.io/github/stars/Ujwal-27K/weather-forecast-dashboard?style=social)](https://github.com/Ujwal-27K/weather-forecast-dashboard/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Ujwal-27K/weather-forecast-dashboard?style=social)](https://github.com/Ujwal-27K/weather-forecast-dashboard/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/Ujwal-27K/weather-forecast-dashboard?style=social)](https://github.com/Ujwal-27K/weather-forecast-dashboard/watchers)

---

<sub>🚀 **Built with ❤️ using React, Vite, and WeatherAPI.com**</sub><br>
<sub>🌤️ **Designed for weather enthusiasts, travelers, and curious minds worldwide**</sub>

</div>

---

<div align="center">
<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png" width="100%" />
</div>

