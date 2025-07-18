Module.register("MMM-SimpleTemp", {
  defaults: {
    lat: 25.038,
    lon: 121.5645,
    updateInterval: 10 * 60 * 1000 // 每 10 分鐘更新
  },

  start() {
    this.temperature = null;
    this.getData();
    setInterval(() => {
      this.getData();
    }, this.config.updateInterval);
  },

  getData() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.config.lat}&longitude=${this.config.lon}&current=temperature_2m`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current && data.current.temperature_2m !== undefined) {
          this.temperature = Math.round(data.current.temperature_2m);
          this.updateDom();
        }
      })
      .catch((err) => console.error("Weather fetch error:", err));
  },

  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "simple-temp";

    if (this.temperature !== null) {
      wrapper.innerHTML = `${this.temperature}°`;
    } else {
      wrapper.innerHTML = "載入中...";
    }

    return wrapper;
  },

  getStyles() {
    return ["MMM-SimpleTemp.css"];
  }
});
