Module.register("MMM-FamilyWeatherStatus", {
  defaults: {
    endpoint: "http://localhost:5000/family_weather", // 若之後部署到他人伺服器，改這裡
    updateInterval: 30 * 60 * 1000
  },

  start() {
    this.status = "載入中...";
    this.icon = null;
    this.getWeather();
    setInterval(() => {
      this.getWeather();
    }, this.config.updateInterval);
  },

  getWeather() {
    fetch(this.config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "getFamilyWeather" })
    })
      .then(res => res.json())
      .then(data => {
        this.status = data.status || "未知天氣";
        this.icon = this.mapIcon(this.status);
        this.updateDom();
      })
      .catch(err => {
        console.error("❌ 家庭天氣資料抓取失敗", err);
      });
  },

  mapIcon(status) {
    switch (status) {
      case "晴天": return "sunny.svg";
      case "陰天": return "cloudy.svg";
      case "小雨": return "rainy.svg";
      case "雷陣雨": return "thunder.svg";
      default: return null; // ❗ 不回傳 unknown.svg，避免 404
    }
  },

  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "family-weather-wrapper";

    const title = document.createElement("div");
    title.className = "family-weather-title";
    title.innerText = "家庭天氣：";

    const status = document.createElement("span");
    status.className = "family-weather-status";
    status.innerText = this.status;

    title.appendChild(status);
    wrapper.appendChild(title);

    // ✅ 只有當有圖示檔名時才加上圖片
    if (this.icon) {
      const icon = document.createElement("img");
      icon.className = "family-weather-icon";
      icon.src = this.file(this.icon);
      wrapper.appendChild(icon);
    }

    return wrapper;
  },

  getStyles() {
    return ["MMM-FamilyWeatherStatus.css"];
  }
});
