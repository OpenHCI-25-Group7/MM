Module.register("MMM-FamilyWeatherStatus", {
  //從後端
  defaults: {
    endpoint: "http:/172.20.10.3:5000:5000/family_weather", // 若之後部署到他人伺服器，改這裡
    updateInterval: 10 * 60 * 1000 
  },

  start() {
    this.status = "載入中...";
    this.icon = null;

    this.badWeatherStart = null;
    this.lastStatus = null;

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

        // ➕ 播放影片的邏輯
        const now = Date.now();
        if (["小雨", "雷陣雨"].includes(this.status)) {
          if (this.lastStatus === this.status) {
            if (this.badWeatherStart && now - this.badWeatherStart >= 2 * 60 * 1000) {
              this.sendNotification("PLAY_BACKGROUND_VIDEO");
              this.badWeatherStart = null; // 播完一次後重置
            }
          } else {
            this.badWeatherStart = now;
          }
        } else {
          this.badWeatherStart = null;
        }
        this.lastStatus = this.status;

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
      default: return null;
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
