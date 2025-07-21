Module.register("MMM-EmotionWeather", {
  defaults: {
    suggestion: "",
    fortune: "",
    weather: null, // 這裡可以是 null 或者一個物件，根據後端回傳的格式
  },

  start() {
    console.log("✅ MMM-EmotionWeather 模組已載入！");
    this.updateContent();
    setInterval(() => {
      this.updateContent();
    }, 60000);
  },

 updateContent() {
  fetch("http://172.20.10.3:5000/display_content_sentence", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: "getDisplayContent" })
  })
    .then(res => res.json())
    .then(data => {
      this.suggestion = data.result?.suggestion || "精選書摘《我不是不努力，只是做不到你滿意》：大人一句無心的話，如何把孩子推入困境？";
      this.fortune = data.result?.fortune || "今天稱讚家人一句，氣氛 +1°C ☀️";

      return fetch("http://172.20.10.3:5000/display_content");
    })
    .then(res => res.json())
    .then(data => {
      this.weather = data.weather || null;

      // ➤ 等資料真的更新後再更新 DOM
      this.updateDom(500);
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
    <div class="section-text"><span>精選書摘《我不是不努力，只是做不到你滿意》：大人一句無心的話，如何把孩子推入困境？<span></div>
  `;
  wrapper.appendChild(suggestion);

  // 每日運勢
  const fortune = document.createElement("div");
  fortune.innerHTML = `
    <div class="section-title">每日運勢</div>
    <div class="section-text"><span>家庭運勢：今天稱讚家人一句，氣氛 +1°C ☀️</span></div>
  `;
  wrapper.appendChild(fortune);

  // 天氣區塊
  if (this.weather) {
    const w = this.weather;

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
        <div>☀️ 紫外線：${w.uv}</div>111111111
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
