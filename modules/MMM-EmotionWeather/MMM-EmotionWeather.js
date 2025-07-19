Module.register("MMM-EmotionWeather", {
  defaults: {
    suggestion: "載入中...",
    fortune: "載入中...",
    weather: null
  },

  start() {
    console.log("✅ MMM-EmotionWeather 模組已載入！");
    this.updateContent();
    setInterval(() => {
      this.updateContent();
    }, 60000);
  },

  updateContent() {
    // 從後端 API 獲取每日新聞、運勢和天氣資訊
    fetch("http://localhost:5000/display_content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: "getDisplayContent" })
    })
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          // 內容在 suggestion 和furtune 中
          this.config.suggestion = data.result.suggestion || "未提供建議";
          this.config.fortune = data.result.fortune || "未提供運勢";
          this.config.weather = data.result.weather || null;
          this.updateDom();
        }
      })
      .catch(err => {
        console.error("❌ 錯誤：", err);
      });
  },

  getDom() {
  const wrapper = document.createElement("div");
  wrapper.className = "emotion-container";

  // 每日新聞
  const suggestion = document.createElement("div");
  suggestion.innerHTML = `
    <div class="section-title">每日新聞</div>
    <div class="section-text"><span>${this.config.suggestion}</span></div>
  `;
  wrapper.appendChild(suggestion);

  // 每日運勢
  const fortune = document.createElement("div");
  fortune.innerHTML = `
    <div class="section-title">每日運勢</div>
    <div class="section-text"><span>家庭運勢：${this.config.fortune}</span></div>
  `;
  wrapper.appendChild(fortune);

  // 天氣區塊
  if (this.config.weather) {
    const w = this.config.weather;

    const weather = document.createElement("div");
    weather.className = "weather-section";
    weather.innerHTML = `
      <div class="weather-title">📍 ${w.city}｜${w.date}</div>
      <div class="weather-items">
        <div>🌅 日出：${w.sunrise}</div>
        <div>🌇 日落：${w.sunset}</div>
        <div>🌡️ 溫度：${w.temperature}（體感 ${w.feels_like}）</div>
        <div>💧 濕度：${w.humidity}</div>
        <div>💨 風速：${w.wind}</div>
        <div>🎈 氣壓：${w.pressure}</div>
        <div>☀️ 紫外線：${w.uv}</div>
      </div>
    `;
    wrapper.appendChild(weather);
  }

  return wrapper;
  },
  getStyles() {
  return ["MMM-EmotionWeather.css"];
  } 
});
