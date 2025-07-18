Module.register("MMM-TodayWeatherStatus", {
  defaults: {
    lat: 25.038,       // 台北緯度
    lon: 121.5645,     // 台北經度
    updateInterval: 30 * 60 * 1000 // 每 30 分鐘更新一次
  },

  start() {
    this.weatherText = "";
    this.weatherIcon = "";
    this.getWeather();
    setInterval(() => {
      this.getWeather();
    }, this.config.updateInterval);
  },

  getWeather() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.config.lat}&longitude=${this.config.lon}&current=weather_code`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const code = data.current.weather_code;
      this.updateWeatherStatus(code);
      this.updateDom();
    })
    .catch(err => {
      console.error("無法取得天氣資料", err);
    });
  },

  updateWeatherStatus(code) {
    // 根據 weather code 對應顯示
    if ([0, 1].includes(code)) {
      this.weatherText = "今日放晴";
      this.weatherIcon = "sunny.svg";
    } else if ([2, 3].includes(code)) {
      this.weatherText = "今日多雲";
      this.weatherIcon = "cloudy.svg";
    } else if ([51, 53, 55, 61, 63, 80].includes(code)) {
      this.weatherText = "今日小雨";
      this.weatherIcon = "rainy.svg";
    } else if ([95, 96, 99].includes(code)) {
      this.weatherText = "今日雷雨";
      this.weatherIcon = "thunder.svg";
    } else {
      this.weatherText = "今日天氣不明";
    }
  },

  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "today-weather-wrapper";

    const text = document.createElement("div");
    text.className = "today-weather-text";
    text.innerText = this.weatherText;

    wrapper.appendChild(text);

    if (this.weatherIcon) {
      const icon = document.createElement("img");
      icon.className = "today-weather-icon";
      icon.src = this.file(this.weatherIcon);
      wrapper.appendChild(icon);
    }

    return wrapper;
  },


  getStyles() {
    return ["MMM-TodayWeatherStatus.css"];
  }
});
